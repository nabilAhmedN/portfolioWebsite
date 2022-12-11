import React from 'react';
import hreo1 from '../../assets/hero1.jpg'
import { BiArrowToRight } from "react-icons/bi";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'
import { Typewriter } from "react-simple-typewriter";
// import resume from '../../assets/resume.pdf'

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-orange-50 pt-16">
            <div className="text-center pt-10">
                <div className="mx-auto bg-gradient-to-b from-cyan-200 rounded-full w-60 h-60 overflow-hidden">
                    <img src={hreo1} alt="" />
                </div>
                <h2 className="text-4xl py-2 text-black font-bold">
                    Hey, EveryOne <span>Welcome</span> to my planet.
                </h2>
                <h3 className="text-3xl font-semibold text-black py-2">
                    I'm Nabil Ahmed Nahid ✌️
                </h3>
                <p>
                    <span className="font-semibold text-2xl text-black">
                        <Typewriter
                            words={["Font-End Developer ", "React Developer"]}
                            loop={Infinity}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </p>

                <div className="py-4 flex justify-center text-4xl text-black gap-3">
                    <a
                        href="https://github.com/nabilAhmedN"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nabil-ahmed-nahid/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillLinkedin />
                    </a>
                    <a
                        href="https://www.facebook.com/nabilAhmedNahid2"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillFacebook />
                    </a>
                </div>
                <div>
                    <a href="Nabil_Ahmed.pdf" download>
                        <button className="group text-white w-fit px-8 py-3 my-2 mx-auto flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Resume
                            <span className="group-hover:rotate-90 duration-300">
                                {" "}
                                <BiArrowToRight size={25} />{" "}
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;