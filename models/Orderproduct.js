const {Model} = require("objection");
const moment = require("moment");
const Item = require("./Item")
const Order = require("./Order")
const knex = require("../db/knex");
Model.knex(knex);

class Orderproduct extends Model {
    static get tableName() {
        return "orderproducts";
    }

    $beforeUpdate() {
        // this.updatedAt = new Date().toISOString();
        this.updated_at = moment().format("YYYY-MM-DD HH:mm:ss");
    }

    $beforeInsert() {
        this.created_at = moment().format("YYYY-MM-DD HH:mm:ss");
        this.updated_at = moment().format("YYYY-MM-DD HH:mm:ss");
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["order_id", "item_id", "quantity", "amount"]
        };
    }

    static relationMappings() {
        const Order = require("./Order")
        const Item = require("./Item")
        return {
            order: {
                relation: Model.BelongsToOneRelation,
                modelClass: Order,
                join: {
                    from: 'order_id',
                    to: 'orders.id'
                }
            },
            item: {
                relation: Model.BelongsToOneRelation,
                modelClass: Item,
                join: {
                    from: 'item_id',
                    to: 'items.id'
                }
            }
        }
    };
}

module.exports = Orderproduct;