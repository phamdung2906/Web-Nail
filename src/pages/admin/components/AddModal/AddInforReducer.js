export const AddInforReducer = (state, action) => {
    const {type} = action
    switch (type) {
        case 'AddName':
            return {
                ...state,
                name: action.name
            };
        case 'AddImg':
            return {
                ...state,
                images: [...state.images,action.img]
            };
        case 'DeleteImg':
            return {
                ...state,
                images:action.newListImg,
            };
        case 'AddPrice':
            return {
                ...state,
                price:action.price
            };
        case 'AddSale':
            return {
                ...state,
                sale:action.sale
            };
        case 'AddType':
            return {
                ...state,
                type:action.tpe
            };
        case 'AddHot':
            return {
                ...state,
                hot:action.hot
            };
        case 'AddDescription':
            return {
                ...state,
                description:action.description
            }
    }
}