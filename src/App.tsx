import { Envelope, Lock } from '@phosphor-icons/react'
import logo from './assets/logo.svg'
import Heading from './components/Heading'
import Text from './components/Text'
import { TextInput } from './components/TextInput'
import Button from './components/Button'

function App() {

  return (
    <div className="flex flex-col items items-center mt-16">
      <header className="flex flex-col items-center">
        <img src={logo} alt="Logo Parrot" />

        <Heading size="lg" className="mt-4">
          Sysmap Parrot
        </Heading>
        <Text className="mt-2 opacity-50">
          Faça o login e começe a usar!
        </Text>
      </header>
      
      <form 
      action="" 
      className='flex flex-col items-stretch gap-4 w-full max-w-sm mt-12'
      >
        <Text>Endereço de e-mail</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope size={32} />
          </TextInput.Icon>
          <TextInput.Input 
          placeholder="Digite seu e-mail" 
          type="text">
          </TextInput.Input>
        </TextInput.Root>
        <Text>Senha</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock size={32} />
          </TextInput.Icon>
          <TextInput.Input 
          placeholder="******" 
          type="password">
          </TextInput.Input>
        </TextInput.Root>
        <Button type="submit" className='mt-6'>Entrar</Button>
        </form>
      <footer className='flex flex-col items-center gap-4 mt-6'>
        <Text asChild size='sm'>
          <a href='' className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  )
}

export default App
