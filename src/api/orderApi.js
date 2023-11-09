const baseURL = "../../public/ejemplos.json";
export async function getPedidos() {
    try {
        const response = await fetch(baseURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al buscas los pedidos");
    }
}

export async function getPedidosPendientes() {
    try {
        // Haciendo una solicitud GET a la ruta /login-google en tu servidor
    } catch (error) {
        console.error("Error al buscas los pedidos");
    }
}
export async function getPedidosRealizados() {
    try {
        // Haciendo una solicitud GET a la ruta /login-google en tu servidor
    } catch (error) {
        console.error("Error al buscas los pedidos");
    }
}
