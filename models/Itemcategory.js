const { Model } = require("objection");
const moment = require("moment");
const knex = require("../db/knex");
Model.knex(knex);

class Itemcategory extends Model {
    static get tableName() {
        return "itemcategories";
    }

    $beforeUpdate() {
        this.updated_at = moment().format("YYYY-MM-DD HH:mm:ss");
    }

    $beforeInsert() {
        this.created_at = moment().format("YYYY-MM-DD HH:mm:ss");
        this.updated_at = moment().format("YYYY-MM-DD HH:mm:ss");
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["name"]
        };
    }

    static relationMappings() {
        const Item = require('./Item');
        return {
            items: {
                relation: Model.HasManyRelation,
                modelClass: Item,
                join: {
                    from: 'itemcategories.id',
                    to: 'items.itemcategory_id'
                }
            }
        }
    };
}

module.exports = Itemcategory;