/* eslint-disable no-console */
export default ({ store, route }) => {
  store.commit('add_view', route.path)
}
