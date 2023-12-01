import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductCreate from "./components/ProductCreate/ProductCreate";
import ProductDelete from "./components/ProductDelete/ProductDelete";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductEdit from "./components/ProductEdit/ProductEdit";
import ProductList from "./components/ProductList/ProductList"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<ProductCreate />} />
          <Route path="/delete/:id" element={<ProductDelete />} />
          <Route path="/detail" element={<ProductDetail />} />
          <Route path="/" element={<ProductList />} />
          <Route path="/edit" element={<ProductEdit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
