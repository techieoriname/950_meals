const { Model } = require("objection");
const moment = require("moment");
const knex = require("../db/knex");
Model.knex(knex);

class Subitem extends Model {
    static get tableName() {
        return "subitems";
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
            required: ["name", "amount", "image", "item_id"]
        };
    }
}

module.exports = Subitem;