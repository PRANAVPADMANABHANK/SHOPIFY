import Header from "./Components/Header/Header";
import ProductList from "./Components/ProductList/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter and other routing components
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PopularProducts from "./Components/popularProducts/PopularProducts";
import CustomersAllProducts from "./Components/customers-allProducts/CustomersAllProducts";

const queryClient = new QueryClient(); // Create an instance of QueryClient

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/popular" element={<PopularProducts />} />
          <Route path="/customer" element={<CustomersAllProducts />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
