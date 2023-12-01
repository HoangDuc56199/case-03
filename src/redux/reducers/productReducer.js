const initialState = {
    products:[],
    product:{},
    loading: false,
    err:null
}
export const productReducer = (state=initialState, action)=>{

    console.log(state);


    switch (action.type) {

        case 'FETCH_DATA_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                loading:false,
                products:action.payload,
                err:false
            }
        case 'FETCH_DATA_ERR':
            return {
                ...state,
                loading:false,
                err:action.payload
            }

// case lấy dữ liệu theo id

        case 'FETCH_PRODUCT_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...state,
                loading: false,
                err:false,
                product:action.payload
            }
            // case update product
            case 'UPDATE_PRODUCT_REQUEST':
                return {
                    ...state,
                    loading: true
                }  
            case 'UPDATE_PRODUCT_SUCCESS':
                return {
                    ...state,
                    loading: false,
                    err:false,
                }
            
        default:
            return state
    }
}