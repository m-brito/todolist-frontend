import './global.css';
import Routes from "./Routes";

function App() {
  async function ip() {
    const resp = await fetch(`https://api.ipify.org?format=json`, {
        "method": "GET"
    })
    const data = await resp.json()
    console.log(data.ip);
  }
  
  ip()
  return (
    <Routes />
  );
}

export default App;

// async function ip() {
//   const resp = await fetch(`https://api.ipify.org?format=json`, {
//       "method": "GET"
//   })
//   const data = await resp.json()
//   console.log(data.ip);
// }

// ip()
