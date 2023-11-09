import "./Menu.css"; // Asegúrate de que la ruta del archivo CSS sea correcta
import { Link } from "wouter";

function UserMenu() {
    return (
        <div className="user-menu">
            <ul className="horizontal-menu">
                <Link href="/user/profile/order">
                    <li>Mis Reservas</li>
                </Link>
                <li>Perfil</li>
                <li>Otra Opción</li>
                <li>Cerrar Sesión</li>
            </ul>
        </div>
    );
}

export default UserMenu;
