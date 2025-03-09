class Storage {
	constructor(key, url) {
		if(!key || typeof key != 'string') return;

		this.key = key;
		this.url = url;

		//this.value = null;
	}

	getServerData(url) {
        return fetch(url) 
        .then(request => request.json())
        .then(data => data);
    }

	set data(value) {
		if(!value) return;

		value = JSON.stringify(value);

		if(!value || typeof value != 'string') return;

		document.cookie = 'storageExpiration=true; max-age=864000';

		window.localStorage.setItem(this.key, value);
	}

	get data() {
		function getCookie(name) {
			let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
			return matches ? decodeURIComponent(matches[1]) : undefined;
		}

		let check = getCookie('storageExpiration')

		if (!check) {
			window.localStorage.clear();
			return;
		} 

		//if (this.value && typeof this.value == 'object') return;

		let value = window.localStorage.getItem(this.key);

		if (!value) return;

		value = JSON.parse(value);

		return value;
	}

	async getData() {
        let value = window.localStorage.getItem(this.key);

        if (value) {
            value = JSON.parse(value);

            return value;
        }

        value = await this.getServerData(this.url);
        
        if (value) {
            let valueTmp = value.map((item) => {
                return {
                    id: item.id,
                    name: item.name,
                    phone: item.phone,
					email: item.email,
					adress: item.address.city
                }
            })

            value = valueTmp;

            this.data = value;

            return value;
        }
    }
}