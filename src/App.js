import ProductList from '../src/components/ProductList/ProductList'
import ProductDelete from './components/ProductDelete/ProductDelete'
import ProductDetail from './components/ProductDetail/ProductDetail'
import ProductEdit from './components/ProductEdit/ProductEdit'
import CreateProduct from './components/CreateProduct/CreateProduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div style={{
      maxWidth:'1000px',
      margin:'100px'
    }}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductList />}/>
        <Route path={`/product/detail/:id`} element={<ProductDetail />}/>
        <Route path='/product/delete/:id' element={<ProductDelete />}/>
        <Route path='/product/create' element={<CreateProduct />}/>
        <Route path='/product/edit/:id' element={<ProductEdit />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
