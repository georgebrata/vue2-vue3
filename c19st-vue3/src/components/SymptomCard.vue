<template>
  <div>
    <el-card>
      <template #header class="clearfix">
        <span class="capitalize">{{ labels[lastSymptom.type] }}</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="router.push('/symptom/add')"
          >+ Adauga</el-button
        >
      </template>
      <h1>{{ lastSymptom.value }} {{ measurementUnit }}</h1>
      <small>{{ symptoms }}</small>
      <!-- <trend
        :data="numericalData"
        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        auto-draw
        smooth
      ></trend> -->
    </el-card>
  </div>
</template>

<script>
import { defineComponent, computed, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
// import {useStore} from "vuex";

export default defineComponent({
  name: "SymptomCard",
  props: {
    symptoms: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  setup(props) {
    let router = useRouter();
    const state = reactive({
      isModalVisible: false,
      labels: {
        fever: "Febra",
        fatigue: "Stare generala",
        cough: "Tuse",
      },
      marks: {
        35: "35°C",
        37: "37°C",
        40: "40°C",
      },
    });

    let numericalData = computed(() => {
      return props.symptoms.map((s) => s.value);
    });

    let lastSymptom = computed(() => {
      return props.symptoms[props.symptoms.length - 1];
    });

    let measurementUnit = computed(function() {
      if (lastSymptom.value && lastSymptom.value.type === "fever") {
        return " °C";
      } else if (lastSymptom.value && lastSymptom.value.type === "cough") {
        return " reprize > 5min";
      }
      return "⭐";
    });

    return {
      ...toRefs(state),
      router,
      numericalData,
      measurementUnit,
      lastSymptom,
    };
  },
});
</script>

<style scoped lang="scss"></style>
