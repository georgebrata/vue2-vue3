<template>
  <el-form class="fever-form">
    <p>Temperatura</p>
    <el-form-item>
      <el-slider
        :step="0.1"
        :min="34"
        :max="41"
        :marks="marks"
        :format-tooltip="formatTooltip"
        v-model="temperature"
      ></el-slider>
    </el-form-item>
    <div class="action-btns">
      <el-button icon="el-icon-back" @click="$emit('back')">Inapoi</el-button>
      <el-button type="primary" @click="addSymptom">Salveaza</el-button>
    </div>
  </el-form>
</template>

<script>
import { defineComponent, toRefs, reactive } from "vue";
import {useAdd} from "../../hooks/index"

export default defineComponent({
  name: "Fever",
  setup() {
    const adder = useAdd();
    const state = reactive({
      marks: {
        35: "35°C",
        37: "37°C",
        40: "40°C",
      },
      temperature: 37,
    });

    function formatTooltip(value) {
      return value + " °C";
    }

    function addSymptom() {
      adder.addSymptom('fever', state.temperature);
      // let payload = {
      //   type: "fever",
      //   value: state.temperature,
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
      formatTooltip,
    };
  },
});
</script>

<style scoped>
.el-form-item__label {
  margin-top: -30px;
}
</style>
