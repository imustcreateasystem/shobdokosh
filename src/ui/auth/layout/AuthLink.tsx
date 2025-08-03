import Link from "next/link";

type AuthLinkProps = {
  href: string;
  variant: "signup" | "signin";
};

export default function AuthLink({ href, variant }: AuthLinkProps) {
  const linkText = variant === "signup" ? "Sign up" : "Log in";

  const message =
    variant === "signup"
      ? "Already have an account?"
      : "Don't have an account?";

  return (
    <p className="w-full text-xs font-light text-center text-slate-500 dark:text-slate-400">
      {message}{" "}
      <Link
        href={href}
        className="font-semibold transition-colors duration-300 ease-in-out text-primary-500 hover:text-primary-700 dark:text-primary-600 dark:hover:text-primary-400"
      >
        {linkText}
      </Link>
    </p>
  );
}
