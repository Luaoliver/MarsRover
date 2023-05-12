import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rover from 'App/Models/Rover'
import RoverService from 'App/Service/RoverService'
import { Direction } from 'Contracts/enum'

export default class RoversController {
  private roverService: RoverService
  constructor() {
    this.roverService = new RoverService()
  }

  public async index({ request, response }: HttpContextContract) {
    const data = await Rover.query()
    response.status(200).json(data)
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const rover = request.body()
    console.log(rover)
    const result = await this.roverService.create(rover)
    response.status(201).json(result)
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({ request, response }: HttpContextContract) {
    const params = request.params()
    console.log(params)
    const rover = await Rover.findOrFail(params.id)
    await rover.delete()
    response.status(202)
  }
}
