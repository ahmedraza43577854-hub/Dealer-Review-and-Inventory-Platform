import Image from "next/image";
import type { BlogPost } from "@/config/blog";
import { BLOG_IMAGES } from "@/lib/blog/images.generated";
import { bodyStyleIcon } from "@/lib/vehicles/icons";
import { cn } from "@/lib/utils";

export function BlogCover({
  post,
  className,
  sizes,
  iconClassName = "h-14 w-14",
  priority = false,
}: {
  post: BlogPost;
  className?: string;
  sizes: string;
  iconClassName?: string;
  priority?: boolean;
}) {
  const image = BLOG_IMAGES[post.slug];
  const Icon = bodyStyleIcon(post.icon);

  return (
    <div className={cn("relative overflow-hidden bg-photo-placeholder", className)}>
      {image ? (
        <Image
          src={image}
          alt={post.title}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <Icon
            className={cn("text-slate-400/80", iconClassName)}
            strokeWidth={1.25}
          />
        </div>
      )}
    </div>
  );
}
