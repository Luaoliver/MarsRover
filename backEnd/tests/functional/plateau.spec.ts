import { test } from '@japa/runner'

test.group('Plateau', () => {
  test('should create plateau', async ({ client }) => {
    const response = await client.post('/plateau').json({
      xAxis: 10,
      yAxis: 5,
    })

    response.assertStatus(201)
  })

  test('should not create plateau invalid values', async ({ client }) => {
    const response = await client.post('/plateau').json({
      xAxis: 5,
      yAxis: 10,
    })

    response.assertStatus(422)
  })
})
