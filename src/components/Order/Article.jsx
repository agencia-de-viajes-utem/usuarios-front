import "./Order.css";
export default function Article({
    id,
    Freserva,
    Fviaje,
    origen,
    destino,
    estado,
    detalles,
}) {
    return (
        <article className="Article-container">
            <div className="state">
                <span>{estado}</span>
            </div>
            <div className="site">
                <span>origen: {origen}</span>
                <span>destino: {destino}</span>
            </div>
            <div className="datos">
                <span>Fecha de reserva: {Freserva}</span>
                <span>Fecha de viaje: {Fviaje}</span>
            </div>
            <div className="details">
                <span>Asiento: {detalles.asiento}</span>
                <span>Clase: {detalles.clase}</span>
                <span>Precio: {detalles.precioTotal}</span>
            </div>
        </article>
    );
}
