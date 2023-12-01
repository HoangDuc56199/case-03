import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {fetchData} from '../../redux/actions/action'

function ProductList() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
    dispatch(fetchData());
    }, [dispatch]);

    const data = useSelector((state)=>state.product.products)
    const handleCreate = (e)=>{
        e.preventDefault();
        navigate("/product/create")
    }   
    return ( <div>
        <div style={{
            display:'flex',
            justifyContent:'space-between'
        }}>
            <h1>Danh sách sản phẩm</h1>
            <Button variant="primary" onClick={handleCreate}>
                Thêm sản phẩm
            </Button>
        </div>
        <thead>
            <tr>
                <th style={{minWidth:'30px'}}>
                    #
                </th>
                <th style={{minWidth:'200px'}}>
                    Tên sản phẩm
                </th>
                <th style={{minWidth:'50px'}}>
                    Giá(đ)
                </th>
                <th style={{minWidth:'50px'}}>
                    Tồn kho
                </th>
                <th colSpan={2}>
                </th>
            </tr>
        </thead>
        <tbody>
            {data.map((item)=>(<tr key={item.id}>
                <td>
                    {item.id}
                </td>
                <td>
                    <Link to={`/product/detail/${item.id}`} style={{
                        color:'black',
                        textDecoration:'none'
                    }}>{item.name}</Link>
                    
                </td>
                <td>
                   {item.price}
                </td>
                <td>
                    {item.stock}
                </td>
                <td>
                    <Link to={`/product/edit/${item.id}`}>
                        <Button variant="primary">
                            Cập nhật
                        </Button>
                    </Link>
                </td>
                <td>
                    <Link to={`product/delete/${item.id}`}>
                        <Button variant="danger">
                            Xóa
                        </Button>
                    </Link>
                </td>
            </tr>))}
        </tbody>
    </div> );
}

export default ProductList;