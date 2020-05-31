"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ObjectSchema extends Schema {
  up() {
    this.create("objects", table => {
      table.increments();
      table.string("video_url");
      table.integer("user_id");
      table.timestamps();
    });
  }

  down() {
    this.drop("objects");
  }
}

module.exports = ObjectSchema;
