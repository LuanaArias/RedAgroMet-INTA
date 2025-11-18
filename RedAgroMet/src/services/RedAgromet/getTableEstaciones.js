import { LISTA_OBSERVADORES } from '../../constants/listaObservadores.js'; 

export const estacionesService = {
    async getEstaciones() {
        // Simulación de retraso de red
        await new Promise(resolve => setTimeout(resolve, 1000)); 

        // FUTURA IMPLEMENTACIÓN REAL:
        /*
        const response = await fetch('TU_ENDPOINT_DEL_BACKEND/estaciones');
        if (!response.ok) {
            throw new Error(`Fallo en la carga: ${response.status}`);
        }
        return response.json();
        */
        return LISTA_OBSERVADORES;
    }
};