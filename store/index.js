import { countries } from '~/countries'
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
    let result = require('../api/last_data').default.countries_stat
    try {
      const { data } = await app.$api.get('api')
      result = data.countries_stat
    } catch {
      result = require('../api/last_data').default.countries_stat
    }

    for (const i of result) {
      // eslint-disable-next-line dot-notation
      if (countries[String(i.country_name)] == undefined || countries[String(i.country_name)] == '') {
        i.country_name_ar = i.country_name
      } else { i.country_name_ar = countries[String(i.country_name)] }
    }
    commit('add_affected_countries', result)
  }
  /*
  async transition ({ state }, app) {
    let x = ''
    for (const i of state.countries) {
      x = x + `text=${String(i.country_name)};`
    }
    const { data } = await app.$api_tr.post('', x)
    const y = {}
    for (const i in data.text) {
      y[String(state.countries[i].country_name)] = data.text[i]
    // console.log(arabicCountries[String(i.country_name)])
    // }
    }
  } */
}
