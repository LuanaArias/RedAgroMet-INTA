// Definir URL 
const API_URL = 'http://...';

const getAuthHeaders = (isJson = false) => {
    const token = localStorage.getItem('authToken');
    const headers = {
        'Authorization': `Bearer ${token}`,
    };
    if (isJson) {
        headers['Content-Type'] = 'application/json';
    }
    return headers;
};

export async function uploadContent(finalData) {
    const { contentType, file, ...metadata } = finalData;
    let body;
    let headers;
    if (contentType === 'informe' || contentType === 'pronostico') {
        if (!file) {
            throw new Error('Debe seleccionar un archivo (PDF) para subir este tipo de contenido.');
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('contentType', contentType); 

        // Agrega toda la metadata al FormData
        for (const key in metadata) {
             // filtra valores vacios o nulos antes de anexar al FormData
            const value = metadata[key];
            if (value !== undefined && value !== null && value !== '') {
                formData.append(key, value);
            }
        }
        
        body = formData;
        headers = getAuthHeaders(false); 

    } 
    // Lógica para contenido sin archivo
    else if (contentType === 'educacion') {
        // Los datos se envían como JSON
        body = JSON.stringify({ ...metadata, contentType });
        headers = getAuthHeaders(true); 

    } else {
        throw new Error('Tipo de contenido principal no válido o no soportado.');
    }

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: headers,
        body: body,
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || response.statusText || `Error del servidor (${response.status}).`);
    }
    
    return response.json();
}