import React from 'react';
import "./Project.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Project3 = () => {
    const images = [
        { image: "https://i.ibb.co/7YpgRBn/image.png" },
        { image: "https://i.ibb.co/JFybJDv/image.png" },
        { image: "https://i.ibb.co/myFj5TF/image.png" },
        { image: "https://i.ibb.co/7nLG9YH/image.png" },
    ];
    return (
        <section className="background-pattern bg-orange-50 h-full">
            <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="section-header text-center"
            >
                <h2 className="text-3xl font-semibold underline pt-5 pb-6">
                    ReGame
                </h2>
            </div>

            <Swiper
                className="swiper w-11/12 md:w-7/12 cursor-grab"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {images.map((photo, id) => (
                    <SwiperSlide className="rounded-lg" key={id}>
                        <img
                            className="rounded-lg pb-10"
                            src={photo.image}
                            alt=""
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex flex-wrap gap-6 justify-center mx-2">
                <a
                    href="https://re-game-71d77.web.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button
                        type="button"
                        className="duration-200 hover:scale-105 px-8 py-3 font-semibold border rounded border-black text-black"
                    >
                        Live
                    </button>
                </a>

                <a
                    href="https://github.com/nabilAhmedN/reGame"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button
                        type="button"
                        className="duration-200 hover:scale-105 px-8 py-3 font-semibold border rounded border-black text-black"
                    >
                        Code
                    </button>
                </a>
            </div>

            <div className="text-xl pt-4 mb-10 mx-4 p-4 rounded-lg ">
                <h3 className="text-3xl font-semibold text-center pb-2">
                    Project Description
                </h3>
                <div>
                    &#x2022; ReGame is a resale market website where you can
                    buy, sell games
                    <br />
                    &#x2022; It is build by ReactJs
                    <br />
                    &#x2022; Three different roles with different functionality
                    is present <br />
                    &#x2022; The payment system is integrated by Stripe <br />
                    &#x2022; Site is responsive for large, mobile device
                </div>
            </div>

            <div className="pb-10">
                <h3 className="text-3xl font-semibold text-center pb-2">
                    Technologies Used
                </h3>
                <div className="flex flex-wrap gap-6 justify-center mx-3 mt-3 text-lg font-semibold">
                    <div>React.js</div>
                    <div>Tailwind CSS</div>
                    <div>DaisyUi</div>
                    <div>Firebase</div>
                    <div>Node.js</div>
                    <div>JWT</div>
                    <div>MondoDb</div>
                    <div>Express.js</div>
                    <div> React Router Dom</div>
                    <div>React Hot Toast</div>
                </div>
            </div>
        </section>
    );
};

export default Project3;