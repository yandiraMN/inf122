import './App.css';
import Login from './components/Login';
import Boton from './components/Boton';
import Registro from './components/Registro'
import Navbar from './components/Navbar'
import Perfil from './components/Perfil';

function App() {
  const click=(x)=>{
    console.log(x);
  }
  return (
    <div className="App">
      <Navbar/>
      <Login/>
      <Registro/>
      <Perfil/>

      
    </div>
  );
}

export default App;
