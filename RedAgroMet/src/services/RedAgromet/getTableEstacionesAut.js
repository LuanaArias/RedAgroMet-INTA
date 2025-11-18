import { LISTA_OBSERVADORES_AUTOMATICA } from '../../constants/listaObservadoresAut.JS'; 

export const estacionesAutomaticasService = {
    async getEstacionesAutomaticas() {
        // Simulación de retraso de red
        await new Promise(resolve => setTimeout(resolve, 1000)); 

        //  FUTURA IMPLEMENTACIÓN REAL:
        /*
        const response = await fetch('TU_ENDPOINT_DEL_BACKEND/estaciones-automaticas');
        if (!response.ok) {
            throw new Error(`Fallo en la carga: ${response.status}`);
        }
        return response.json();
        */

        // Implementación actual con el mock
        return LISTA_OBSERVADORES_AUTOMATICA;
    }
};