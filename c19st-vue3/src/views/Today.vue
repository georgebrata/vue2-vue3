<template>
  <div class="today">
    <h1>Buna, {{ nume }} 👋</h1>
    <div class="source" v-if="symptoms.length">
      <el-row :gutter="12">
        <el-col
          :xs="24"
          :sm="24"
          :md="12"
          :lg="8"
          v-if="fatigueSymptoms.length"
        >
          <symptom-card
            :symptoms="fatigueSymptoms"
            type="fatigue"
            @update="saveData"
          ></symptom-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" v-if="feverSymptoms.length">
          <symptom-card
            :symptoms="feverSymptoms"
            type="fever"
            @update="saveData"
          ></symptom-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" v-if="coughSymptoms.length">
          <symptom-card
            :symptoms="coughSymptoms"
            type="cough"
            @update="saveData"
          ></symptom-card>
        </el-col>
      </el-row>
    </div>
    <h3 v-else>Cum te simti azi?</h3>
  </div>
</template>

<script>
import SymptomCard from "@/components/SymptomCard";

import { defineComponent, computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Today",
  components: { SymptomCard },
  setup() {
    const store = useStore();
    const state = reactive({
      nume: "George",
    });

    let symptoms = computed(function() {
      return store.state.fatigueSymptoms.concat(
        store.state.feverSymptoms.concat(store.state.coughSymptoms)
      );
    });
    let fatigueSymptoms = computed(function() {
      return store.state.fatigueSymptoms || [];
    });
    let feverSymptoms = computed(function() {
      return store.state.feverSymptoms || [];
    });
    let coughSymptoms = computed(function() {
      return store.state.coughSymptoms || [];
    });

    function saveData(newSymptom) {
      let payload = {
        type: newSymptom.type,
        value: newSymptom.value,
        date: new Date(),
      };

      store.commit("addSymptom", payload);
    }

    return {
      ...toRefs(state),
      symptoms,
      fatigueSymptoms,
      feverSymptoms,
      coughSymptoms,
      store,
      saveData,
    };
  },
});
</script>
<style>
.el-col {
  margin-bottom: 1rem;
}
</style>
