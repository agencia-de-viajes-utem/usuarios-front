import "./Data.css";
export default function Acces({ children }) {
    return (
        <div className="container_data">
            <div className="info_box">
                <div className="info_item">
                    <label>Correo</label>
                    <span>test.1@gmail.com</span>
                </div>
                <div className="info_item">
                    <label>Contraseña</label>
                    <span>******</span>
                </div>
            </div>
            <div className="button_data">{children}</div>
        </div>
    );
}
