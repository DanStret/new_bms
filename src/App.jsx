import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SystemsView from "./views/SystemsView";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/admin" element={<SystemsView />} />
                {/* Otras rutas */}
            </Routes>
        </Router>
    );
}

export default App;
