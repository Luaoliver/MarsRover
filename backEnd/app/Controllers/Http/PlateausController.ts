import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Plateau from 'App/Models/Plateau'

export default class PlateausController {
  public async index({ request, response }: HttpContextContract) {
    const data = await Plateau.query()
    response.status(200).json(data)
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const plateau = request.body()
    const result = await Plateau.create(plateau)
    response.status(201).json(result)
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({ request, response }: HttpContextContract) {
    const params = request.params()
    console.log(params)
    const plateau = await Plateau.findOrFail(params.id)
    await plateau.delete()
    response.status(202)
  }
}
