import Link from "next/link";

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export default function LinkButton({ children, href, className, ...props }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </Link>
  );
}
