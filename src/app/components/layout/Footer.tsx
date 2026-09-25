import { Icon } from "@iconify/react";
import Link from "next/link";
import Logo from "./header/Logo";
import Image from "next/image";
import { footerLinks } from "@/app/api/data";





export default function Footer() {

  return (
    <>
      <footer className="pt-10 relative bg-white">
        <div className="container mx-auto px-4 max-w-screen-xl">
          {/* Top Contact Section */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-center border-b pb-10 mb-10 gap-6">
            {/* Contact Info */}
            <div className="flex flex-wrap md:flex-nowrap gap-6">
              <div className="flex items-start text-foottext text-[15px]">
                <Icon icon="weui:location-outlined" className="w-6 h-6 mr-3 mt-1 "/>
                <div className="flex flex-col">
                  <span>84. Awolowo-Way </span>
                  <span>Ikeja, Lagos</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-footer">
                <Icon icon="majesticons:phone-retro-line" className="w-6 h-6"/>
                <Link
                  href="#"
                  className=" text-[15px] hover:text-prim"
                >
                  +234 814 819 6534
                </Link>
              </div>

              <div className="flex items-center gap-2 text-footer">
                <Icon icon="clarity:email-line" className="w-6 h-6"/>
                <Link
                  href="#"
                  className=" text-[15px] hover:text-prim"
                >
                   info@swiftcharge.com
                </Link>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link 
                href="https://www.facebook.com/"
                className="text-muted hover:text-prim transition-colors"
              >
                
                <Icon
                  icon="fe:facebook"
                  width="28"
                  height="28"
                  className="rounded-sm cursor-pointer transition duration-500 hover:-translate-y-1"
                />
              </Link>
              <Link 
                href="https://www.x.com/"
                className="text-muted hover:text-prim transition-colors"
              >
                
                <Icon
                  icon="fa6-brands:square-twitter"
                  width="28"
                  height="28"
                  className="rounded-sm cursor-pointer transition duration-500 hover:-translate-y-1"
                />
              </Link>
              <Link 
                href="https://www.linkedin.com/"
                className="text-muted hover:text-prim transition-colors"
              >
                
                <Icon
                  icon="fa6-brands:linkedin"
                  width="28"
                  height="28"
                  className="rounded-sm cursor-pointer transition duration-500 hover:-translate-y-1"
                />
              </Link>
              <Link 
                href="https://www.youtube.com/"
                className="text-muted hover:text-prim transition-colors"
              >
                
                <Icon
                  icon="cbi:youtube-alt"
                  width="31"
                  height="31"
                  className="rounded-sm cursor-pointer transition duration-500 hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-5">
            {/* First Column Logo + Awards */}
            <div className="lg:col-span-3">
              <div className="text-black pb-5">
                <Logo />
              </div>
              <p className="text-[14px] leading-6 text-foottext">
                We combine innovation, expertise, and technology to create practical
                solutions that help businesses grow, adapt, and achieve lasting results.
              </p>
              <div className="flex flex-wrap gap-3 items-center pt-5">
                <Image 
                src="/images/footer/award-logo-1.webp"
                alt="award-logo-1"
                width={70}
                height={70}
                className="p-2 cursor-pointer bg-black"
              />
              <Image 
                src="/images/footer/award-logo-2.webp"
                alt="award-logo-2"
                width={70}
                height={70}
                className="bg-black p-2 cursor-pointer"
              />
              </div>
            </div>

            {/* Second Column */}
            <div className="lg:col-span-2">
              <h4 className="text-[18px] text-black mb-3 font-chakrapetch font-bold">Services</h4>
              <ul>
                {footerLinks.slice(0, 5).map((item, index) => (
                  <li key={index} className="pb-2">
                    <Link 
                      href="#"
                      className="text-foottext text-[15px] hover:text-prim transition-colors"
                    >
                      {item.link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Third Column */}
            <div className="lg:col-span-2">
              <h4 className="text-[18px] text-black mb-3 font-chakrapetch font-bold">Services</h4>
              <ul>
                {footerLinks.slice(5, 10).map((item, index) => (
                  <li key={index} className="pb-2">
                    <Link 
                      href="#"
                      className="text-foottext text-[15px] hover:text-prim transition-colors"
                    >
                      {item.link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fourth Column */}
            <div className="lg:col-span-2">
              <h4 className="text-[18px] text-black mb-3 font-chakrapetch font-bold">Services</h4>
              <ul>
                {footerLinks.slice(10, 16).map((item, index) => (
                  <li key={index} className="pb-2">
                    <Link 
                      href="#"
                      className="text-foottext text-[15px] hover:text-prim transition-colors"
                    >
                      {item.link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fifth Column */}
            <div className="lg:col-span-5">
              <p className="text-[18px] text-black font-bold font-chakrapetch">
                Sign up for updates
              </p>
              <form className="mt-5">
                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter address"
                    className="w-full bg-white placeholder:text-foottext text-black py-3 pl-5 pr-10 border border-border rounded-md" 
                  />
                  <Icon 
                    icon="solar:plain-2-linear"
                    className="text-[20px] text-foottext absolute right-4 top-3.5"
                  />
                </div>
              </form>
              <p className="text-[18px] text-black font-bold font-chakrapetch pt-10 pb-4">
                Get App
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#"
                >
                  <Image 
                    src="/images/footer/google.webp"
                    alt="Google Play"
                    height={45}
                    width={140}
                    className="w-auto h-auto"
                  />
                </Link>
                <Link 
                  href="#"
                >
                  <Image 
                    src="/images/footer/app.webp"
                    alt="App Store"
                    height={45}
                    width={140}
                    className="w-auto h-auto"
                  />
                </Link>
             </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center border-t mt-10 pt-6 text-center sm:text-left">
            <p className="text-[15px] text-foottext mb-3 sm:mb-0">
               © 2026. All rights reserved by{" "}
               <Link 
                  href="#"
                  target="blank"
                  className="hover:text-prim"
                >
                  SwiftCharge
                </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}