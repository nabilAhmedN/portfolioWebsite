import React from "react";
import project1 from "../../assets/shuterUp.jpg";
import project2 from "../../assets/SkillEdge.jpg";
import project3 from "../../assets/reGame.jpg";
import { Link } from "react-router-dom";

const Projects = () => {
    const projects = [
        {
            id: 1,
            src: project1,
            projectName: "ShuterUp",
            details: "/project1",
            demoLink: "https://shutter-up-12025.web.app/",
            codeLink: "https://github.com/nabilAhmedN/shutter-up",
        },
        {
            id: 2,
            src: project2,
            details: "/project2",
            projectName: "Skill Edge",
            demoLink: "https://skill-edge-248cf.web.app/",
            codeLink: "https://github.com/nabilAhmedN/skill-edge",
        },
        {
            id: 3,
            src: project3,
            details: "/project3",
            projectName: "ReGame",
            demoLink: "https://re-game-71d77.web.app/",
            codeLink: "https://github.com/nabilAhmedN/reGame",
        },
    ];

    return (
        <div
            name="project"
            className="bg-orange-50 w-full text-black h-full -mt-2 pt-10 md:pt-14"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Project
                    </p>
                    <p className="py-6 text-lg font-bold">
                        Check out some of my work right here
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {projects.map(
                        ({
                            id,
                            src,
                            demoLink,
                            codeLink,
                            projectName,
                            details,
                        }) => (
                            <div
                                key={id}
                                className="shadow-md shadow-gray-600 rounded-lg"
                            >
                                <img
                                    src={src}
                                    alt=""
                                    className="rounded-md duration-200 hover:scale-105"
                                />

                                <h2 className="text-center text-xl font-semibold mt-3 ml-3">
                                    {projectName}
                                </h2>

                                <div className="flex items-center justify-center">
                                    {/* <a
                                        href={demoLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button className="font-medium w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                            Live
                                        </button>
                                    </a> */}
                                    {/* <a
                                        href={codeLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button className="font-medium w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                            Code
                                        </button>
                                    </a> */}
                                    <Link to={details}>
                                        <button className="font-medium w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                            Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Projects;
