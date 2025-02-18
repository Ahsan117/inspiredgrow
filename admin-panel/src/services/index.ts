export const authenticateUser = async (username: string, password: string) => {
    // Function to handle user authentication
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
};

export const fetchData = async (endpoint: string) => {
    // Function to fetch data from a given API endpoint
    const response = await fetch(`/api/${endpoint}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const updateData = async (endpoint: string, data: object) => {
    // Function to update data at a given API endpoint
    const response = await fetch(`/api/${endpoint}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const deleteData = async (endpoint: string) => {
    // Function to delete data at a given API endpoint
    const response = await fetch(`/api/${endpoint}`, {
        method: 'DELETE',
    });
    return response.json();
};