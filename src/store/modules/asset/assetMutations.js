export default {
  SET_ITEMS_MUTATION(state, { resource, items }) {
    state[resource] = items
  },

  SET_LOADING_FETCH_MUTATION(state, { value }) {
    state.isLoading = value
  },

  SET_ERROR_FETCH_MUTATION(state, { error }) {
    state.error = error
    state.isError = true
  },
}
