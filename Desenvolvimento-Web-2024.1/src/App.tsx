import './App.css'
import World from './components/atividade01/World'
import * as PC from './components/atividade01/02MeuPC'
import Pai from './components/atividade01/Questao01/01Pai'
import * as Temperatura from './components/Atividade00/03Temperatura'
import MeusDadosProps from './components/Atividade00/02MeusDados'
import MeusDados from './components/Atividade00/01MeusDados'

function App() {
  

  return (
    <>
      <MeusDados/>
      <MeusDadosProps nome="João" curso="Engenharia de Software" universidade={'UFC'}/>
      {Temperatura.celsiusParaFahrenheit(100)}
      <Pai/>
      {PC.Memoria("Memória", 1200)}
      {PC.PlacaDeVideo("Placa de Vídeo", 1000)}
      {PC.PlacaMae("Placa Mãe", 1500)}
      <World/>
    </>
  )
}

export default App