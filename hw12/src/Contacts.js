class Contacts extends Storage {
	#data = [];

	constructor(args) {
		super(args);
		this.key = 'contacts';
		this.#data = this.data || [];
		this.lastID = 0;
	}

	add(name, phone, email, adress) {
		if(!name && !phone) return;
		this.lastID++;

		let user = {
			id: this.lastID,
			name: name || '',
			email: email || '',
			adress: adress || '',
			phone: phone || ''
		}

		this.#data.push(user);
		this.data = this.#data;
        return true;
	}

	edit(id, obj) {
		if (!id) return false;

        let user = this.#data.find((item) => {
            return item.id == id;
        });

        if (!user) return false;

        for (let key in obj) {
            let value = obj[key];
            user[key] = value;
        }

		if (!user.name && !user.phone) {
            this.remove(id);
            return false;
        }

		this.data = this.#data;

        return true;
	}

	remove(id) {
		if (!id) return;

        let dataTmp = this.#data.filter((item) => {
            return item.id != id;
        });

        this.#data = dataTmp;
		this.data = this.#data;
		return true;
	}

	getContacts(id) {
		if (id > 0) {
            let user = this.#data.find((item) => {
                return item.id == id;
            });

            if (user) return user;
            return false;
        }

		return this.#data;
	}
}