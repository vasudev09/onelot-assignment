import Link from "next/link";

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export default function LinkButton({ children, href, className, ...props }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex justify-center items-center px-[18px] py-[10px] text-sm font-medium text-white bg-primary rounded-md whitespace-nowrap ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </Link>
  );
}
