"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from 'react';
import profileimage from "./profile.png";
import Image from "next/image";
import "../styles/Hero.css";
import linkedimage from "../assets/icons8-linkedin-48.png";
import github from "../assets/icons8-github-50.png";
import codepen from "../assets/icons8-codepen-logo-50 (1).png";
import stackoverflow from "../assets/icons8-stack-overflow-48.png";

const Hero = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    Number.prototype.format = function (n) {
      var r = new RegExp('\\d(?=(\\d{' + (n ? n : 3) + '})+\\.)', 'g');
      return this.toFixed(Math.max(0, ~~n)).replace(r, '$&,');
    };

    function animateCounter(element, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerText = Math.ceil(progress * (end - start) + start).format(0) + '+';
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    countersRef.current.forEach(counterElement => {
      const targetValue = parseInt(counterElement.innerText.replace('+', ''), 10);
      animateCounter(counterElement, 0, targetValue, 10000);
    });
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-60 h-10 violet-gradient" />
        </div>
        <div>
          <h1 className="heroHeadText text-white">
            Hi, I&apos;m <span className="text-[#915EFF]">Girija</span>
          </h1>
          <p className="heroSubText">
            A Creative frontend Web Developer&nbsp;
            <br className="sm:block hidden" />& UI Designer
          </p>
        </div>
        <div className="counter_social">
          <div className="social_icon_content">
          <div className="social_content">
            <Image className="social_ico" src={linkedimage} alt="linkedin logo" />
            <h1><span>LinkedIn Followers</span> <span ref={el => countersRef.current[0] = el} className="count">1000+</span></h1>
          </div>
          <div className="social_content">
            <Image className="social_ico" src={github} alt="github logo" />
            <h1><span>Total repositories</span> <span ref={el => countersRef.current[1] = el} className="count">100+</span></h1>
          </div>
          </div>
          <div className="social_icon_content">
          <div className="social_content">
            <Image className="social_ico" src={codepen} alt="codepen logo" />
            <h1><span>Total Pens</span> <span ref={el => countersRef.current[2] = el} className="count">250+</span></h1>
          </div>
          <div className="social_content stackoverflow">
            <Image className="social_ico " src={stackoverflow} alt="stackoverflow logo" />
            <h1><span>Contributions</span> <span ref={el => countersRef.current[3] = el} className="count">50+</span></h1>
          </div>
          </div>
          
         
        </div>
        <div className="hero_image">
          <div className="profile-container">
            <Image
              src={profileimage}
              alt="Example Image"
              className="profile-image"
            />
            <div className="border-animation"></div>
          </div>
        </div>
      </div>
      <div className="absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
