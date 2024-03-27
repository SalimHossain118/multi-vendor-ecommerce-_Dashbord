/** @format */

import { useState, useEffect } from "react";
import Router from "./router/Router";
import { getRoutes } from "./router/routes/index";

import publicRoutes from "./router/routes/publicRoutes";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  useEffect(() => {
    const routes = getRoutes();
    console.log(routes);
    setAllRoutes([...allRoutes, routes]);
  }, []);

  return <Router allRoutes={allRoutes} />;
}

export default App;
