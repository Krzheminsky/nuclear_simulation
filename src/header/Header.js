import React, { Component } from "react";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NuclearSimulation<br /><h1 className="title">Моделювання уражаючих факторів ядерного вибуху</h1></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse  header" id="navbarColor03">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Головна<span className="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/how">Як користуватися</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/what">Що нового</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to="/application">Мобільний додаток</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" target="_blank" rel="noreferrer" href="http://forecast.inf.ua/" data-help="Прогнозування наслідків аварій на хімічно-небезпечних об'єктах">Forecast</a>
                            </li>
                            <li className="nav-item metod">
                                <motion.a className="nav-link whats menu" target="_blank"

                                    initial={{
                                        scaleY: 1.0,
                                    }}
                                    transition={{
                                        duration: .15,
                                    }}
                                    whileHover={{
                                        scaleY: 1.8,
                                    }}
                                    rel="noreferrer" href="http://krzheminsky.inf.ua/">About Me</motion.a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}