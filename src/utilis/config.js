const _config = {
    VITE_AUTH_URL: import.meta.env.VITE_AUTH_URL,
    VITE_BACKEND_URL: import.meta.env.VITE_BACKEND_URL,
    VITE_GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
}


export const config = {
    get(key) {
        const value = _config[key];
        if (!value) {
            const errorMessage = `Environment variable "${key}" not found.`;
            console.error(errorMessage);
            throw new Error(errorMessage); // This will stop execution
        }
        return value;
    }
}