import { Navigate } from 'react-router-dom';

export function PrivateRoute({ isAuthenticated, requiredRole, userRole, children }) {
    if (!isAuthenticated) {
        // No autenticado → redirige a login
        return <Navigate to="/iniciar-sesion" />;
    }

    if (requiredRole && userRole !== requiredRole) {
        // Autenticado pero rol incorrecto → redirige a inicio
        return <Navigate to="/inicio" />;
    }

    return <>{children}</>;
}
