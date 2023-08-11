import { Fragment } from "react";
import Header from "./Components/Header/Header";
import ProductList from "./Components/ProductList/ProductList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient(); // Create an instance of QueryClient

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Fragment>
        <Header />
        <ProductList />
      </Fragment>
    </QueryClientProvider>
  );
}

export default App;
