import { Icon } from "@iconify/react";
import Logo from "./Logo";
import Link from "next/link";



interface SidebarProps {
  isOpenSidebar: boolean;
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isOpenSidebar, setIsOpenSidebar }: SidebarProps) {

  return (
    <div
      className={`hidden lg:block fixed top-0 right-0 h-screen lg:w-[35%] xxl:w-[40%] shadow-2xl bg-dark-blur 
        backdrop-blur-lg p-10 rounded-tl-3xl rounded-bl-3xl z-50 transform transition-transform duration-500 ease-in-out overflow-y-scroll 
        ${isOpenSidebar ? 'translate-x-0' : 'translate-x-full'}`}
    >
      {/* Header */}
      <div className="text-white flex justify-between items-center w-full">
        <Logo sticky={false} />
        <div
          className="close-btn group bg-white rounded-sm text-prim p-2 cursor-pointer"
          onClick={() => setIsOpenSidebar(false)}
        >
          <Icon
            icon="material-symbols:close"
            width="30"
            height="30"
            className="group-hover:rotate-90 transition duration-500"
          />
        </div>
      </div>

      {/* Content */}
      <p className="text-pera-light py-8">
        At Swift Charge, we transform ideas into impactful solutions that accelerate growth and unlock new opportunities. 
        Guided by expertise, innovation, and a relentless pursuit of excellence, we help our clients thrive in a competitive world.
      </p>

      {/* Search */}
      <h3 className="font-chakrapetch pb-3">Search Now!</h3>
      <form className="search-box relative flex">
        <input
          type="text"
          placeholder="Search Here..."
          className="bg-white ps-3 h-[45px]"
          required
        />
        <button
          type="submit"
          className="absolute right-0 h-full border-l border-border cursor-pointer"
        >
          <Icon icon="ei:search" width="50" height="30" />
        </button>
      </form>

      {/* Contact Info */}
        <h3 className="font-chakrapetch pb-3">Contact Info</h3>
        <div className="space-y-3">
          <div>
            <span className="text-pera-light font-chakrapetch">Phone</span> <br />
            <Link
              href="/contact"
              className="text-white font-unbounded font-normal"
            >
              +234 814 819 6534
            </Link>
          </div>
          <div>
            <span className="text-pera-light font-chakrapetch">Email</span> <br />
            <Link 
              href="/contact"
              className="text-white font-unbounded font-normal"
            >
              info@swiftcharge.com
            </Link>
          </div>
          <div>
            <span className="text-pera-light font-chakrapetch">Location</span>{" "} <br />
            <Link
              href="/contact"
              className="text-white font-unbounded font-normal"
            >
              84, AwoloWay, Ikeja, Lagos.
            </Link>
          </div>
        </div>

        {/* Socials */}
        <h3 className="font-chakrapetch pb-3 pt-8">Follow Us</h3>
        <div className="social-icons flex gap-3">
          <Link href="https://www.facebook.com/">
            <Icon
              icon="gg:facebook"
              width="30"
              height="30"
              className="text-white p-1 rounded-sm cursor-pointer bg-blue-600 transition duration-500 hover:-translate-y-1"
            />
          </Link>
          <Link href="https://www.instagram.com/">
          <Icon
            icon="mdi:instagram"
            width="30"
            height="30"
            className="text-white p-1 rounded-sm cursor-pointer bg-pink-500 hover:text-white transition duration-500 hover:-translate-y-1"
          />
        </Link>
        <Link href="https://www.youtube.com/">
          <Icon
            icon="mdi:youtube"
            width="30"
            height="30"
            className="text-white p-1 rounded-sm cursor-pointer bg-red-500 transition duration-500 hover:-translate-y-1"
          />
        </Link>
        <Link href="https://www.linkedin.com/">
          <Icon
            icon="basil:linkedin-solid"
            width="30"
            height="30"
            className="text-white p-1 rounded-sm cursor-pointer bg-blue-400 transition duration-500 hover:-translate-y-1"
          />
        </Link>
        </div>
    </div>
  );
}