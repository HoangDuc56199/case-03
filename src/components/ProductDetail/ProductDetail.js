import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getProduct} from '../../redux/actions/action'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import {useEffect} from 'react'


function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct(id));
    }, []);
    const data = useSelector((state)=> state.product.product)
    console.log(data);
    const navigate = useNavigate()
    const handleBackProductList =()=>{
        navigate('/')
    }

    return ( <>
    <div style={{
        display:'flex',
        justifyContent:'space-between'
    }}>
        <h1>
            Chi tiết sản phẩm
        </h1>
        <Button variant="primary" onClick={handleBackProductList}>Danh sách</Button>
    </div>
    
    <div>
        <span style={{display:'inline-block',
                        minWidth:'130px'
    }}>Tên sản phẩm</span>
        <span>{data.name}</span>
    </div>
    <div>
        <span style={{display:'inline-block',
                        minWidth:'130px'
    }}>Giá(đ)</span>
        <span>{data.price}</span>
    </div>
    <div>
        <span style={{display:'inline-block',
                        minWidth:'130px'
    }}>Tồn kho</span>
        <span>{data.stock}</span>
    </div>
    <hr/>
    <div>
        <p>Mô tả</p>
        <p>{data.description}</p>
    </div>

</> );
    
}

export default ProductDetail;