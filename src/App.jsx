import { GlobalStyle } from './components/GlobalStyle/GlobalStyle'
import { Greetings } from './components/test/test'
import './App.css'
import  { Dropdown } from './components/DropDown/DropDown'

function App() {

  return (
    <>
      <GlobalStyle />
      <Greetings button="Click me" />
         <Dropdown
        options={["Profile", "Settings", "Logout"]}
      />

    </>
  )
}

export default App
