import Cabecalho from "./components/Cabecalho/Cabecalho";
import ObservadorDeRota from "./components/ObservadorDeRota";
import Rodape from "./components/Rodape/Rodape";
import { Outlet } from "react-router";

export default function App() {
  return (
    <div>
      <ObservadorDeRota />
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </div>
  )
}
