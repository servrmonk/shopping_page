import { Provider, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import store from './store/index';


function App() {
  const showCart  = useSelector((state) => state.ui.cartIsVisible)
  return (
    <Provider store={store}>
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Provider>
  );
}

export default App;
