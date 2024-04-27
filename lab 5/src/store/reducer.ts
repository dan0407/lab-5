import { Actions, AppState, productActions, shoppingItemsActions } from '../types/store';
import { appState } from './index';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	const { action, payload } = currentAction;
	console.log(action, payload);
	switch (action) {
		case productActions.GETPRODUCTS:
			return {
				...currentState,
				products: payload,
			};
		case shoppingItemsActions.GETSHOPPINGITEMS:
			return {
				...currentState,
				shoppingitems: payload,
			};

		default:
			return currentState;
	}
};
