const { Model } = require("objection");
const moment = require("moment");
const knex = require("../db/knex");
Model.knex(knex);

class Order extends Model {
    static get tableName() {
        return "orders";
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
            required: ["user_id", "total_amount"],
        };
    }

    static relationMappings() {
        const User = require("./User")
        const Orderproduct = require("./Orderproduct")
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'order_id',
                    to: 'users.id'
                }
            },
            orderproducts: {
                relation: Model.HasManyRelation,
                modelClass: Orderproduct,
                join: {
                    from: 'orders.id',
                    to: 'orderproducts.order_id'
                }
            }
        }
    };
}

module.exports = Order;