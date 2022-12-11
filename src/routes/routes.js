import { createBrowserRouter } from "react-router-dom";
import Project1 from "../components/ProjectDetails/Project1";
import Project2 from "../components/ProjectDetails/Project2";
import Project3 from "../components/ProjectDetails/Project3";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>
    },
    {
        path: "/project1",
        element: <Project1 />,
    },
    {
        path: "/project2",
        element: <Project2 />,
    },
    {
        path: "/project3",
        element: <Project3 />,
    },
]);
