import configureStore from '.'

describe('state:store', () => {
  describe('configureStore', () => {
    it('creates a store', () => {
      const { store } = configureStore()
      expect(store).toHaveProperty('getState')
      expect(store).toHaveProperty('dispatch')
      expect(store).toHaveProperty('subscribe')
    })
  })
})
