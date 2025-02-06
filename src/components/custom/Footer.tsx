import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-screen-2xl mx-auto p-14 md:px-24 md:py-16 w-full">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <Image
            alt="OneLot Logo"
            src="/images/logo.png"
            loading="lazy"
            width="150"
            height="150"
            className="mb-4 sm:mb-0"
          />
          <div className="flex flex-col sm:flex-row gap-x-12 text-start">
            <div className="mb-5 sm:mb-0">
              <span className="font-bold mb-2 block">Company</span>
              <Link className="text-gray-700 hover:text-[#57009C]" href="/">
                Home
              </Link>
              <Link className="text-gray-700 hover:text-[#57009C] mt-2 block" href="/about">
                About
              </Link>
              <Link className="text-gray-700 hover:text-[#57009C] mt-2 block" href="/contact">
                Contact
              </Link>
              <Link className="text-gray-700 hover:text-[#57009C] mt-2 block" href="/faq">
                FAQs
              </Link>
            </div>
            <div className="mb-5 sm:mb-0">
              <span className="font-bold mb-2 block">Legal</span>
              <Link className="text-gray-700 hover:text-[#57009C]" href="/consent">
                Consent
              </Link>
              <Link className="text-gray-700 hover:text-[#57009C] mt-2 block" href="/privacy">
                Privacy
              </Link>
              <Link className="text-gray-700 hover:text-[#57009C] mt-2 block" href="/terms">
                Terms
              </Link>
            </div>
          </div>
        </div>
        <hr className="w-full border-gray-200 sm:mx-auto lg:my-8 my-6"></hr>
        <div className="flex flex-col md:flex-row md:justify-between text-start">
          <span className="text-gray-500">
            © 2025{" "}
            <Link className="hover:underline" href="/">
              OneLot Technologies Incorporated Pte. Ltd
            </Link>
            . All Rights Reserved.
          </span>
          <span className="text-gray-500 mt-3 md:mt-0 md:ml-4">
            © 2025{" "}
            <Link className="hover:underline" href="/">
              OneLot Financing Corporation
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-4 md:justify-center md:mt-0">
            <Link
              className="text-gray-500 hover:text-[#57009C]"
              aria-label="Visit OneLot Facebook page"
              href="https://www.facebook.com/OneLotPH/"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              className="text-gray-500 hover:text-[#57009C]"
              aria-label="Visit OneLot Instagram page"
              href="https://www.instagram.com/onelot.ph"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
