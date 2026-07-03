import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";
import { ValidationError } from "../errors/AppError";

type ValidationTarget = "body" | "query" | "params";

const targetKeyMap = {
  body: "validatedBody",
  query: "validatedQuery",
  params: "validatedParams",
} as const;

export function validate(schema: ZodTypeAny, target: ValidationTarget = "body") {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[target]);

    if (!result.success) {
      const message = result.error.errors.map((e) => e.message).join(", ");
      next(new ValidationError(message));
      return;
    }

    const key = targetKeyMap[target];
    (req as Request)[key] = result.data as never;
    next();
  };
}
