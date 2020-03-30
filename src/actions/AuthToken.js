export const tokenConfig = getState => {
    
    const token = getState().user.token;
    
    const config = {
        headers: {
            'Content-type': 'application/json'
    
        }
    };
    
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
};
