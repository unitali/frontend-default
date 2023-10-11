import React, { useEffect } from 'react';
import NavbarAdmin from '../components/navbarAdmin';


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
            <NavbarAdmin />
        </div>
    );
}

export default Admin;
