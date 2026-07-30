import { Request, Response, NextFunction } from "express";
import { visitorIdSchema } from "../validators/saved.validator";
import { ValidationError } from "../errors/AppError";

export const VISITOR_HEADER = "x-visitor-id";

/**
 * Requires a stable anonymous visitor UUID (not IP).
 * Clients generate once and send on every saved-vehicles request.
 */
export function requireVisitorId(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const raw = req.header(VISITOR_HEADER)?.trim();
  const parsed = visitorIdSchema.safeParse(raw);

  if (!parsed.success) {
    next(
      new ValidationError(
        "Missing or invalid X-Visitor-Id header (expected UUID)"
      )
    );
    return;
  }

  req.visitorId = parsed.data;
  next();
}
