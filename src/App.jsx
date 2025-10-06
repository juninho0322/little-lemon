import { GlobalStyle } from './components/GlobalStyle/GlobalStyle'
import './App.css'
import AppWrapper from './components/AppWrapper'
import { Col } from 'react-grid-system'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'



function App() {

  return (
    <>
      <GlobalStyle />
      <AppWrapper >
        <Col lg={12} >
          <Header />
        </Col>
        <Col>
          <Main>
            <h1>Welcome to Little Lemon</h1>
            <p>Your favorite neighborhood Mediterranean restaurant!</p>
          </Main>
        </Col>
        <Col lg={12}>
          <Footer />
        </Col>

      </AppWrapper>
    </>
  )
}

export default App
