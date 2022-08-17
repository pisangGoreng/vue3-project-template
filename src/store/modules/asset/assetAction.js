import axios from "axios"

export default {
  async FETCH_ASSETS_ACTION({ commit }, payloads) {
    commit("SET_LOADING_FETCH_MUTATION", { value: true })
    console.log("PAYLOADS ", payloads)

    commit("SET_LOADING_FETCH_MUTATION", { value: true })
    return new Promise((resolve, reject) => {
      commit("SET_LOADING_FETCH_MUTATION", { value: true })

      axios
        .get("https://swapi.dev/api/people/1")
        .then(function (response) {
          // handle success
          console.log(response.data)
          commit("SET_ITEMS_MUTATION", {
            resource: "assets",
            items: response.data,
          })
        })
        .catch(function (error) {
          console.log(error)
          commit("SET_ERROR_FETCH_MUTATION", { error })
          resolve()
        })
        .then(function () {
          commit("SET_LOADING_FETCH_MUTATION", { value: false })
          reject()
        })
    })
  },
}
