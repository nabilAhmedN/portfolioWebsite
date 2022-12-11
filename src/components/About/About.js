import React from "react";
import { MdShareLocation } from "react-icons/md";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-orange-50 text-black pt-10"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <h1 className="text-3xl mt-5 font-bold underline-offset-3">
                    I am a Front-End Web Developer
                </h1>
                <p className="text-xl mt-4">
                    I am Nabil Ahmed Nahid form Bangladesh. I am Learning
                    Programming every single day. I have some projects with
                    React. I am a hard working person. I always learn new
                    technologies everyday.
                </p>

                <div className="flex items-center text-xl font-bold mt-4">
                    <MdShareLocation className="text-3xl" />{" "}
                    <span className="ml-4">Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center text-xl font-bold mt-4">
                    <BsFillTelephoneInboundFill className="text-2xl" />{" "}
                    <span className="ml-4">+8801820861115</span>
                </div>
                <div className="flex items-center text-xl font-bold mt-4">
                    <MdAttachEmail className="text-3xl" />{" "}
                    <span className="ml-4">nabilahmednahid@gmail.com</span>
                </div>
            </div>
        </div>
    );
};

export default About;
