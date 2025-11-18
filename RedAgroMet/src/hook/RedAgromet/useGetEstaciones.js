import { useState, useEffect } from 'react';
import { estacionesService } from '../../services/RedAgromet/getTableEstaciones';

export function useEstacionesData() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; 

        const loadData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const fetchedData = await estacionesService.getEstaciones();
                if (isMounted) {
                    setData(fetchedData);
                }
            } catch (err) {
                if (isMounted) {
                    console.error("Fallo al obtener datos:", err);
                    setError('No se pudieron cargar los datos de las estaciones.');
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