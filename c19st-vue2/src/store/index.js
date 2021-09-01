import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    feverSymptoms: [],
    fatigueSymptoms: [],
    coughSymptoms: []
  },
  mutations: {
    addSymptom(state, payload) {
        switch (payload.type) {
            case "fever":
                state.feverSymptoms.push(payload)
                break;
            case "fatigue":
                state.fatigueSymptoms.push(payload)
                break;
            case "cough":
                state.coughSymptoms.push(payload)
                break;
            default:
                break;
        }
    }
  },
  getters: {},
  actions: {}
})
