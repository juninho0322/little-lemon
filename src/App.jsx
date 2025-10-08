import { GlobalStyle } from './components/GlobalStyle/GlobalStyle'
import './App.css'
import AppWrapper from './components/AppWrapper'
import { Col } from 'react-grid-system'
import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content'
import { Footer } from './components/Footer/Footer'
import { About } from './components/About/About'


function App() {

  return (
    <>
      <GlobalStyle />
      <AppWrapper >
        <Col lg={12} >
          <Header />
        </Col>
        <Col>
          <Content>
            <About/>
          </Content>
        </Col>
        <Col lg={12}>
          <Footer />
        </Col>
      </AppWrapper>
    </>
  )
}

export default App
