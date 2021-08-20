import React from 'react';
import Clock from "./Clock";
import "./index.css";
import Layout from "../../Layout";

const defaultText = "-- : -- : --";

// Perfecto para controlar la presentación del componente.
// También es posible agregar funcional extra al card
// Ejemplo de uso, https://github.com/haoxins/react-flatpickr
const Index = () => {
    return (
        <Layout>
            <div className="clock-container">
                <h2>¡Pero, mira la hora que es!</h2>

                <Clock render={(count) => (
                    <div className="clock-container__card">
                        {count || defaultText}
                    </div>
                )}/>
            </div>
        </Layout>
    )
};

export default Index;
