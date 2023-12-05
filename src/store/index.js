import { createStore } from 'vuex'

import teachers from './modules/teachers'
import subjects from './modules/subjects'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { teachers, subjects },
})
