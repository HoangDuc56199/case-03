import { useState } from "react";

function ProductEdit() {
  const [product, setProduct]=useState({})
  // const handleChange =(e)=>{
  //   setProduct(
  //     ...product,
  //     [e.target.name]: e.target.value
  //   )
  // }
  const handleChange=(e)=>{
    console.log(e.target.name);
  }

    return (
      <>
        <div>
          <h1>Cập nhật sản phẩm</h1>
        </div>
        <label>Tên sản phẩm</label>
        <input
          value={"áo sơ mi dài tay nam"}
          name="name"
          onChange={handleChange}
        />
        <div>
          <div>
            <label>Giá(đ)</label>
            <input value={50000} name="price" onChange={handleChange} />
          </div>
          <div>
            <label>Tồn kho</label>
            <input name="stock" onChange={handleChange} />
          </div>
          <div>
            <label>Mô tả</label>
            <input name="description" onChange={handleChange} />
          </div>
        </div>

        <div style={{display:'flex'}}>
          <button className="button button-blue">
            Cập nhật
          </button>
          <button className="button button-white">
            Hủy
          </button>
        </div>
      </>
    );
}

export default ProductEdit;