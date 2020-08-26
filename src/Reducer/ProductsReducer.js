const ADD_PRODUCT_CART = "ADD_PRODUCT_CART";


let initialState = {
    product: [
        {id: 1, img: 'https://kaifolog.ru/uploads/posts/2017-03/1488724071_001_3.jpg', title: 'Товар 1', price: '2',quantityOfGoods: 0},
        {id: 2, img: 'https://kaifolog.ru/uploads/posts/2017-03/1488724071_001_3.jpg', title: 'Товар 1', price: '2',quantityOfGoods: 0},
        {id: 3, img: 'https://kaifolog.ru/uploads/posts/2017-03/1488724071_001_3.jpg', title: 'Товар 1', price: '2',quantityOfGoods: 0},
        {id: 4, img: 'https://kaifolog.ru/uploads/posts/2017-03/1488724071_001_3.jpg', title: 'Товар 1', price: '2',quantityOfGoods: 0},
        {id: 5, img: 'https://kaifolog.ru/uploads/posts/2017-03/1488724071_001_3.jpg', title: 'Товар 1', price: '2',quantityOfGoods: 0},
        {id: 6, img: 'https://kaifolog.ru/uploads/posts/2017-03/1488724071_001_3.jpg', title: 'Товар 1', price: '2',quantityOfGoods: 0},
        {id: 7, img: 'https://kaifolog.ru/uploads/posts/2017-03/1488724071_001_3.jpg', title: 'Товар 1', price: '2',quantityOfGoods: 0},
        {id: 8, img: 'https://kaifolog.ru/uploads/posts/2017-03/1488724071_001_3.jpg', title: 'Товар 1', price: '2',quantityOfGoods: 0},
        {id: 9, img: 'https://kaifolog.ru/uploads/posts/2017-03/1488724071_001_3.jpg', title: 'Товар 1', price: '2',quantityOfGoods: 0},
    ],



}

let productReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PRODUCT_CART:
            return {

                ...state,
                // quantityOfGoods: action.product + Number(state.quantityOfGoods),
                product: state.product.map((e)=>{

                    if(e.id===action.idProduct){
                       return {
                           ...e, quantityOfGoods: 1 + e.quantityOfGoods
                       }
                    }return e;

                    })
            }


        default:
            return state;


    }

}

export const addForProduct = (idProduct) => ({type: ADD_PRODUCT_CART, idProduct})


export default productReducer;


