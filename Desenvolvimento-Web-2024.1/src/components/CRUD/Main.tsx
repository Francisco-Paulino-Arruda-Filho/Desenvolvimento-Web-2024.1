import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import CriarAluno from "./Aluno/CriarAluno";
import ListarAluno from "./Aluno/ListarAluno";
import EditarAluno from "./Aluno/EditarAluno";
import { CriarProfessor } from "./Professor/CriarProfessor";
import ListarProfessor from "./Professor/ListarProfessores";
import EditarProfessor from "./Professor/EditarProfessor";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
        children: [
            {
                path:"aluno/CriarAluno",
                element:<CriarAluno />
            },
            {
                path:"aluno/ListarAluno",
                element:<ListarAluno />
            },
            {
                path:"aluno/EditarAluno",
                element:<EditarAluno />
            },
            {
                path:"professor/CriarProfessor",
                element:<CriarProfessor />
            },
            {
                path:"professor/ListarProfessor",
                element:<ListarProfessor />
            },
            {
                path: "professor/EditarProfessor",
                element: <EditarProfessor />
            }
        ]
    }
]);

const Main = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default Main