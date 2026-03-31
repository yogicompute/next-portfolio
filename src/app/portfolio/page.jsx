"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "Karamsetu Foundation",
      desc: "Karamsetu Foundation empowers communities through education, healthcare, and sustainable development. We bridge gaps to create opportunities, fostering growth and supporting underprivileged sections for a brighter future.",
      img: "/karamsetu.png",
      link: "https://karamsetufoundation.org",
    },
    {
      id: 2,
      color: "from-red-300 to-blue-300",
      title: "Case Panda",
      desc: "At our eCommerce store, find durable mobile covers designed to withstand daily wear and tear. Personalize your cover with custom images to make it uniquely yours. Enjoy the perfect blend of protection and style for your mobile device",
      img: "/casepanda.png",
      link: "https://casepanda.vercel.app/",
    },
  {
  id: 3,
  color: "from-violet-300 to-purple-300",
  title: "iYogi Portfolio",
  desc: "A modern personal portfolio showcasing projects, skills, and creative work. Built with performance and clean UI in mind, it highlights real-world applications and a strong focus on user experience and design consistency.",
  img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  link: "https://iyogi.vercel.app/",
},
{
  id: 4,
  color: "from-purple-300 to-red-300",
  title: "NextGen Web App",
  desc: "An upcoming full-stack web application focused on scalability and seamless user interaction. Designed to solve real problems using modern technologies, with an emphasis on speed, responsiveness, and clean architecture.",
  img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  link: "https://iyogi.vercel.app/",
}
  ];
  return (
    <motion.div
      className=" h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-full h-[calc(100vh-6rem)] flex justify-center items-center text-8xl text-center">
          My Works
        </div>
        <div className=" sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className=" flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-5xl xl:text-7xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-48 md:w-96 md:h-60 lg:w-[424px] lg:h-[270px] xl:w-[533px] xl:h-[300px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className=" flex justify-end">
                    <button className="p-2 text-sm md:p-3 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-full h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-5xl lg:text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[400px] md:h-[400px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full-Stack Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
