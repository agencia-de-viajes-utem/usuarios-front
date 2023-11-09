import "./Data.css";
export default function Data({ children }) {
    return (
        <div className="container_data">
            <div className="container_img">
                <img src="https://http.cat/101" alt="Gato" />
            </div>
            <div className="info_box">
                <div className="info_item">
                    <label>Nombre</label>
                    <span>Ramon</span>
                </div>
                <div className="info_item">
                    <label>Apellidos</label>
                    <span>Luis Ayala</span>
                </div>
                <div className="info_item">
                    <label>Genero</label>
                    <span>Masculino</span>
                </div>
                <div className="info_item">
                    <label>Numero</label>
                    <span>123456789</span>
                </div>
                <div className="info_item">
                    <label>Fecha de nacimiento</label>
                    <span>03-02-1977</span>
                </div>
            </div>
            <div className="button_data">{children}</div>
        </div>
    );
}
