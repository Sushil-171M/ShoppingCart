import "./styles.css";
import { CartProvider } from "./component/CartProvider";
import Header from "./component/Header";
import ProductList from "./component/ProductList";
import ShoppingCart from "./component/ShoppingCart";

export default function App() {
  return (
    <div className="App">
      <CartProvider>
        <div className="container w-100">
          <Header title="Shopping App" />
          <ProductList />
          <hr />
          <ShoppingCart />
        </div>
      </CartProvider>
    </div>
  );
}
