import { Exception } from '@adonisjs/core/build/standalone'

export default class InvalidMovementException extends Exception {
  public handle(_error, { response }) {
    return response.status(422).json({ error: 'invalid moviment' })
  }
}
