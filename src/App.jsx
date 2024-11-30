import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminLayout from './layouts/Admin/Admin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={AdminLayout} />
        {/* Otras rutas */}
      </Switch>
    </Router>
  );
}

export default App;
