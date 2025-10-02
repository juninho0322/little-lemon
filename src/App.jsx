import { GlobalStyle } from './components/GlobalStyle/GlobalStyle'
import './App.css'
import AppWrapper from './components/AppWrapper'
import { Col } from 'react-grid-system'
import { Header } from './components/Header/Header'



function App() {

  return (
    <>
      <GlobalStyle />
      <AppWrapper >
        <Col lg={12} >
          <Header />
        </Col>
      </AppWrapper>
    </>
  )
}

export default App
