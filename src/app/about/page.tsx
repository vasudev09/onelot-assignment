import About from "@/components/main/About";
import { Metadata } from "next";

export default function page() {
  return (
    <div>
      <About />
    </div>
  );
}

export const metadata: Metadata = {
  title: "About Us - OneLotTest",
  twitter: {
    title: `About Us - OneLotTest`,
  },
  openGraph: {
    title: `About Us - OneLotTest`,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/about`,
  },
};
