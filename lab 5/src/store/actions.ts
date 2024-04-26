import {vainito} from '../services/getProduts'
import { Product } from '../types/products'
import { shoppingItem } from '../types/shopping'
import {productActions, shoppingItemsActions, GetProductAction, GetshoppingItemsAction, SaveshoppingItemsAction} from '../types/store'

export const GetProductActiondata = async( ): Promise<GetProductAction> => {
    const data = await vainito()
    return {
        action: productActions.GETPRODUCTS,
        payload: data
    }
}
export const GetshoppingItemsActiondata = async( ): Promise<GetshoppingItemsAction> => {
    const data = await vainito()
    return {
        action: shoppingItemsActions.GETSHOPPINGITEMS,
        payload: data
    }
}
export const SaveshoppingItemsActiondata = ( product: shoppingItem) => {
    return{
        action: shoppingItemsActions.SAVESHOPPINGITEMS,
        payload: product
    }
}
