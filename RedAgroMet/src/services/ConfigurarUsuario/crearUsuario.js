// Definir URL 
const API_URL_CREAR_USUARIO = 'http://...'; 

// Función auxiliar para obtener el token de autorización
const getAuthHeaders = (contentType = 'application/json') => {
    const token = localStorage.getItem('authToken');
    const headers = {
        'Authorization': `Bearer ${token}`,
    };
    if (contentType) {
        headers['Content-Type'] = contentType;
    }
    return headers;
};

//Crea un nuevo usuario en el sistema.

export async function createNewUser(userData) {
    const response = await fetch(API_URL_CREAR_USUARIO, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || response.statusText || 'Error desconocido al crear el usuario.');
    }
    return response.json();
}
