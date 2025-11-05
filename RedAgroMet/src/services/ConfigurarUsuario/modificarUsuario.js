// Definir URL 
const API_BASE_URL = 'http://...'; 

// Función auxiliar para obtener el token de autorización
const getAuthHeaders = () => {
    const token = localStorage.getItem('authToken');
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
};

// Actualiza el nombre de usuario

export async function updateUsername(newUsername) {
    const response = await fetch(`${API_BASE_URL}/username`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({ newUsername }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al actualizar el nombre de usuario.');
    }
    return response.json();
}

//Actualiza la contraseña

export async function updatePassword(currentPassword, newPassword) {
    const response = await fetch(`${API_BASE_URL}/password`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({ currentPassword, newPassword }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al actualizar la contraseña. Verifica tu contraseña actual.');
    }
    return response.json();
}
