import { getMoves } from '.'

describe('state:selectors', () => {
  it('extracts the moves array from the state', () => {
    const moves = [4, 0, 2]
    const state = { moves }

    expect(getMoves(state)).toBe(moves)
  })
})
