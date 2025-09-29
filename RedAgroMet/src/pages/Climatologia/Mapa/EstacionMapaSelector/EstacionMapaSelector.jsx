import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; 
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';


let DefaultIcon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: icon,
    shadowUrl: shadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;


function MapViewUpdater({ centro, zoomFijo }) {
    const map = useMap();
    useEffect(() => {
        map.invalidateSize(); 
    }, [map]);

    useEffect(() => {
        map.setView(centro, zoomFijo); 
    }, [centro, zoomFijo, map]);

    return null;
}



export function EstacionMapaSelector({
    estaciones, 
    estacionSeleccionadaId, 
    onEstacionSelect 
}) {

    const CENTRO_NACIONAL = [-38.4161, -63.6167]; 
    const ZOOM_NACIONAL = 5; 

    const estacionSeleccionada = estacionSeleccionadaId 
                                 ? estaciones.find(e => e.id === estacionSeleccionadaId)
                                 : null;
    
    const esEstacionSeleccionada = !!estacionSeleccionada;

    const centroActual = esEstacionSeleccionada 
                         ? [estacionSeleccionada.lat, estacionSeleccionada.lng] 
                         : CENTRO_NACIONAL;

    const zoomActual = ZOOM_NACIONAL; 

    
    const handleMarkerClick = (estacionId) => {
        onEstacionSelect(estacionId); 
    };

    return (
        <div style={{ height: '100vh', width: '50%', borderRadius: '8px', overflow: 'hidden' }}> 
            <MapContainer 
                key={esEstacionSeleccionada ? 'estacion' : 'nacional'}
                center={centroActual} 
                zoom={zoomActual} 
                scrollWheelZoom={false} 
                style={{ height: '100%', width: '100%' }}
            >
                <MapViewUpdater 
                    centro={centroActual} 
                    zoomFijo={ZOOM_NACIONAL} 
                /> 

                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {estaciones.map(estacion => (
                    estacion.lat && estacion.lng ? (
                        <Marker 
                            key={estacion.id} 
                            position={[estacion.lat, estacion.lng]} 
                            eventHandlers={{
                                click: () => handleMarkerClick(estacion.id),
                            }}
                        >
                            <Popup>
                                {estacion.descripcion}
                                {estacion.id === estacionSeleccionadaId && <strong> (Seleccionada)</strong>}
                            </Popup>
                        </Marker>
                    ) : null
                ))}
            </MapContainer>
        </div>
    );
}