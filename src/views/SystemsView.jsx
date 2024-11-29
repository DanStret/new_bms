import React from "react";
import Sidebar from "../components/Sidebar";
import AdminNavbar from "../components/AdminNavbar";

const SystemsView = () => {
    return (
        <div className="main-layout">
            {/* Sidebar */}
            <Sidebar
                routes={[
                    { path: "/dashboard", name: "Dashboard", icon: "tim-icons icon-chart-bar-32" },
                    { path: "/systems", name: "Sistemas", icon: "tim-icons icon-settings-gear-63" },
                ]}
                logo={{
                    innerLink: "/dashboard",
                    imgSrc: require("assets/img/react-logo.png"), // Cambia la ruta según tu proyecto
                    text: "BMS",
                }}
            />

            {/* Contenido principal */}
            <div className="main-content">
                <AdminNavbar brandText="Sistemas" />
                <div className="content">
                    <h1>Sistemas del Piso Seleccionado</h1>
                    {/* Aquí iría el contenido específico de sistemas */}
                </div>
            </div>
        </div>
    );
};

export default SystemsView;
