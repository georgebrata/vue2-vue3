<template>
  <el-form class="fatigue-form">
    <p>Care e starea ta generala in momentul de fata?</p>

    <el-form-item>
      <el-rate
        v-model="value"
        show-text
        :texts="ratingTexts"
        :colors="ratingColors"
      ></el-rate>
    </el-form-item>
    <div class="action-btns">
      <el-button icon="el-icon-back" @click="$emit('cancel')">Inapoi</el-button>
      <el-button type="primary" @click="addSymptom">Salveaza</el-button>
    </div>
  </el-form>
</template>

<script>
import { defineComponent, toRefs, reactive } from "vue";
import {useAdd} from "../../composables/index"

export default defineComponent({
  name: "Fatigue",
  setup() {
    const adder = useAdd();

    const state = reactive({
      ratingColors: ["#ff0000", "#FF9900", "#F7BA2A"],
      ratingTexts: [
        "stare foarte rea",
        "stare rea",
        "stare ok",
        "stare buna",
        "sanatos tun",
      ],
      value: 0,
    });

    function addSymptom() {
      adder.addSymptom('fatigue', state.value);
      // let payload = {
      //   type: "fatigue",
      //   value: state.value,
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
