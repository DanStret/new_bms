/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import SystemsView from "../views/SystemsView";

var routes = [
  {
    path: "/Systemview",
    name: "View",
    icon: "fa fa-building",
    component: <SystemsView />,
    layout: "/admin",
  },

  
];
export default routes;
