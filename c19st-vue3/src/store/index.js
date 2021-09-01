import { createStore } from "vuex";

export default createStore({
  state: {
    feverSymptoms: [],
    fatigueSymptoms: [],
    coughSymptoms: []
  },
  mutations: {
    addSymptom(state, payload) {
      console.log('payload: ', payload)
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
  }
});