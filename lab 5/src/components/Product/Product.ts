import { dispatch, appState } from '../../store/index';
import styles from './Product.css';
import { GetProductActiondata, GetshoppingItemsActiondata, SaveshoppingItemsActiondata } from '../../store/actions';

export enum AttributeCard {
	'image' = 'image',
	'title' = 'Title',
	'description' = 'description',
	'category' = 'category',
	'price' = 'price',
	'ratingcount' = 'ratingcount',
	'ratingrate' = 'ratingrate',
}
class card extends HTMLElement {
	image?: string;
	Title?: string;
	description?: string;
	category?: string;
	price?: number;
	ratingcount?: number;
	ratingrate?: number;

	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeCard, null> = {
			image: null,
			Title: null,
			description: null,
			category: null,
			price: null,
			ratingcount: null,
			ratingrate: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributeCard, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case AttributeCard.price:
				this.price = newValue ? Number(newValue) : undefined;
				break;
			case AttributeCard.ratingcount:
				this.ratingcount = newValue ? Number(newValue) : undefined;
				break;

			case AttributeCard.ratingrate:
				this.ratingrate = newValue ? Number(newValue) : undefined;
				break;

			default:
				this[propName] = newValue;
				break;
		}

		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;

			const css = this.ownerDocument.createElement('style');
			css.innerHTML = styles;
			this.shadowRoot?.appendChild(css);

			this.shadowRoot.innerHTML += `
			<section class="cardSection">

			<div class="card">

				 <img class="image" src="${this.image}" alt="">
				 <h1 class="title">Title: ${this.title}</h1>
				 <p class="text">Description: ${this.description}</p>
				 <p>Rating: rate: ${this.ratingcount} count: ${this.ratingrate}</p>
				 <h3>Price: ${this.price}</h3>
				 <button class="btnelegant" type="button">ADD PRODUCT</button>
		 </div>
 </section>
 `;
			const addProductBtn = this.shadowRoot.querySelector('.btnelegant');

			if (addProductBtn) {
				addProductBtn.addEventListener('click', async () => {
					const actionsave = SaveshoppingItemsActiondata();
					dispatch(actionsave({ image: this.image, Title: this.title, price: this.price }));
					const Storagesave = JSON.stringify(appState);
					localStorage.setItem('Appstate', Storagesave);
				});
			}
		}
	}
}

customElements.define('my-card', card);
export default card;
