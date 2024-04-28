import Card, { AttributeCard } from '../components/Product/Product';
import { addObserver, appState, dispatch } from '../store/index';
import { GetProductActiondata } from '../store/actions';
import storage from '../utils/storage';

class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	async connectedCallback() {
		const action = await GetProductActiondata();
		dispatch(action);
		const Storage = JSON.stringify(appState);
		localStorage.setItem('Appstate', Storage);
	}

	render() {
		const localstorage: any = window.localStorage;
		const local = JSON.parse(localstorage.getItem('Appstate'));

		local.products.forEach((products: any) => {
			const card = this.ownerDocument.createElement('my-card') as Card;
			card.setAttribute(AttributeCard.image, products.image);
			card.setAttribute(AttributeCard.title, products.title);
			card.setAttribute(AttributeCard.description, products.description);
			card.setAttribute(AttributeCard.category, products.category);
			card.setAttribute(AttributeCard.price, JSON.stringify(products.price));
			card.setAttribute(AttributeCard.ratingcount, JSON.stringify(products.rating.rate));
			card.setAttribute(AttributeCard.ratingrate, JSON.stringify(products.rating.count));
			this.shadowRoot?.appendChild(card);
		});
	}
}

customElements.define('app-dashboard', Dashboard);
