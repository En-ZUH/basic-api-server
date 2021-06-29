'use strict';
const uuid = require('uuid').v4;

class Food {
    constructor() {
        this.db = [];
    }

    creat(object) {
        const food = { id: uuid(), data: object };
        this.db.push(food);
        return food;

    }
    get(id) {
        if (id)
            return this.db.find(kind => kind.id === id);
        return this.db;
    }

    update(id, food_object) {
        let k;
        this.db.forEach(kind => {
            if (kind.id === id) {
                kind.data = food_object;
                p = kind;
            }
        });
        return k;
    }

    delete(id) {
        this.db = this.db.filter(kind => kind.id !== id);
        return this.db;
    }
}
module.exports = Food;