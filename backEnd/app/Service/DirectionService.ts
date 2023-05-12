import { Direction } from 'Contracts/enum'

const DIRECTION_ARRAY = Object.keys(Direction).filter((key) => isNaN(Number(key)))
const ARRAY_LENGTH = DIRECTION_ARRAY.length

export class DirectionHandler {
  public current: Direction
  constructor(current) {
    this.current = current
    console.log(this.current)
  }

  private rotate(value) {
    const currentIndex = DIRECTION_ARRAY.indexOf(String(this.current))
    const enumIndex = (((currentIndex + value) % ARRAY_LENGTH) + ARRAY_LENGTH) % ARRAY_LENGTH
    this.current = DIRECTION_ARRAY[enumIndex] as unknown as Direction
    return this.current
  }

  public rotateRight() {
    return this.rotate(1)
  }

  public rotateLeft() {
    return this.rotate(-1)
  }
}
