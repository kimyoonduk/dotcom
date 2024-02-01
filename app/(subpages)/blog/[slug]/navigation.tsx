import Link from "@/_components/link";
import { Post } from "@/lib/types";

export const FooterNavigation = ({
  previous,
  next,
}: {
  previous?: Post;
  next?: Post;
}) => {
  return (
    <div className="flex flex-col items-center justify-between w-full max-w-2xl px-4 mx-auto space-y-4 md:px-4 md:space-y-0 md:flex-row md:max-w-4xl">
      <div className="mr-auto">
        {previous && (
          <Link
            href={`/blog/${previous.slug}`}
            className="flex items-center space-x-2"
            highlight={true}
          >
            <span className="text-sm font-semibold ">Prev</span>
            <span className="text-base font-medium">{previous.title}</span>
          </Link>
        )}
      </div>
      <div className="ml-auto">
        {next && (
          <Link
            href={`/blog/${next.slug}`}
            className="flex items-center space-x-2"
            highlight={true}
          >
            <span className="text-sm font-semibold">Next</span>
            <span className="text-base font-medium">{next.title}</span>
          </Link>
        )}
      </div>
    </div>
  );
};
