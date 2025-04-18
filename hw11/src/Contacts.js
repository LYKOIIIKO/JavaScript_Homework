class User {
	constructor(user) {
		this.data = user;
	}

	getUser() {
		return this.data;
	}
}

class Contacts extends User {
	constructor() {
		super();
		this.data = [];
		this.lastID = 0;
	}

	add(name, phone, email, adress) {
		this.lastID++;

		let user = {
			id: this.lastID,
			name: name || '',
			email: email || '',
			adress: adress || '',
			phone: phone || ''
		}

		this.data.push(new User(user).getUser());
	}

	edit(id, obj) {
		if (!id) return false;

        let user = this.data.find((item) => {
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

        return true;
	}

	remove(id) {
		if (!id) return;

        let dataTmp = this.data.filter((item) => {
            return item.id != id;
        });

        this.data = dataTmp;
		return true;
	}

	getContacts(id) {
		if (id > 0) {
            let user = this.data.find((item) => {
                return item.id == id;
            });

            if (user) return user;
            return false;
        }

		return this.data;
	}
}