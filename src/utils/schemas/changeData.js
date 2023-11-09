import * as Yup from "yup";

export const ChangeData = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido"),
    lastName: Yup.string().required("Los apellidos son requerido"),
    cellphone: Yup.string().required("El numero de telefono es requerido"),
});
