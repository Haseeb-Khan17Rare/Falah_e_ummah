import Img1 from '../Hero/Img1.jpeg'
import Img2 from  '../Hero/Img2.jpeg'
import Img3 from  '../Hero/Img3.jpeg'
import Img4 from  '../Hero/Img4.jpeg'

import Donations from "../Donations/Donations";
import { useState, useEffect } from "react";

const slides = [
  {
    img: Img1,    // or "./Img1.png" or imported name
    alt: "",
    title: "Fundraising Event",
    text: "Uniting Hearts to Support Those in Need",
    btn1: "Donate Now",
    btn2: "See Event",
  },
  {
    img: Img2,
    alt: "",
    title: "Medical Camp ",
    text: "Free Healthcare for Those Who Need It Most",
    btn1: "Donate Now",
    btn2: " See Project",
    bgPosition: "center 40%" // shift image down
  },  
  {
    img: Img3,    // or "./Img1.png" or imported name
    alt: "",
    title:"Dastakri center ",
    text: "Empowering Women Through Skill and Opportunity",
    btn1: "Donate now",
    btn2: "Learn More",
  },
  {
    img: Img4,    // or "./Img1.png" or imported name
    alt: "",
    title: "Winter drive",
    text: "Help us protect families from the cold",
    btn1: "Donate now",
    btn2: "see project",
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  
  
  useEffect(() => {
  const timer = setInterval(() => {
  setIndex((prev) => (prev + 1) % slides.length);
  }, 5000);
  return () => clearInterval(timer);
  }, []);
  
  
  return (
    <>
  <section
  className="w-full h-[90vh] bg-cover bg-center bg-no-repeat relative flex items-center transition-all duration-700"
  style={{ backgroundImage: `url(${slides[index].img})`,
  backgroundPosition: slides[index].bgPosition || "center", }}
  >
  <div className="absolute inset-0 bg-black/40"></div>
  
  
  <div className="relative max-w-[600px] ml-6 p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl text-white animate-fadeIn">
  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase drop-shadow-lg">
  {slides[index].title}
  </h1>
  
  
  <p className="mt-4 text-lg opacity-90 drop-shadow-sm">
  {slides[index].text}
  </p>
  
  
  <div className="flex gap-6 mt-10">
  <button className="bg-red-500 hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base shadow-xl transition-all">
  {slides[index].btn1}
  </button>
  
  
  <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base shadow-xl transition-all">
  {slides[index].btn2}
  </button>
  </div>
  </div>
  
  
  {/* Arrows */}
  <button
  onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
  className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white text-black px-4 py-2 rounded-full font-bold text-xl backdrop-blur-md"
  >
  ‹
  </button>
  
  
  <button
  onClick={() => setIndex((index + 1) % slides.length)}
  className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white text-black px-4 py-2 rounded-full font-bold text-xl backdrop-blur-md"
  >
  ›
  </button>
  </section>;
    <Donations/>
    </>
  );
};

export default HeroSlider;
