'use strict';
const uuid = require('uuid').v4;

class Clothes {
    constructor() {
        this.db = [];
    }

    creat(object) {
        const clothes = { id: uuid(), data: object };
        this.db.push(clothes);
        return clothes;

    }
    get(id) {
        if (id)
            return this.db.find(peice => peice.id === id);
        return this.db;
    }

    update(id, clothes_object) {
        let p;
        this.db.forEach(peice => {
            if (peice.id === id) {
                peice.data = clothes_object;
                p = peice;
            }
        });
        return p;
    }

    delete(id) {
        this.db = this.db.filter(peice => peice.id !== id);
        return this.db;
    }
}
module.exports = Clothes;