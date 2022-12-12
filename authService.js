const login = async (username, password) => {

    try {
        const response = await fetch('http://localhost:8080/api/v1/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const json = await response.json();
        const token = json.token;

        localStorage.setItem('token', token);

        return Promise.resolve();

    } catch (e) {
        return Promise.reject(e);
    }
}

const getOrder = () => {

    const token = localStorage.getItem('token');
    const response = fetch('...', {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    })

}