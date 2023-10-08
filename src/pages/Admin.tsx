import React, { useEffect } from 'react';


function Admin() {
    useEffect(() => {
        // Recupere o token do localStorage
        const authToken = localStorage.getItem('authToken');
        console.log(authToken)


        // Faça uma solicitação autenticada usando o token
        fetch(process.env.REACT_APP_API_URL + "/users", {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    return (
        <div>
            <h1>ADMIN PAGE</h1>
        </div>
    );
}

export default Admin;
