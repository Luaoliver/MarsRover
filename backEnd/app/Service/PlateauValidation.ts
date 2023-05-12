import { validator, schema, rules, ParsedTypedSchema } from '@ioc:Adonis/Core/Validator'

export const getPlateauSchema = (yAxis: number): ParsedTypedSchema<any> => {
  return schema.create({
    xAxis: schema.number([rules.range(0, 1000), rules.xAxisGreaterThanYAxis(yAxis)]),
    yAxis: schema.number([rules.range(0, 1000)]),
  })
}
