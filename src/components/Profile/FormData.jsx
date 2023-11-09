import { Formik, Form } from "formik";
import InputProfile from "./InputProfile";
import { ChangeData } from "../../utils/schemas/changeData";
import ButtonSubmit from "../Form/ButtonSubmit";
import InputFile from "../Form/InputFile";
import "./FormData.css";
export default function FormData({ children }) {
    const submit = () => {
        console.log("a");
    };
    return (
        <>
            <div className="button_back"> {children}</div>
            <Formik
                initialValues={{
                    name: "",
                    lastName: "",
                    cellPhone: "",
                }}
                onSubmit={submit}
                validationSchema={ChangeData}
            >
                <Form className="container_form_perfil">
                    <div className="container_avatar">
                        <InputFile />
                    </div>
                    <div className="container_names">
                        <InputProfile
                            name="name"
                            type="text"
                            content="Nombre"
                            placeholder="Mario"
                        />
                        <InputProfile
                            name="lastName"
                            type="text"
                            content="Apellidos"
                            placeholder="Perez Perez"
                        />
                    </div>
                    <div className="container_data_form1">
                        <InputProfile
                            name="Genero"
                            type="list"
                            list="gender"
                            content="Genero"
                        />

                        <datalist id="gender">
                            <option value="Masculino" />
                            <option value="Femenino" />
                            <option value="Otros" />
                        </datalist>

                        <InputProfile
                            name="cellphone"
                            type="text"
                            content="Telefono"
                            placeholder="+569123123123"
                        />
                    </div>
                    <div className="container_data_form2">
                        <InputProfile
                            name="fechanacimiento"
                            type="date"
                            content="Fecha de nacimiento"
                        />
                        <ButtonSubmit content="Guardar cambios" />
                    </div>
                </Form>
            </Formik>
        </>
    );
}
