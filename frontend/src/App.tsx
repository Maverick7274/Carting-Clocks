import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import Router from './Components/Routers/Router';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {

  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <>


      <Router />

    </>
  )
}

export default App
