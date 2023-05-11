import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { Direction } from 'Contracts/enum'

export default class Rovers extends BaseSchema {
  protected tableName = 'rovers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('plateau_id').unsigned().references('id').inTable('plateaus').notNullable()
      table.bigInteger('start_position_x').notNullable()
      table.bigInteger('start_position_y').notNullable()
      table.string('instruction').notNullable()
      table.bigInteger('current_position_x').notNullable()
      table.bigInteger('current_position_y').notNullable()
      table.enum('start_direction', Object.values(Direction)).notNullable()
      table.enum('current_direction', Object.values(Direction)).notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
