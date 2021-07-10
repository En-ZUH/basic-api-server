'use strict';
const uuid = require('uuid').v4; //to generate a random ID

class Food {
	constructor() {
		this.db = [];
	}

	creat(object) {
		const record = { id: uuid(), record: object };
		this.db.push(record);
		return record;

	}
	get(id) {
		if (id) {
			return this.db.find(record => record.id === id);
		}
		else return this.db;

	}

	update(id, food_object) {

		for (let i = 0; i < this.db.length; i++) {
			let k = this.db[i];
			if (k.id === id) {
				k.record = food_object;
				return k;
			}
		}
	}

	delete(id) {
		this.db = this.db.filter(record => record.id !== id);
		return this.db;
	}
}
module.exports = Food;