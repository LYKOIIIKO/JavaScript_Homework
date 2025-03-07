class ContactsApp extends Contacts {
	constructor(id) {
		super();

		if (!id) return;

		this.id = id;
		
        this.elems = null;

		this.init();
        //this.update();
	}

	create() {
		let contactsElem = document.createElement('div');
		contactsElem.classList.add('contacts');

			let titleElem = document.createElement('div');
			titleElem.classList.add('app__title');
				let titleHeaderElem = document.createElement('h1');
				titleHeaderElem.classList.add('app__header');
				titleHeaderElem.innerHTML = 'Contacts';

				let titleAmountElem = document.createElement('span');
				titleAmountElem.classList.add('app__amount');
				titleAmountElem.innerHTML = 'Contacts amount:';

				let titleAddElem = document.createElement('button');
				titleAddElem.classList.add('app__btnAdd');

			let usersElem = document.createElement('div');
			usersElem.classList.add('app__users');
			usersElem.setAttribute('data-accordion', '');
				let usersListElem = document.createElement('ul');
				usersListElem.classList.add('app__list');
					
		usersElem.append(usersListElem);

		titleElem.append(titleHeaderElem, titleAmountElem, titleAddElem);

		contactsElem.append(titleElem, usersElem);

		titleAddElem.addEventListener('click', () => {
			this.showFormEdit();
		})

		return {
			main: contactsElem,
			list: usersListElem,
			add: titleAddElem,
			amount: titleAmountElem
		}
	}

	createItem(name, phone, email, adress) {
		if (!name && !phone) return;

		this.add(name, phone, email, adress);

		let usersItemElem = document.createElement('li');
		usersItemElem.classList.add('app__item');
			let usersHeadElem = document.createElement('div');
			usersHeadElem.classList.add('app__user_head');
				let usersNameElem = document.createElement('h3');
				usersNameElem.classList.add('app__user_name');
				usersNameElem.innerHTML = name;
				let usersPhoneElem = document.createElement('span');
				usersPhoneElem.classList.add('app__user_phone');
				usersPhoneElem.innerHTML = phone;

			let usersFooterElem = document.createElement('div');
			usersFooterElem.classList.add('app__user_footer');
				let usersEmailElem = document.createElement('span');
				usersEmailElem.classList.add('app__user_info');
				usersEmailElem.innerHTML = 'Email: ' + email;
				let usersAdressElem = document.createElement('span');
				usersAdressElem.classList.add('app__user_info');
				usersAdressElem.innerHTML = 'Adress: ' + adress;
				let usersBtnsElem = document.createElement('div');
					usersBtnsElem.classList.add('app__user_btns');
					let usersBtnEditElem = document.createElement('button');
					usersBtnEditElem.classList.add('app__user_btnEdit');
					let usersBtnRemoveElem = document.createElement('button');
					usersBtnRemoveElem.classList.add('app__user_btnRemove');

		usersBtnsElem.append(usersBtnEditElem, usersBtnRemoveElem);

		if(email) usersFooterElem.append(usersEmailElem);
		if(adress) usersFooterElem.append(usersAdressElem);

		usersFooterElem.append(usersBtnsElem);

		usersHeadElem.append(usersNameElem, usersPhoneElem);
		usersItemElem.append(usersHeadElem, usersFooterElem);

		this.elems.list.append(usersItemElem);
		

		//this.accordion();

		// usersBtnEditElem.addEventListener('click', () => {
		// 	this.add(name, phone, email, adress);
		// });

		usersBtnRemoveElem.addEventListener('click', () => {
			this.onRemove(id);
		});
	}

	accordion() {
		let elems = document.querySelectorAll('[data-accordion]');
		
		if(!elems || elems.length == 0) return;
	
		function closeAll(accordion) {
			if(!accordion) return;
	
			let liElems = accordion.querySelectorAll('li');
	
			liElems.forEach(function(li) {
				li.classList.remove('active');
			})
		}
	
		elems.forEach(function(elem) {
			let titles = elem.querySelectorAll('.app__user_head');
		   
			titles.forEach(function(title) {
				title.addEventListener('click', function(event) {
				   let parentLi = event.target.closest('li');
				   console.log(parentLi)
				   if(!parentLi) return;
	
					//if(!parentLi.classList.contains('active')) closeAll(elem);
				   parentLi.classList.toggle('active');
				})
			})
		})
	}

	onAdd(name, phone, email, adress) {
		this.createItem(name, phone, email, adress);
	}
		
	onEdit() {}

	onRemove() {}
	
	showFormEdit(id) {
        let userData = this.get(id);

       	// if (!userData) return;

        let modalElem = document.createElement('div');
        modalElem.classList.add('app__form_edit');

			let fieldName = document.createElement('input');
			fieldName.classList.add('app__field_name');
			fieldName.type = 'text';
			fieldName.setAttribute('placeholder', 'Please enter name...');

			let fieldPhone = document.createElement('input');
			fieldPhone.classList.add('app__field_phone');
			fieldPhone.type = 'text';
			fieldPhone.setAttribute('placeholder', 'Please enter phone...');			

			let fieldEmail = document.createElement('input');
			fieldEmail.classList.add('app__field_email');
			fieldEmail.type = 'text';
			fieldEmail.setAttribute('placeholder', 'Please enter email...');		

			let fieldAdress = document.createElement('input');
			fieldAdress.classList.add('app__field_adress');
			fieldAdress.type = 'text';
			fieldAdress.setAttribute('placeholder', 'Please enter adress...');      

			let itemBtnSave = document.createElement('button');
			itemBtnSave.classList.add('app__btnSave');
			itemBtnSave.innerHTML = 'Save';

			let itemBtnClose = document.createElement('button');
			itemBtnClose.classList.add('app__btnClose');
			itemBtnClose.innerHTML = 'Close';

		// if (id) {
		// 	fieldName.value = userData.name || '';
		// 	fieldPhone.value = userData.phone || '';
		// 	fieldEmail.value = userData.email || '';
		// 	fieldAdress.value = userData.adress || '';
		// }

        modalElem.append(fieldName, fieldPhone, fieldEmail, fieldAdress, itemBtnSave, itemBtnClose);

        document.body.append(modalElem);

        itemBtnSave.addEventListener('click', () => {
            let name = fieldName.value,
				phone = fieldPhone.value,
				email = fieldEmail.value,
				adress = fieldAdress.value;
            

           	this.onAdd (name, phone, email, adress);
			//modalElem.remove();
        });

        itemBtnClose.addEventListener('click', () => {
            modalElem.remove();
        });
    }

	update() {}


	get(id) {

	}

	init() {
		let rootElem = document.querySelector(`#${this.id}`);
        if (!rootElem) return;

        this.elems = this.create();

        rootElem.append(this.elems.main);

		
	}
}