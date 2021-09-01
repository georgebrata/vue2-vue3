<template>
  <div class="add-symptom">
    <h1>Adauga simptom</h1>

    <el-radio-group v-model="symptomType">
      <el-radio-button label="fatigue">Stare generala</el-radio-button>
      <el-radio-button label="fever">Febra</el-radio-button>
      <el-radio-button label="cough">Tuse</el-radio-button>
    </el-radio-group>
    <keep-alive>
      <component class="form" v-bind:is="symptomType"></component>
    </keep-alive>
  </div>
</template>

<script>
import Fever from "@/components/symptoms-forms/Fever";
import Cough from "@/components/symptoms-forms/Cough";
import Fatigue from "@/components/symptoms-forms/Fatigue";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "AddSymptom",
  components: { Fever, Fatigue, Cough },
  setup() {
    const state = reactive({
      symptomType: 'fatigue'
    })

    return {
      ...toRefs(state)
    }
  }
});
</script>


<style scoped>
.add-symptom {
  margin: 0 2rem;
}
.form {
  margin: 2rem 0 4rem 0;
}
</style>
