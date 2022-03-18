import { Dispatch }       from 'react'
import { SetStateAction } from 'react'
import { useState }       from 'react'

const doNothing = () => {
  // do nothing
}

type State<T> = [T, Dispatch<SetStateAction<T>>]

export class SliderStore {
  private countState: State<number>

  private activeState: State<number>

  private slideSubscribers: Array<(direction: 'left' | 'right') => any>

  get count() {
    return this.countState[0]
  }

  get active() {
    return this.activeState[0]
  }

  set count(value) {
    this.countState[1](value)
  }

  set active(value) {
    this.activeState[1](value)
  }

  constructor() {
    this.activeState = [0, doNothing]
    this.countState = [0, doNothing]
    this.slideSubscribers = []
  }

  register() {
    this.activeState = useState<number>(0)
    this.countState = useState<number>(3)

    return this
  }

  registerSlide() {
    this.count += 1
  }

  get nextSlide() {
    if (this.active + 1 < this.count) {
      return this.active + 1
    } else return 0
  }

  get prevSlide() {
    if (this.active - 1 >= 0) {
      return this.active - 1
    } else return this.count - 1
  }

  async slideLeft() {
    for await (const subscriber of this.slideSubscribers) {
      subscriber('left')
    }

    this.active = this.prevSlide
  }

  async slideRight() {
    for await (const subscriber of this.slideSubscribers) {
      subscriber('right')
    }

    this.active = this.nextSlide
  }

  addSlideSubscriber(subscriber) {
    this.slideSubscribers.push(subscriber)
  }
}
