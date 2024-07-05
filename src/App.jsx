
import './App.css'
import { MyComponent } from './components/MyComponent'
import { SecondComponent } from './components/SecondComponent';

function App() {

  const name = 'Luis Rodriguez';

  return (
    <>
     <div>
        <h3>Paractica de Componentes</h3>
        <MyComponent name={name}/>
        <hr />
        <h4>Segundo Componente</h4>
        <SecondComponent/>
     </div>
    </>
  )
}

export default App
