import logo from './assets/logo.svg'
import { Slot } from '@radix-ui/react-slot'

function App() {t

  return (
    <div className="flex flex-col items items-center mt-16">
      <header className="flex flex-col items-center">
        <img src={logo} alt="Logo Parrot" />


        <h1 className="text-[#EEEEEE] text-3xl font-bold mt-4">
          Sysmap Parrot
        </h1>
        <h2 className="text-[#7C7C8A] text-center mt-2">
          Faça o login e começe a usar!
        </h2>
      </header>
      <form>
        <p>Endereço de e-mail</p>
        <input type="email"></input>
        <p>Senha</p>
        <input type="email"></input>
      </form>
      <footer>
    
      </footer>
    </div>
  )
}

export default App
