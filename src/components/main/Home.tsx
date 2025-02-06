import Image from "next/image";
import Header from "../custom/Header";
import LinkButton from "../ui/LinkButton";
import { ArrowRight, Check, Facebook, Instagram } from "lucide-react";
import TestimonialSlider from "../custom/TestimonialSlider";
import FAQList from "../custom/FAQList";
import Footer from "../custom/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="max-w-screen-2xl mx-auto">
          <div className="mx-5 sm:mx-14 md:mx-28 lg:mx-20 xl:mx-52 2xl:mx-80 my-12 lg:mt-24">
            <h1 className="text-3xl font-bold lg:text-5xl text-center">
              Grow your dealership with car loans and digital tools for dealers
            </h1>
            <p className="text-gray-500 lg:text-xl mt-8 text-center">
              We enable dealers to buy more cars through our inventory loan solutions and sell cars
              more efficiently through our Dealership Management System with its inventory
              management, marketing solutions and market insights
            </p>
            <div className="flex justify-center mt-12">
              <LinkButton href="/inquire-now" className="text-base">
                Inquire Now
              </LinkButton>
            </div>
          </div>
          <div className="">
            <Image
              alt="Car dealership management and financing solutions illustration"
              src="/images/hero.png"
              width={2000}
              height={2000}
              className="w-full h-auto object-contain mx-auto md:max-w-[700px] lg:max-w-[1000px]"
            />
          </div>
        </section>
        <div className="my-12">
          <p className="text-gray-500 lg:text-xl text-center">Regulated by</p>
          <Image
            alt="Securities and Exchange Commission of the Philippines logo"
            src="/images/security-commission.png"
            width={400}
            height={400}
            className="w-[150px] lg:w-[200px] h-auto mx-auto"
          />
        </div>
        <section className="max-w-screen-2xl mx-auto">
          <div className="mx-5 sm:mx-14 md:mx-28 lg:mx-20 xl:mx-52 2xl:mx-80">
            <h2 className="text-2xl font-bold lg:text-4xl text-center">
              Everything you need to grow your business
            </h2>
            <p className="text-gray-500 lg:text-xl mt-8 text-center">
              OneLot is your trusted lending and financing partner, exclusively tailored for used
              car dealership. We also offer digital tools for streamlined operations and growth of
              your dealership.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-4 lg:mx-8 my-12">
            <div className="flex rounded-lg border border-gray-200 bg-white shadow-md max-w-lg col-span-1 mx-auto lg:mr-0">
              <div className="flex h-full flex-col text-center gap-4 p-6">
                <p className="text-lg lg:text-2xl font-semibold tracking-tight">
                  Dealer Inventory Loans
                </p>
                <p className="text-[#3600D1] lg:text-xl font-semibold tracking-tight">
                  Accelerate your growth with tailored loan solutions
                </p>
                <p className="text-gray-500 lg:text-lg">
                  Get comprehensive car financing solutions, unlock the potential of your dealership
                  and take it to new heights.
                </p>
              </div>
            </div>
            <div className="flex rounded-lg border border-gray-200 bg-white shadow-md max-w-lg col-span-1 mx-auto lg:ml-0">
              <div className="flex h-full flex-col text-center gap-4 p-6">
                <p className="text-lg lg:text-2xl font-semibold tracking-tight">
                  Dealership Management System
                </p>
                <p className="text-[#3600D1] lg:text-xl font-semibold tracking-tight">
                  Enhance your sales efficiency with free digital tools
                </p>
                <p className="text-gray-500 lg:text-lg">
                  OneLot offers a suite of powerful digital tools designed to optimize your
                  dealership&apos;s operations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-gray-50 py-12">
          <section className="max-w-screen-2xl mx-auto">
            <div className="mx-4 mb-2 lg:mx-8 lg:hidden block">
              <div>
                <p className="text-black text-center text-xl lg:text-3xl font-semibold">
                  Dealer Inventory Loans
                </p>
                <p className="text-[#3600D1] text-center text-lg lg:text-2xl font-semibold mt-4">
                  Car Financing
                </p>
                <p className="text-gray-500 text-center lg:text-lg mt-8">
                  OneLot&apos;s working capital loans allow car dealers to buy more cars and
                  capitalize on opportunities you would otherwise have missed. We transfer the money
                  to your account within 6 hours.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-1 lg:w-[50%] lg:max-w-[50%]">
                <Image
                  alt="Car Financing"
                  src="/images/car-financing-pic.png"
                  loading="lazy"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>
              <div className="flex-1">
                <div className="mx-4 lg:mx-8 hidden lg:block">
                  <div>
                    <p className="text-black text-xl lg:text-3xl font-semibold">
                      Dealer Inventory Loans
                    </p>
                    <p className="text-[#3600D1] text-lg lg:text-2xl font-semibold mt-4">
                      Car Financing
                    </p>
                    <p className="text-gray-500 lg:text-lg mt-8">
                      OneLot&apos;s working capital loans allow car dealers to buy more cars and
                      capitalize on opportunities you would otherwise have missed. We transfer the
                      money to your account within 6 hours.
                    </p>
                  </div>
                </div>
                <div className="mx-4 lg:mx-8">
                  <div>
                    <hr className="my-8 border-gray-300" />
                    <div>
                      <div className="flex flex-row gap-2">
                        <div className="min-w-5 h-5 mt-1 bg-[#f0e2ff] rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-[#3600D1]" />
                        </div>
                        <p className="text-black text-base lg:text-lg font-semibold tracking-tight">
                          Interest as low as 1.8% per month with daily calculation of interest
                        </p>
                      </div>
                      <div className="flex flex-row gap-2 my-4">
                        <div className="min-w-5 h-5 mt-1 bg-[#f0e2ff] rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-[#3600D1]" />
                        </div>
                        <p className="text-black text-base lg:text-lg font-semibold tracking-tight">
                          Financing up to 70% of the vehicle purchase
                        </p>
                      </div>
                      <div className="flex flex-row gap-2">
                        <div className="min-w-5 h-5 mt-1 bg-[#f0e2ff] rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-[#3600D1] " />
                        </div>
                        <p className="text-black text-base lg:text-lg font-semibold tracking-tight">
                          Financing period up to 90 days with a flexible repayment schedule at any
                          point
                        </p>
                      </div>
                    </div>
                    <hr className="my-8 border-gray-300" />
                    <p className="text-gray-500 text-base lg:text-lg font-normal text-center lg:text-left">
                      Use OneLot&apos;s financing solution today, grow the number of cars in your
                      lot and increase your profits.
                    </p>
                  </div>
                  <div className="mt-8 flex justify-center lg:justify-start">
                    <LinkButton href="/products/dealer-inventory-loans">
                      <span className="flex items-center transition-all duration-200 rounded-md text-sm">
                        View Loans
                        <ArrowRight className="ml-1.5 inline-flex w-4 h-4" />
                      </span>
                    </LinkButton>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-screen-2xl mx-auto pt-12">
            <div className="mx-4 mb-2 lg:mx-8 lg:hidden block">
              <div>
                <p className="text-black text-center text-xl lg:text-3xl font-semibold">
                  Dealership Management System
                </p>
                <p className="text-gray-500 text-center lg:text-lg mt-8">
                  OneLot&apos;s digital platform is built with a single goal: to help used car
                  dealers operate their business more efficiently.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-1 order-2 lg:order-1">
                <div className="mx-4 lg:mx-8 hidden lg:block">
                  <div>
                    <p className="text-black text-xl lg:text-3xl font-semibold">
                      Dealership Management System
                    </p>
                    <p className="text-gray-500 lg:text-lg mt-8">
                      OneLot&apos;s digital platform is built with a single goal: to help used car
                      dealers operate their business more efficiently.
                    </p>
                  </div>
                </div>
                <div className="mx-4 lg:mx-8">
                  <div>
                    <hr className="my-8 border-gray-300" />
                    <div>
                      <div className="flex flex-row gap-2">
                        <div className="min-w-5 h-5 mt-1 bg-[#f0e2ff] rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-[#3600D1]" />
                        </div>
                        <p className="text-gray-500 text-base lg:text-lg font-medium tracking-tight">
                          <span className="text-black font-semibold">Inventory Management: </span>
                          Track all details about your cars and sales in one place - from car
                          details to buyers. All you need to know in one place.
                        </p>
                      </div>
                      <div className="flex flex-row gap-2 my-4">
                        <div className="min-w-5 h-5 mt-1 bg-[#f0e2ff] rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-[#3600D1]" />
                        </div>
                        <p className="text-gray-500 text-base lg:text-lg font-medium tracking-tight">
                          <span className="text-black font-semibold">Marketing Tools: </span>Promote
                          your cars across all platforms. Write a marketing text and upload on
                          Facebook Marketplace, Groups, Pages, and Instagram with a single click.
                        </p>
                      </div>
                      <div className="flex flex-row gap-2">
                        <div className="min-w-5 h-5 mt-1 bg-[#f0e2ff] rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-[#3600D1]" />
                        </div>
                        <p className="text-gray-500 text-base lg:text-lg font-medium tracking-tight">
                          <span className="text-black font-semibold">
                            Marketing Insights (Coming Soon):{" "}
                          </span>
                          Get insights on prices and volumes for all cars in the market. We provide
                          you with all the data by combining information from various sources with a
                          single click.
                        </p>
                      </div>
                    </div>
                    <hr className="my-8 border-gray-300" />
                    <p className="text-gray-500 text-base lg:text-lg font-normal text-center lg:text-left">
                      Sign up for OneLot&apos;s dealer platform today, and make managing your cars
                      easier.
                    </p>
                  </div>
                  <div className="mt-8 flex justify-center lg:justify-start">
                    <LinkButton href="/explore-now">
                      <span className="flex items-center transition-all duration-200 rounded-md text-sm">
                        Explore Now
                        <ArrowRight className="ml-1.5 inline-flex w-4 h-4" />
                      </span>
                    </LinkButton>
                  </div>
                </div>
              </div>
              <div className="flex-1 order-1 lg:order-2 w-full lg:w-[50%] lg:max-w-[50%]">
                <Image
                  alt="Dealership Management System"
                  src="/images/dealership-management-system-pic.png"
                  loading="lazy"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>
            </div>
          </section>
        </div>
        <section className="my-12 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-6 xl:gap-12 xl:mx-12">
            <div className="col-span-1 mx-auto sm:mr-0">
              <div className="flex rounded-lg border border-gray-200 bg-white shadow-md flex-col items-center max-w-64 lg:max-w-full h-72 xl:h-80">
                <Image
                  alt="Trust"
                  src="/images/trust.svg"
                  width={150}
                  height={150}
                  className="w-[70px] h-[70px] mt-6"
                />
                <div className="flex h-full flex-col gap-4 p-6">
                  <p className="text-black text-center text-lg lg:text-2xl font-semibold tracking-tight">
                    Trust
                  </p>
                  <p className="text-gray-500 text-center text-base font-normal xl:text-lg">
                    Regulated by Securities and Exchange Commission (SEC) Philippines
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 mx-auto sm:ml-0">
              <div className="flex rounded-lg border border-gray-200 bg-white shadow-md flex-col items-center max-w-64 lg:max-w-full h-72 xl:h-80">
                <Image
                  alt="High Amount"
                  src="/images/high_amount.svg"
                  width={150}
                  height={150}
                  className="w-[70px] h-[70px] mt-6"
                />
                <div className="flex h-full flex-col gap-4 p-6">
                  <p className="text-black text-center text-lg lg:text-2xl font-semibold tracking-tight">
                    High Amount
                  </p>
                  <p className="text-gray-500 text-center text-base font-normal xl:text-lg">
                    Get the highest loan amounts compared to other banks and lenders
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 mx-auto sm:mr-0">
              <div className="flex rounded-lg border border-gray-200 bg-white shadow-md flex-col items-center max-w-64 lg:max-w-full h-72 xl:h-80">
                <Image
                  alt="Fast"
                  src="/images/fast.svg"
                  width={150}
                  height={150}
                  className="w-[70px] h-[70px] mt-6"
                />
                <div className="flex h-full flex-col gap-4 p-6">
                  <p className="text-black text-center text-lg lg:text-2xl font-semibold tracking-tight">
                    Fast
                  </p>
                  <p className="text-gray-500 text-center text-base font-normal xl:text-lg">
                    Get the money within a few hours on the same day
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 mx-auto sm:ml-0">
              <div className="flex rounded-lg border border-gray-200 bg-white shadow-md flex-col items-center max-w-64 lg:max-w-full h-72 xl:h-80">
                <Image
                  alt="Flexible"
                  src="/images/flexible.svg"
                  width={150}
                  height={150}
                  className="w-[70px] h-[70px] mt-6"
                />
                <div className="flex h-full flex-col gap-4 p-6">
                  <p className="text-black text-center text-lg lg:text-2xl font-semibold tracking-tight">
                    Flexible
                  </p>
                  <p className="text-gray-500 text-center text-base font-normal xl:text-lg">
                    Loans are tailored to your needs and run through an easy process
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-screen-2xl mx-auto bg-gray-50 py-12">
          <div className="mx-5 sm:mx-14 md:mx-28 lg:mx-20 xl:mx-52 2xl:mx-80">
            <p className="text-black text-center text-2xl font-bold lg:text-4xl">
              Don&apos;t just take our words!
            </p>
            <div className="h-72 xl:h-80">
              <TestimonialSlider />
            </div>
          </div>
        </section>
        <section className="max-w-screen-2xl mx-auto">
          <div className="mx-5 sm:mx-14 md:mx-28 lg:mx-20 xl:mx-52 2xl:mx-80 my-12">
            <p className="text-black text-center text-2xl font-bold lg:text-4xl">Stay Connected</p>
            <p className="text-gray-500 text-center lg:text-xl mt-8">
              Follow OneLot on Facebook and Instagram to stay up to date with our latest offers,
              updates, and new product features.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center items-center mt-12">
              <LinkButton
                href="https://www.facebook.com/OneLotPH"
                className="bg-transparent border border-black text-sm font-medium"
              >
                <span className="inline-block text-black">
                  <Facebook className="w-4 h-4 mr-2"></Facebook>
                </span>
                <span className="text-black">Follow us on Facebook</span>
              </LinkButton>
              <LinkButton
                href="https://www.instagram.com/onelot.ph"
                className="bg-transparent border border-black text-sm font-medium"
              >
                <span className="inline-block text-black">
                  <Instagram className="w-4 h-4 mr-2"></Instagram>
                </span>
                <span className="text-black">Follow us on Instagram</span>
              </LinkButton>
            </div>
          </div>
        </section>
        <section className="max-w-screen-2xl mx-auto bg-gray-50">
          <div className="mx-5 sm:mx-14 md:mx-28 lg:mx-20 xl:mx-52 2xl:mx-80 py-12">
            <p className="text-black text-center text-2xl font-bold lg:text-4xl mb-8">
              Frequently Asked Questions
            </p>
            <FAQList />
            <div className="flex items-center justify-center mt-8">
              <LinkButton href="/faq" className="text-white">
                See more FAQs <ArrowRight className="ml-2 w-4 h-4" />
              </LinkButton>
            </div>
          </div>
        </section>
        <section className="max-w-screen-2xl mx-auto">
          <div className="mx-5 sm:mx-14 md:mx-28 lg:mx-20 xl:mx-52 2xl:mx-80 my-12">
            <p className="text-black text-center text-2xl font-bold lg:text-4xl">
              Get Started Today
            </p>
            <p className="text-gray-500 text-center text-base lg:text-xl font-normal mt-8">
              We look forward to serving the needs of used car dealers across the Philippines and
              helping them thrive in this dynamic market.
            </p>
            <div className="mt-8 flex justify-center items-center">
              <LinkButton href="/get-started">Get Started</LinkButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
