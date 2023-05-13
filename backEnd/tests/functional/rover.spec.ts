import { test } from '@japa/runner'
import assert from 'node:assert'

test.group('Rover', () => {
  test('should create rover and move according to the instructions', async ({ client }) => {
    const response = await client.post('/rover').json({
      startPositionX: 1,
      startPositionY: 2,
      instruction: 'LMLMLMLMM',
      startDirection: 'N',
    })

    const { current_position_x, current_position_y, current_direction } = response.body()
    response.assertStatus(201)
    assert.deepEqual(
      {
        current_position_x: 1,
        current_position_y: 3,
        current_direction: 'N',
      },
      {
        current_position_x,
        current_position_y,
        current_direction,
      }
    )
  })

  test('should throw error when created off the map', async ({ client }) => {
    const plateau = await client.post('/plateau').json({
      xAxis: 10,
      yAxis: 5,
    })

    const response = await client.post('/rover').json({
      startPositionX: 11,
      startPositionY: 6,
      instruction: 'LMLMLMLMM',
      startDirection: 'N',
    })

    response.assertStatus(422)
    response.assertBody({ error: 'invalid moviment' })
  })

  test('should throw error on movement off the map', async ({ client }) => {
    const plateau = await client.post('/plateau').json({
      xAxis: 10,
      yAxis: 5,
    })

    const response = await client.post('/rover').json({
      startPositionX: 10,
      startPositionY: 5,
      instruction: 'LMLMLMLMM',
      startDirection: 'N',
    })

    response.assertStatus(422)
    response.assertBody({ error: 'invalid moviment' })
  })
})
