import '../../style/style.css'

function ProductDetail() {
  return (
    <>
      <div className='header'>
        <h1>Chi tiết sản phẩm</h1>
        <button className='button button-blue'>
          danh sách
        </button>
      </div>
      <div>
        <p>
          <span className='product-detail-title'>
            Tên sản phẩm
          </span>
          <span>
            áo sơ mi dài tay nam
          </span>
        </p>
        <p>
          <span className='product-detail-title'>
            Giá(đ)
          </span>
          <span>
            180000
          </span>
        </p>
        <p>
          <span className='product-detail-title'>
            Tồn kho
          </span>
          <span>
            500
          </span>
        </p>
        <div
          style={{
            width:'100%',
            borderBottom:'1px solid'
          }}
        ></div>
        <p>
          <span>Mô tả</span>
          <p>Something</p>
        </p>
      </div>
    </>
  );
}

export default ProductDetail;
