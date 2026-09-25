import { services } from "@/app/api/data";
import HeroSub from "@/app/components/sharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import Link from "next/link";





export default function Contact() {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact"},
  ];

  return (
    <>
      <HeroSub
        title="Contact Us"
        description="We'd love to hear from you. Whether you have a project in mind, a question about our services, or just want to say hello, our team is ready to help."
        breadcrumbLinks={breadcrumbLinks}
      />

      <div className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
          <div className="contact-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="contact-item w-full bg-white shadow-xl space-y-6 p-5 rounded-xl border group hover:bg-prim transition duration-500 h-[230px] flex flex-col justify-between text-center">
              <div className="solution-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360">
                <Icon 
                  icon="tdesign:location"
                  width={30}
                  height={30}
                  className="group-hover:text-white transition-colors duration-500"
                />
              </div>
              <div className="contact-info">
                <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18 pb-3">
                  Our Location
                </h4>
                <p className="text-pera-dark font-normal group-hover:text-white transition-colors duration-500">
                  84 Awolo-Way Ikeja, Lagos.
                </p>
              </div>
            </div>

            <div className="contact-item w-full bg-white shadow-xl space-y-6 p-5 rounded-xl border group hover:bg-prim transition duration-500 h-[230px] flex flex-col justify-between text-center">
              <div className="solution-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360">
                <Icon 
                  icon="ic:outline-email"
                  width={30}
                  height={30}
                  className="group-hover:text-white transition-colors duration-500"
                />
              </div>
              <div className="contact-info">
                <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18 pb-3">
                  Email us
                </h4>
                <p className="text-pera-dark font-normal group-hover:text-white transition-colors duration-500">
                  swiftcharge@gmail.com
                </p>
              </div>
            </div>

            <div className="contact-item w-full bg-white shadow-xl space-y-6 p-5 rounded-xl border group hover:bg-prim transition duration-500 h-[230px] flex flex-col justify-between text-center">
              <div className="solution-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360">
                <Icon 
                  icon="mi:call"
                  width={30}
                  height={30}
                  className="group-hover:text-white transition-colors duration-500"
                />
              </div>
              <div className="contact-info">
                <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18 pb-3">
                  Call us
                </h4>
                <p className="text-pera-dark font-normal group-hover:text-white transition-colors duration-500">
                   +234 123 456 789 <br/>
                  +234 123 456 789
                </p>
              </div>
            </div>

            <div className="contact-item w-full bg-white shadow-xl space-y-6 p-5 rounded-xl border group hover:bg-prim transition duration-500 h-[230px] flex flex-col justify-between text-center">
              <div className="solution-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360">
                <Icon 
                  icon="hugeicons:chat"
                  width={30}
                  height={30}
                  className="group-hover:text-white transition-colors duration-500"
                />
              </div>
              <div className="contact-info">
                <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18 pb-3">
                  Live chat 
                </h4>
                <p className="text-pera-dark font-normal group-hover:text-white transition-colors duration-500">
                  livechat@demo.com <br/>
                  <Link href="/conact">
                    Need Help?
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
          <div className="w-full flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-[50%] bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-8 font-unbounded">
                Feel Free to Get in Touch or Visit our Location.
              </h2>

              <form className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-600 font-medium mb-2">Full name </label>
                  <input 
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border-b border-gray-300 focus:border-teal-500 focus:outline-none py-2"
                    required 
                  />
                </div>

                <div>
                  <label className="block text-gray-600 font-medium mb-2">Email Address </label>
                  <input 
                    type="text"
                    placeholder="Enter your email"
                    className="w-full border-b border-gray-300 focus:border-teal-500 focus:outline-none py-2"
                    required 
                  />
                </div>

                <div>
                  <label className="block text-gray-600 font-medium mb-2">Phone number  </label>
                  <input 
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full border-b border-gray-300 focus:border-teal-500 focus:outline-none py-2"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-2">Choose an option   </label>
                  <select
                    className="w-full border-b border-gray-300 focus:border-prim focus:outline-none py-2 bg-transparent"
                    required
                  >
                    <option value="">Select a Service</option>

                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
          

                  <div className="md:col-span-2">
                  <label className="block text-gray-600 font-medium mb-2"> Type message </label>
                  <textarea 
                    rows={4}
                    placeholder="Write your message..." 
                    className="w-full border-b border-gray-300 focus:border-teal-500 focus:outline-none py-2 resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="text-white bg-dark h-[50px] text-sm lg:text-16 w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group mt-5 lg:mt-0 cursor-pointer"
                >
                  Send a Message
                  <Icon 
                    icon="tabler:arrow-right"
                    width={24}
                    height={24}
                    className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300"
                  />
                </button>
              </form>
            </div>

             <div className="w-full lg:w-[50%] h-[350px] h-[350px] lg:h[500px] rounded-2xl overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3799484614565!2d3.343324400000001!3d6.59961400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228af5bb791%3A0xd74009f07d41b257!2s84%20Obafemi%20Awolowo%20Wy%2C%20Allen%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1789470525339!5m2!1sen!2sng" width="100%" height="100%"  loading="lazy" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}