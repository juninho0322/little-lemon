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
import { H3 } from './components/H3/H3.jsx';
import { Customers } from './components/Customers/Customers.jsx';



function App() {
  const [cart, setCart] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("news");

  const handleAddToCart = ({ id, quantity = 0 }) => {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + quantity,
    }));
  };

  const handleRemoveFromCart = ({ id, quantity = 0 }) => {
    setCart(prev => {
      const current = prev[id] || 0;
      const newQty = current - quantity;

      if (newQty <= 0) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }

      return {
        ...prev,
        [id]: newQty,
      };
    });
  };

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);


  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Col lg={12}>
          <Header
            totalItems={totalItems}
            cart={cart}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
          >
            <Hidden sm xs>
              <Logo $size="medium" $paddingtop="large" />
            </Hidden>
            <Navbar  $gap={"large"}>
              <Navbar.NavbarItem href="#home">Home</Navbar.NavbarItem>
              <Navbar.NavbarItem href="#about">About</Navbar.NavbarItem>
              <Navbar.NavbarItem href="#menu">Menu</Navbar.NavbarItem>
              <Navbar.NavbarItem href="#order-online">Order</Navbar.NavbarItem>
              <Navbar.NavbarItem href="#footer">Login</Navbar.NavbarItem>
            </Navbar>
          </Header>
        </Col>
        <Col>
          <Content>
            <About />
            <H3>Order for delivery!</H3>
            <Navbar $paddingbottom="large" $ignoreMQ $gap={"small"}>
              <Navbar.NavbarItem
                onClick={() => setSelectedCategory("news")}
                $active={selectedCategory === "news"}
              >
                News
              </Navbar.NavbarItem>

              <Navbar.NavbarItem
                onClick={() => setSelectedCategory("starters")}
                $active={selectedCategory === "starters"}
              >
                Starters
              </Navbar.NavbarItem>

              <Navbar.NavbarItem
                onClick={() => setSelectedCategory("mains")}
                $active={selectedCategory === "mains"}
              >
                Main
              </Navbar.NavbarItem>

              <Navbar.NavbarItem
                onClick={() => setSelectedCategory("desserts")}
                $active={selectedCategory === "desserts"}
              >
                Desserts
              </Navbar.NavbarItem>

              <Navbar.NavbarItem
                onClick={() => setSelectedCategory("drinks")}
                $active={selectedCategory === "drinks"}
              >
                Drinks
              </Navbar.NavbarItem>
            </Navbar>

            <MenuSection
              category={selectedCategory}
              cart={cart}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
            <Customers />
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
