const { Model } = require("objection");
const moment = require("moment");
const knex = require("../db/knex");
Model.knex(knex);

class Location extends Model {
    static get tableName() {
        return "locations";
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
            required: ["country", "state", "city"],
        };
    }

    // static relationMappings = {
    //     user: {
    //         relation: Model.BelongsToOneRelation,
    //         modelClass: User,
    //         join: {
    //             from: 'user_id',
    //             to: 'users.id'
    //         }
    //     }
    // }
}

module.exports = Location;