import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Plateaus extends BaseSchema {
  protected tableName = 'plateaus'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.bigInteger('x_axis').notNullable()
      table.bigInteger('y_axis').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
