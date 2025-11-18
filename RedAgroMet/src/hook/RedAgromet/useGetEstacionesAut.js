import { useState, useEffect } from 'react';
import { estacionesAutomaticasService } from '../../services/RedAgromet/getTableEstacionesAut';

export function useEstacionesAut() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; 

        const loadData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                // Llama al servicio de estaciones automáticas
                const fetchedData = await estacionesAutomaticasService.getEstacionesAutomaticas();
                if (isMounted) {
                    setData(fetchedData);
                }
            } catch (err) {
                if (isMounted) {
                    console.error("Fallo al obtener datos de automáticas:", err);
                    setError('No se pudieron cargar los datos de las estaciones automáticas.');
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        loadData();

        return () => {
            isMounted = false;
        };
    }, []); 

    return { data, isLoading, error };
}