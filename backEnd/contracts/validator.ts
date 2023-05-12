declare module '@ioc:Adonis/Core/Validator' {
  interface Rules {
    xAxisGreaterThanYAxis(yAxis: number): Rule
  }
}
