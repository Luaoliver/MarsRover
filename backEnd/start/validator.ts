import { string } from '@ioc:Adonis/Core/Helpers'
import { validator } from '@ioc:Adonis/Core/Validator'

validator.rule('xAxisGreaterThanYAxis', (value, yAxis: number, options) => {
  if (typeof value !== 'number') {
    return
  }

  if (value < yAxis) {
    options.errorReporter.report(
      options.pointer,
      'xAxis',
      'xAxis must to be greater than yAxis',
      options.arrayExpressionPointer
    )
  }
})
