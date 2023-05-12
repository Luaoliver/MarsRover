import Rover from 'App/Models/Rover'
import { DirectionHandler } from './DirectionService'
import { Direction } from 'Contracts/enum'

export default class RoverService {
  public async create(roverParams): Promise<Rover> {
    const rover = new Rover()
    rover.merge(roverParams)
    rover.currentDirection = rover.startDirection
    rover.currentPositionX = rover.startPositionX
    rover.currentPositionY = rover.startPositionY

    this.processInstruction(rover)
    await rover.save()
    return rover
  }

  private processInstruction(rover: Rover) {
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
          if (rover.currentDirection === Direction.N) {
            rover.currentPositionY++
          } else if (rover.currentDirection === Direction.E) {
            rover.currentPositionX++
          } else if (rover.currentDirection === Direction.S) {
            rover.currentPositionY--
          } else if (rover.currentDirection === Direction.W) {
            rover.currentPositionX--
          }
          break
      }
    })
  }
}
