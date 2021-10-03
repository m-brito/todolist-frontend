import React, { useEffect, useState } from 'react';
import './global.css';
import Routes from "./Routes";

const App = () => {
  const[ip, setIp] = useState("");

  useEffect(() => {
    getIp();
  }, []);

  const getIp = async () => {
    const resp = await fetch(`https://api.ipify.org?format=json`, {
      "method": "GET"
    })
    const data = await resp.json()
    setIp(data.ip);
  }
  if(ip) {
    return (
      <Routes ip={ip} />
    );
  }
  return (
    <div>LOADING</div>
  );
}

export default App;