<template>
  <div class="add-symptom">
    <h1>Adauga simptom</h1>

    <el-radio-group v-model="symptomType">
      <el-radio-button label="fatigue">Stare generala</el-radio-button>
      <el-radio-button label="fever">Febra</el-radio-button>
      <el-radio-button label="cough">Tuse</el-radio-button>
    </el-radio-group>
    <keep-alive>
      <component class="form" v-bind:is="symptomType" @add-symptom="saveData" @cancel="cancel"></component>
    </keep-alive>
  </div>
</template>

<script>
import Fever from "@/components/symptoms-forms/Fever";
import Cough from "@/components/symptoms-forms/Cough";
import Fatigue from "@/components/symptoms-forms/Fatigue";

export default {
  name: "AddSymptom",
  components: { Fever, Fatigue, Cough },
  data() {
    return {
      symptomType: "fatigue",
    };
  },
  methods: {
    saveData(newSymptom) {
      let payload = {
        type: newSymptom.type,
        value: newSymptom.value,
        date: new Date()
      };

      this.$store.commit("addSymptom", payload);

      this.$message({
        message: "Simptom adaugat cu success!",
        type: "success"
      });
      this.$router.push("/");
    },
    cancel() {
      this.$router.push("/");
    }
  }
};
</script>


<style scoped>
.add-symptom {
  margin: 0 2rem;
}
.form {
  margin: 2rem 0 4rem 0;
}
</style>
