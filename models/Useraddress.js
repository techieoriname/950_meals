const { Model } = require("objection");
const moment = require("moment");
const User = require("./User")
const knex = require("../db/knex");
Model.knex(knex);

class Useraddress extends Model {
    static get tableName() {
        return "user_addresses";
    }

    $beforeUpdate() {
        var wrongtimezone = moment().format("YYYY-MM-DD HH:mm:ss");
        this.updated_at = wrongtimezone.clone().tz("Africa/Lagos");
    }

    $beforeInsert() {
        var bcr8 = moment().format("YYYY-MM-DD HH:mm:ss")
        this.created_at = bcr8.clone().tz("Africa/Lagos");
        var bupd8 = moment().format("YYYY-MM-DD HH:mm:ss")
        this.updated_at = bupd8.clone().tz("Africa/Lagos");
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["user_id", "country", "state", "city", "address"],

            properties: {
                user_id: { type: "integer" },
                country: { type: "string" },
                state: { type: "string" },
                city: { type: "string" },
                address: { type: "string" },
            },
        };
    }

    static relationMappings() {
        const User = require("./User")
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'user_id',
                    to: 'users.id'
                }
            }
        }
    };

}

module.exports = Useraddress;