import React, {useEffect, useState} from 'react';
import FieldsController from './FieldsController';
import './tester.css';
import {useHistory} from 'react-router-dom';
import Layout from '../../Layout';

const Tester = () => {
    const history = useHistory();

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const [isLogged, setIsLogged] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setCredentials(prevState => ({...prevState, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {password, email} = credentials;

        if ([password, email].includes('')) {
            alert('Debe llenar los campos');
        } else {
            setIsLogged(true);
        }
    };

    useEffect(() => {
        if (isLogged) {
            window.setInterval(() => {
                history.push('/');
            }, 3000);
        }
    }, [isLogged, history]);

    return (
        <Layout>
            <div className="card">
                <h1 className="title">Login</h1>

                <form onSubmit={handleSubmit}>
                    <FieldsController
                        value={credentials.email}
                        onChange={handleChange}
                        placeholder="Ingrese su email"
                        name="email"
                        variant="TextField"
                        className="input"/>

                    <FieldsController
                        placeholder="Ingrese su contraseña"
                        type="password"
                        value={credentials.password}
                        onChange={handleChange}
                        name="password"
                        variant="TextField"
                        className="input"/>

                    <FieldsController
                        variant="Button"
                        type="submit"
                        name="Enviar"
                        className="button-submit"
                        disabled={isLogged}/>

                    <div>{isLogged && 'El login fue exitosamente, bye!'}</div>
                </form>
            </div>
        </Layout>
    );
};

export default Tester;
