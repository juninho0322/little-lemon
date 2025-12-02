import { useState } from 'react';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import AppWrapper from './components/AppWrapper';
import { Col, Hidden } from 'react-grid-system';
import { Header } from './components/Header/Header';
import { Navbar } from './components/NavBar/Navbar.jsx';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { MenuSection } from "./components/MenuSection/MenuSection";
import { Logo } from './components/Logo/Logo';
import { Container } from './components/Container/Container';
import { H3 } from './components/H3/H3.jsx';



function App() {
  const [cart, setCart] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("news");

  const handleAddToCart = ({ title, quantity = 0 }) => {
    setCart(prev => ({
      ...prev,
      [title]: (prev[title] || 0) + quantity,
    }));
  };

  const handleRemoveFromCart = ({ title, quantity = 0 }) => {
    setCart(prev => {
      const current = prev[title] || 0;
      const newQty = current - quantity;

      if (newQty <= 0) {
        const updated = { ...prev };
        delete updated[title];
        return updated;
      }

      return {
        ...prev,
        [title]: newQty,
      };
    });
  };

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);


  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Col lg={12}>
          <Header totalItems={totalItems}>
            <Hidden sm xs>
              <Logo $size="medium" $paddingtop="large" />
            </Hidden>
            <Navbar>
              <Navbar.NavbarItem href="#home">Home</Navbar.NavbarItem>
              <Navbar.NavbarItem href="#about">About</Navbar.NavbarItem>
              <Navbar.NavbarItem href="#menu">Menu</Navbar.NavbarItem>
              <Navbar.NavbarItem href="#order-online">Order</Navbar.NavbarItem>
              <Navbar.NavbarItem href="#login">Login</Navbar.NavbarItem>
            </Navbar>
          </Header>
        </Col>
        <Col>
          <Content>
            <About />
            <Container>
              <H3>Order for delivery!</H3>
            </Container>
            <Navbar $paddingbottom="large" $ignoreMQ>
              <Navbar.NavbarItem onClick={() => setSelectedCategory("news")}>
                News
              </Navbar.NavbarItem>

              <Navbar.NavbarItem onClick={() => setSelectedCategory("starters")}>
                Starters
              </Navbar.NavbarItem>

              <Navbar.NavbarItem onClick={() => setSelectedCategory("mains")}>
                Main
              </Navbar.NavbarItem>

              <Navbar.NavbarItem onClick={() => setSelectedCategory("desserts")}>
                Desserts
              </Navbar.NavbarItem>

              <Navbar.NavbarItem onClick={() => setSelectedCategory("drinks")}>
                Drinks
              </Navbar.NavbarItem>
            </Navbar>

            <MenuSection
              category={selectedCategory}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Content>
        </Col>

        <Col lg={12}>
          <Footer />
        </Col>
      </AppWrapper>
    </>
  );
}

export default App;
