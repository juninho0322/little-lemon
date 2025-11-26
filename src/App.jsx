import { useState } from 'react';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import './App.css';
import AppWrapper from './components/AppWrapper';
import { Col } from 'react-grid-system';
import { Header } from './components/Header/Header';
import { NavBar }  from './components/NavBar/NavBar';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { FoodMenuHeader } from './components/FoodMenuHeader/FoodMenuHeader';
import { FoodMenuNav } from './components/FoodMenuNav/FoodMenuNav';
import { News } from './pages/news.jsx';

function App() {
  const [cart, setCart] = useState({});

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
            <NavBar />
          </Header>
        </Col>
        <Col>
          <Content>
            <About />
            <FoodMenuHeader />
            <FoodMenuNav />
            <News
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
