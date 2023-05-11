import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Plateau from './Plateau'
import { Direction } from 'Contracts/enum'

export default class Rover extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({})
  public plateauId: number
  @belongsTo(() => Plateau)
  public plateau: BelongsTo<typeof Plateau>

  @column({})
  public startPositionX: number

  @column({})
  public startPositionY: number

  @column({})
  public instruction: string

  @column({})
  public currentPositionX: number

  @column({})
  public currentPositionY: number

  @column({})
  public startDirection: Direction

  @column({})
  public currentDirection: Direction

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
