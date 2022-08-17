import actions from "@/store/modules/asset/assetAction"
import mutations from "@/store/modules/asset/assetMutations"

export default {
  state: () => ({
    // * add initial state in here
    assets: [],
    page: 1,
    isLoading: false,
    isError: false,
    error: null,
  }),
  getters: {},
  actions,
  mutations,
}
