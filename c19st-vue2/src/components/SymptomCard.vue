<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <span class="capitalize">{{labels[lastestSymptom.type]}}</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="$router.push('/symptom/add')"
        >+ Adauga</el-button>
      </div>
      <h1>{{lastestSymptom.value}} {{measurementUnit}}</h1>
      <trend :data="numericalData" :gradient="['#6fa8dc', '#42b983', '#2c3e50']" auto-draw smooth></trend>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "SymptomCard",
  props: {
    symptoms: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    numericalData() {
      return this.symptoms.map(s => s.value);
    },
    lastestSymptom() {
      return this.symptoms[this.symptoms.length - 1] || {};
    },
    measurementUnit() {
      if (this.lastestSymptom.type === "fever") {
        return " °C";
      } else if (this.lastestSymptom.type === "cough") {
        return " reprize > 5min";
      }
      return "⭐";
    }
  },
  data() {
    return {
      isModalVisible: false,
      labels: {
        fever: "Febra",
        fatigue: "Stare generala",
        cough: "Tuse"
      },
      marks: {
        35: "35°C",
        37: "37°C",
        40: "40°C"
      }
    };
  },
  methods: {
    formatTooltip(value) {
      return value + " °C";
    },
    updateSymptom(newSymptom) {
      this.isModalVisible = false;
      this.$emit("update", newSymptom);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
