<template>
  <el-form class="cough-form">
    <p>Ai avut reprize de tuse mai lungi de 5 minute in ultimele 24h?</p>

    <el-radio v-model="hasCough" :label="true">Da</el-radio>
    <el-radio v-model="hasCough" :label="false">Nu</el-radio>
    <div v-if="hasCough">
      <p>Cate astfel de reprize ai avut in ultimele 24h?</p>
      <el-input-number
        v-model="coughCount"
        :min="1"
        :max="100"
      ></el-input-number>
    </div>
    <div class="action-btns">
      <!-- <el-button icon="el-icon-back" @click="$emit('cancel')">Inapoi</el-button> -->
      <el-button type="primary" @click="addSymptom">Salveaza</el-button>
    </div>
  </el-form>
</template>

<script>
import { defineComponent, toRefs, reactive } from "vue";
import {useAdd} from "../../composables/index"


export default defineComponent({
  name: "Cough",
  setup() {
    const adder = useAdd();

    const state = reactive({
      hasCough: false,
      coughCount: 0,
    });

    function addSymptom() {
      adder.addSymptom('cough', state.hasCough ? state.coughCount : 0);
      // let payload = {
      //   type: "cough",
      //   value: state.hasCough ? state.coughCount : 0,
      //   date: new Date(),
      // };

      // store.commit("addSymptom", payload);
      // ElMessage({
      //   message: "Simptom adaugat cu success!",
      //   type: "success",
      // });
      // router.push("/");
    }

    return {
      ...toRefs(state),
      addSymptom,
    };
  },
});
</script>

<style scoped></style>
