const { Model } = require("objection");
const moment = require("moment");
const knex = require("../db/knex");
Model.knex(knex);

class Item extends Model {
    static get tableName() {
        return "items";
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
            required: ["name", "image", "itemcategory_id"]
        };
    }

    static relationMappings(){
        const Itemcategory = require("./Itemcategory")
        const Subitem = require("./Subitem")
        return {
            itemcategory: {
                relation: Model.BelongsToOneRelation,
                modelClass: Itemcategory,
                join: {
                    from: 'itemcategory_id',
                    to: 'itemcategories.id'
                }
            },
            subitems: {
                relation: Model.HasManyRelation,
                modelClass: Subitem,
                join: {
                    from: 'items.id',
                    to: 'subitems.id'
                }
            }
        }
    };
}

module.exports = Item;