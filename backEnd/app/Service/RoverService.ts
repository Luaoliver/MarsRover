import { DirectionHandler } from './DirectionService'
import { Direction } from 'Contracts/enum'
import Rover from 'App/Models/Rover'
import Plateau from 'App/Models/Plateau'
import InvalidMovementException from 'App/Exceptions/InvalidMovementException'

export default class RoverService {
  public async create(roverParams): Promise<Rover> {
    const [plateau] = await Plateau.query().orderBy('id', 'desc').limit(1)
    const rover = new Rover()
    rover.merge({ plateauId: plateau.id, ...roverParams })
    rover.currentDirection = rover.startDirection
    rover.currentPositionX = rover.startPositionX
    rover.currentPositionY = rover.startPositionY

    this.processInstruction(rover, plateau)
    await rover.save()
    return rover
  }

  private processInstruction(rover: Rover, plateau: Plateau) {
    const directionHandler = new DirectionHandler(rover.startDirection)
    const instructionArray = rover.instruction.split('')
    console.log(instructionArray)
    instructionArray.forEach((instruction) => {
      switch (instruction) {
        case 'R':
          rover.currentDirection = directionHandler.rotateRight()
          break
        case 'L':
          rover.currentDirection = directionHandler.rotateLeft()
          break
        case 'M':
          if (
            rover.currentDirection === Direction.N &&
            rover.currentPositionY + 1 <= plateau.yAxis
          ) {
            rover.currentPositionY++
          } else if (rover.currentDirection === Direction.E && 
            rover.currentPositionX + 1 <= plateau.xAxis
          ) {
            rover.currentPositionX++
          } else if (rover.currentDirection === Direction.S &&
            rover.currentPositionY - 1 <= plateau.yAxis
          ) {
            rover.currentPositionY--
          } else if (rover.currentDirection === Direction.W &&
            rover.currentPositionX - 1 <= plateau.xAxis
          ) {
            rover.currentPositionX--
          } else {
            throw new InvalidMovementException('invalid moviment')
          }
          break
      }
    })
  }
}
