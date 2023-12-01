import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import '../../style/style.css'
import { useEffect } from "react";
function ProductList() {
  
  useEffect(()=>{
    axios.get("http://localhost:3001/products")
      .then((res)=>{
        const products= res.data
      })
  },[])
 
  
  return (
    <>
      <div className="product-list-header">
        <h1>Danh sách sản phẩm</h1>
        <button style={{}}>Thêm sản phẩm</button>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{width:'100'}}>#</th>
            <th>Tên sản phẩm</th>
            <th>Giá(đ)</th>
            <th>Tồn kho</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Áo sơ mi đai tay nam</td>
            <td>79500</td>
            <td>100</td>
            <td><div className="button button-blue"><Link to='/edit/:'>Cập nhật</Link></div></td>
            <td><div className="button button-red"><Link to='delete/' >Xóa</Link></div></td>
          </tr>
          {products.map((item)=>(
            <tr>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductList;
