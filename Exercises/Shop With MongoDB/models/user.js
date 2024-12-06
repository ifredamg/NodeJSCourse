const mongodb = require("mongodb");
const getDb = require('../util/database').getDb;

class User {
    constructor(username, email, cart) {
        this.name = username;
        this.email = email;
        //this._id = id ? new mongodb.ObjectId(id) : null;
        this.cart = cart; // {items: []}
    }

    save() {
        const db = getDb();
        let dbOp;

        // if(this._id) {
        //     dbOp = db.collection('users').updateOne({ _id: this._id }, { $set: this });
        // } else {
        dbOp = db.collection('users').insertOne(this);
        // }
        return dbOp
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    addToCart(product) {
        const cartProduct = this.cart.items.findIndex(cp => {
            return cp._id === product._id;
        });

        const updatedCart = {
            items: [{ ...product, quantity: 1 }]
        };

        const db = getDb();
        return db.collection('users').insertOne(
            { _id: new mongodb.ObjectId(this._id) },
            { $set: { cart: updatedCart } }
        );
    }

    static findById(userId) {
        const db = getDb();
        return db
            .collection('users')
            .findOne({ _id: new mongodb.ObjectId(userId) })
            .then(user => {
                console.log(user);
                return user;
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = User;