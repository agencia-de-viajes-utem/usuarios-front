import "./Order.css";
import Menu from "../Menu/index";
import { getPedidos } from "../../api/orderApi";
import { useEffect, useState } from "react";
import Article from "./Article";
function Order() {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPedidos();
            setOrder(data.misReservas);
        };

        fetchData();
    }, []);
    const ordersArray = Object.values(order);
    return (
        <div className="container">
            <Menu />
            <div className="content">
                <h1 className="content-tittle">Pedidos</h1>
                <div className="container-article">
                    {ordersArray.length > 0 ? (
                        ordersArray.map((orde) => {
                            return (
                                <Article
                                    key={orde.idReserva}
                                    Freserva={orde.fechaReserva}
                                    Fviaje={orde.fechaViaje}
                                    origen={orde.origen}
                                    destino={orde.destino}
                                    estado={orde.estado}
                                    detalles={orde.detalles}
                                />
                            );
                        })
                    ) : (
                        <h1>No hay pedidos</h1>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Order;
