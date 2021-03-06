import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class People extends BaseSchema {
  protected tableName = 'people'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table
        .foreign('addre_id')
        .references('id')
        .inTable('addresses')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropForeign(['addre_id'])
    })
  }
}
