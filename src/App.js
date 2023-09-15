import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { MyContextProvider } from './context/Context'; // Importa el proveedor de contexto

function App() {
  return (
    <MyContextProvider> {/* Envuelve tus componentes con el proveedor de contexto */}
      <div className="App">
        <NavBar />
        <ItemListContainer greeting={'Holaa!'} />
      </div>
    </MyContextProvider>
  );
}

export default App;
