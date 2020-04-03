export const state = () => ({
  views: new Map(),
  countries: []
})

export const getters = {
  views (state) {
    return (path) => {
      if (state.views.get(path) !== undefined) {
        return state.views.get(path)
      }
      return 0
    }
  },
  countries (state) {
    return state.countries
  }
}

export const mutations = {
  add_view (state, path) {
    if (path !== undefined) {
      let count = state.views.get(path)
      if (count !== undefined) {
        state.views.set(path, ++count)
      } else { state.views.set(path, 1) }
    }
  },
  add_affected_countries (state, val) {
    state.countries = val
  }

}
export const actions = {
  async add_affected_countries ({ commit }, app) {
    const { data } = await app.$api_mo.get('cases_by_country.php')
    commit('add_affected_countries', data.countries_stat)
  }

}
