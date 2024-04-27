import Card, { AttributeCard } from '../components/Product/Product';
import { addObserver, appState, dispatch } from '../store/index';
import { GetProductActiondata } from '../store/actions';

class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	async connectedCallback() {
		const action = await GetProductActiondata();
		dispatch(action);
	}

	render() {
		appState.products.forEach((products: any) => {
			const card = this.ownerDocument.createElement('my-card') as Card;
			card.setAttribute(AttributeCard.name, products.name);
			card.setAttribute(AttributeCard.image, products.image);
			card.setAttribute(AttributeCard.Title, products.Title);
			card.setAttribute(AttributeCard.Description, products.Description);
			card.setAttribute(AttributeCard.Category, products.Category);
			card.setAttribute(AttributeCard.Price, products.Price);
			card.setAttribute(AttributeCard.Rating, products.Rating);
			this.shadowRoot?.appendChild(card);
		});
	}
}

customElements.define('app-dashboard', Dashboard);
