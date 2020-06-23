const { Model } = require("objection");
const moment = require("moment");
const knex = require("../db/knex");
Model.knex(knex);

const _ = require("lodash");

class User extends Model {
    static get tableName() {
        return "users";
    }

    $formatJson(jsonRaw) {
        const json = super.$formatJson(jsonRaw);
        return _.pick(json, [
            "id",
            "email",
            "first_name",
            "last_name",
            "phone_number",
            "gender",
            "scope",
            "created_at",
            "updated_at",
        ]);
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
            required: ["first_name", "last_name", "email"],

            properties: {
                id: { type: "integer" },
                first_name: { type: "string", minLength: 1, maxLength: 255 },
                last_name: { type: "string", minLength: 1, maxLength: 255 },
                email: { type: "string", minLength: 1, maxLength: 255 },
                scope: {
                    type: "array",
                },
            },
        };
    }

    static relationMappings() {
        const Order = require("./Order")
        return {
            orders: {
                relation: Model.HasManyRelation,
                modelClass: Order,
                join: {
                    from: 'users.id',
                    to: 'orders.user_id'
                }
            }
        }
    }
}

module.exports = User;
