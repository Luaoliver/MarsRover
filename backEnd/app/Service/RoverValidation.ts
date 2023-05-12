import { validator, schema, rules } from '@ioc:Adonis/Core/Validator'
import { Direction } from 'Contracts/enum'

export const roverSchema = schema.create({
  startPositionX: schema.number(),
  startPositionY: schema.number(),
  instruction: schema.string({ trim: true }, [rules.regex(/^[LMR]+$/)]),
  startDirection: schema.enum(Object.values(Direction)),
})
