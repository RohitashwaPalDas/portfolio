import React from "react";

const Work = () => {
    const workData = [
        {
            title: "BongHut",
            description: "An E-commerce Website for selling clothes build using MERN Stack and integrated with Razorpay for payment processing.",
            image: "/bonghut.png",
            link: "https://bong-hut-frontend.vercel.app/"
        }, 
        {
            title: "Rydo",
            description: "A cab booking website built using MERN Stack with features like real-time tracking and booking management and integrated with MapBox API and Razorpay for payment processing.",
            image: "/rydo.png",
            link: "https://rydo-two.vercel.app/"
        },
        {
            title: "NewsNectar",
            description: "A news website built using ReactJS and integrated with NewsAPI for fetching the latest news articles.",
            image: "/newsnectar.png",
            link: "https://newsnectar-frontend.vercel.app/"
        },
        {
            title: "QBoxx",
            description: "A question and answer platform built using ReactJS, allowing users play quiz on different domains",
            image: "/qboxx.png",
            link: "https://qboxx.vercel.app/"
        }
    ]
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg ovo-regular">My Portfolio</h4>
      <h2 className="text-center text-5xl ovo-regular">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ovo-regular">Welcome to my web development portfolio! Explore a collection of projects showcasingmy expertise in full stack development</p>

      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workData.map((item, index) => (
            <div key={index} className="border border-gray-400 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Work;
