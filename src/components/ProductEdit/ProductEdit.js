import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getProduct, updateProduct} from '../../redux/actions/action'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import {useEffect, useState} from 'react'

function ProductEdit() {
    const [product, setProduct] = useState({});
    const productDetail = useSelector((state)=> state.product.product);
    const { id } = useParams();
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const {name, price, stock, description} = productDetail;
    console.log(productDetail);
    const currenProductDetail = {name, price, stock, description};
    useEffect(()=>{
        setProduct(currenProductDetail)
    },[]);

    useEffect(() => {
        dispatch(getProduct(id));
    }, []);
    
    function handleChange(event) {
        setProduct({
        ...product,
        [event.target.name]: event.target.value,
        });
        }
    
    const handleSubmit = ()=>{
        dispatch(updateProduct(product))
    }
    const handleBack = ()=>{
        navigate('/')
    }
    return ( <>
        <h1>Cập nhật sản phẩm</h1>
        <div style={{marginBottom:'20px'}}>
            <label style={{display:'block'}}>Tên sản phẩm</label>
            <input value={product.name || ''} name='name' onChange={handleChange}/>
        </div>
        <div style={{display:'flex',marginBottom:'20px'}}>
            <div style={{flex:1}}>
                <label style={{display:'block'}}>Giá(đ)</label>
                <input style={{width:'100%'}} value={product.price} name='price' onChange={handleChange}/>
            </div>
            <div style={{flex:1}}>
                <label style={{display:'block'}}>Tồn Kho</label>
                <input style={{width:'100%'}} value={product.stock} name='stock' onChange={handleChange}/>
            </div>
        </div>
        <div style={{marginBottom:'20px'}}>
            <label style={{display:'block'}}>Mô tả</label>
            <input style={{display:'block',minWidth:'100vw',minHeight:'100px'}} value={product.description} name='description' onChange={handleChange}/>
        </div>




        <div>
            <Button variant="primary" style={{marginRight:'20px'}} onClick={handleSubmit}>Cập nhật</Button>
            <Button variant="secondary" onClick={handleBack}>Hủy</Button>
        </div>
    </> );
}

export default ProductEdit;