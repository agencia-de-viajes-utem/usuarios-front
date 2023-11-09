import "./Profile.css";
import Menu from "../Menu/index";
import Data from "./Data";
import FormData from "./FormData";
import Access from "./Access";
import FormAccess from "./FormAccess";
import { useState } from "react";

// <Data>
//<button className="button_basic_data">a</button>
//</Data>
export default function Profile() {
    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const changeToggle = () => {
        setToggle(!toggle);
    };
    const changeToggle2 = () => {
        setToggle2(!toggle2);
    };
    return (
        <div className="main_container">
            <Menu />

            <div className="sub-container">
                <h1 className="title">Datos personales</h1>
                <div className="information">
                    <h1 className="title_data">Datos basicos</h1>
                    {toggle ? (
                        <FormData>
                            <svg
                                viewBox="0 0 32 32"
                                width={20}
                                height={20}
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={changeToggle}
                            >
                                <g
                                    data-name="Layer 2"
                                    id="Layer_2"
                                >
                                    <path d="M10.1,23a1,1,0,0,0,0-1.41L5.5,17H29.05a1,1,0,0,0,0-2H5.53l4.57-4.57A1,1,0,0,0,8.68,9L2.32,15.37a.9.9,0,0,0,0,1.27L8.68,23A1,1,0,0,0,10.1,23Z" />
                                </g>
                            </svg>
                        </FormData>
                    ) : (
                        <Data>
                            <button
                                onClick={changeToggle}
                                className="button_basic_data"
                            >
                                Editar datos
                            </button>
                        </Data>
                    )}
                </div>

                <div className="information">
                    <h1 className="title_data">Datos de acceso</h1>
                    {toggle2 ? (
                        <FormAccess />
                    ) : (
                        <Access>
                            <button
                                onClick={changeToggle2}
                                className="button_basic_data"
                            >
                                Cambiar contraseña
                            </button>
                        </Access>
                    )}
                </div>
            </div>
        </div>
    );
}
