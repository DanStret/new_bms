import React from "react";
import Sidebar from '../components/Sidebar/Sidebar';
import AdminNavbar from "../components/Navbars/AdminNavbar";

const SystemsView = () => {
    return (
        <div className="main-layout">
            {/* Sidebar */}
            <Sidebar/>

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
