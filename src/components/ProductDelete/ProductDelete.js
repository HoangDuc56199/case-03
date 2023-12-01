import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProduct } from '../../redux/actions/action';
import { useEffect } from 'react';

function ProductDelete() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()

    const product = useSelector((state)=> state.product.product);
    useEffect(() => {
        dispatch(getProduct(id));
    }, []);


    const handleBack = ()=>{
        navigate('/')
    }


    const handleDeleteProduct = ()=>{
        dispatch(deleteProduct(id))

        navigate('/')
    }
    return ( <>
        <h1>
            Xóa sản phẩm
        </h1>
        <div>
            <span style={{display:'inline-block',minWidth:'120px'}}>Tên sản phẩm</span>
            <span>{product.name}</span>
        </div>
        <div>
            <span style={{display:'inline-block',minWidth:'120px'}}>Giá(đ)</span>
            <span>{product.price}</span>
        </div>
        <div>
            <span style={{display:'inline-block',minWidth:'120px'}}>Tồn kho</span>
            <span>{product.stock}</span>
        </div>
        <hr/>
        <div>
            <span style={{display:'block'}}>Mô tả</span>
            <span>{product.description}</span>
        </div>
        <div style={{marginTop:'20px'}}>
             <Button variant="danger" style={{marginRight:'20px'}} onClick={handleDeleteProduct}>Xóa</Button>
            <Button variant="secondary" onClick={handleBack}>Hủy</Button>
        </div>
    </> );
}

export default ProductDelete;