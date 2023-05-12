import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Plateau extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({})
  public xAxis: number

  @column({})
  public yAxis: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
