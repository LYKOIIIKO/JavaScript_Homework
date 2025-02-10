class Notes extends Storage {
    #data = [];

    constructor(args) {
        super(args);

        this.key = 'notes';

        this.#data = this.data || []; //вызываем сеттер

        this.lastId = 5;
    }

    add(title, content, color) {
        if (!title && !content) return;

        this.lastId++;

        let note = {
            id: this.lastId,
            create: Date.now()
        };

        if (title) note.title = title;
        if (content) note.content = content;
        if (color) note.color = color;


        this.#data.push(note);
        this.data = this.#data; // вызываем сеттер хранилища

        return true;
    }

    edit(id, newData = {}) {
        if (!id) return false;

        let note = this.#data.find((item) => {
            return item.id == id;
        });

        if (!note) return false;

        for (let key in newData) {
            let value = newData[key];
            note[key] = value;
        }

        if (!note.title && !note.content) {
            this.remove(id);
            return false; 
        } 

        this.data = this.#data; // вызываем сеттер хранилища

        return true;
    }

    remove(id) {
        if (!id) return;

        let dataTmp = this.#data.filter((item) => {
            return item.id != id;
        });

        this.#data = dataTmp;
        this.data = this.#data; // вызываем сеттер хранилища
    }
     
    get(id) {
        if (id > 0) {
            let note = this.#data.find((item) => {
                return item.id == id;
            });

            if (note) return note;
            return false;
        }

        return this.#data;
    };
    
}




// let Notes = function() {
//     let data = [
//         {
//             id: 1,
//             title: 'Title note 1',
//             content: 'Text text text',
//             create: Date.now()
//         },
//         {
//             id: 2,
//             title: 'Title note 2',
//             content: 'Text text text',
//             create: Date.now()
//         },
//         {
//             id: 3,
//             title: 'Title note 3',
//             content: 'Text text text',
//             create: Date.now()
//         },
//         {
//             id: 4,
//             title: 'Title note 4',
//             content: 'Text text text',
//             create: Date.now()
//         },
//         {
//             id: 5,
//             title: 'Title note 5',
//             content: 'Text text text',
//             create: Date.now()
//         },
//     ];
//     let lastId = 0;

//     this.add = (title, content, color) => {
//         if (!title && !content) return;

//         lastId++;

//         let note = {
//             id: lastId,
//             create: Date.now()
//         };

//         if (title) note.title = title;
//         if (content) note.content = content;
//         if (color) note.color = color;

//         // let note = {
//         //     id: lastId,
//         //     create: Date.now(),
//         //     title: title ? title : '',
//         //     content: content ? content : '',
//         //     color: color ? color : '',
//         // };

//         data.push(note);

//         return true;
//     };

//     this.edit = (id, newData = {}) => {
//         if (!id) return false;

//         let note = data.find((item) => {
//             return item.id == id;
//         });

//         if (!note) return false;

//         for (let key in newData) {
//             let value = newData[key];
//             note[key] = value;
//         }

//         if (!note.title && !note.content) {
//            this.remove(id);
//             return false; 
//         } 
//         return true;
//     };

//     this.remove = (id) => {
//         if (!id) return;

//         let dataTmp = data.filter((item) => {
//             return item.id != id;
//         });

//         data = dataTmp;
//     }

//     this.get = (id) => {
    //     if (id > 0) {
    //         let note = data.find((item) => {
    //             return item.id == id;
    //         });

    //         if (note) return note;
    //         return false;
    //     }

    //     return data;
    // };

// };