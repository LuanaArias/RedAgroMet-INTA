// Definir URL
const API_LOGIN_URL = 'http://...'; 

export async function login(user, password) {
    const response = await fetch(API_LOGIN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            user: user, 
            password: password 
        }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Credenciales inválidas o error de servidor.');
    }
    
    return response.json();
}


export function logout() {
    localStorage.removeItem('authToken');
}