import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Certifique-se de importar o JS do Bootstrap
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
    Navigate({ to: "/" })
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Aluno
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/aluno/CriarAluno" className="dropdown-item">Criar aluno</Link>
                                    </li>
                                    <li>
                                        <Link to="/aluno/ListarAluno" className="dropdown-item">Listar aluno</Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link to="/aluno/EditarAluno" className="dropdown-item">Editar aluno</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Professor
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/professor/CriarProfessor" className="dropdown-item">Criar professor</Link>
                                    </li>
                                    <li>
                                        <Link to="/professor/ListarProfessor" className="dropdown-item">Listar professor</Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link to="/professor/EditarProfessor" className="dropdown-item">Editar professor</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default NavBar;
