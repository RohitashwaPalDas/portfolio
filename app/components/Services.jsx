import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive and dynamic websites using modern technologies.I build responsive, high-performance websites and web applications tailored to your needs. From frontend design to backend development, I deliver complete and scalable solutions.",
      icon: "ri-global-line text-5xl",
    },
  ];
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg ovo-regular">What I Offer</h4>
      <h2 className="text-center text-5xl ovo-regular">My Services</h2>

      <div className="grid grid-cols-1 gap-6 my-10">
        {services.map((item,index)=>(
            <div key={index} className=" text-center border border-gray-400 rounded-lg px-8 py-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[3px_3px_0_#000] flex flex-col items-center gap-4">
                <div>
                    <i className={item.icon}></i>
                    <h2 className="text-lg my-4 text-gray-700 font-bold">{item.title}</h2>
                </div>
                
                <p className="text-sm text-gray-600 leading-5">{item.description}</p>
                
            </div>
        ))}
            
      </div>
    </div>
  );
};

export default Services;
