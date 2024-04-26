export enum AttributeCard {
	name = 'name',
	image = 'image',
	Title = 'Title',
	Description = 'Description',
	Category = 'Category',
	Price = 'Price',
	Rating = 'Rating',
}
class card extends HTMLElement {
	name?: string;
	image?: string;
	Title?: string;
	Description?: string;
	Category?: string;
	Price?: number;
	Rating?: number;

	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeCard, null> = {
			name: null,
			image: null,
			Title: null,
			Description: null,
			Category: null,
			Price: null,
			Rating: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributeCard, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case AttributeCard.Price:
				this.Price = newValue ? Number(newValue) : undefined;
				break;
			case AttributeCard.Rating:
				this.Rating = newValue ? Number(newValue) : undefined;
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
			this.shadowRoot.innerHTML = `

	`;

			// Crear la sección
			const section = document.createElement('section');
			section.classList.add('cardsection');

			// Crear el contenedor de información
			const infoDiv = document.createElement('div');
			infoDiv.classList.add('info');

			const liADD = document.createElement('div');
			const addimg = document.createElement('img');
			const btnADD = document.createElement('button');

			addimg.src = `https://w7.pngwing.com/pngs/12/220/png-transparent-cart-shopping-ic-google-material-design-3-icon.png`;
			addimg.id = 'addImg';
			btnADD.textContent = 'Add Shopping Cart';
			btnADD.appendChild(addimg);
			liADD.appendChild(btnADD);
			btnADD.addEventListener('click', () => {});
			section.appendChild(liADD);

			// Crear los elementos de texto
			const nameu = document.createElement('h1');
			nameu.textContent = this.name ? this.name : '';

			const titlePara = document.createElement('p');
			titlePara.classList.add('text');
			titlePara.textContent = 'Title: ' + (this.Title ? this.Title : '');

			const descriptionPara = document.createElement('p');
			descriptionPara.classList.add('text');
			descriptionPara.textContent = 'Description: ' + (this.Description ? this.Description : '');

			const categoryPara = document.createElement('p');
			categoryPara.classList.add('text');
			categoryPara.textContent = 'Category: ' + (this.Category ? this.Category : '');

			const pricePara = document.createElement('p');
			pricePara.classList.add('text');
			pricePara.textContent = 'Price: ' + (this.Price ? this.Price : '');

			const ratingPara = document.createElement('p');
			ratingPara.classList.add('text');
			ratingPara.textContent = 'Rating: ' + (this.Rating ? this.Rating : '');

			// Agregar los elementos de texto al contenedor de información
			infoDiv.appendChild(nameu);
			infoDiv.appendChild(titlePara);
			infoDiv.appendChild(descriptionPara);
			infoDiv.appendChild(categoryPara);
			infoDiv.appendChild(pricePara);
			infoDiv.appendChild(ratingPara);

			// Agregar el contenedor de información a la sección
			section.appendChild(infoDiv);

			// Agregar la sección al documento
			document.body.appendChild(section);
		}
	}
}
