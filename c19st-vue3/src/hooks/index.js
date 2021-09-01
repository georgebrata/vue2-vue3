import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

export function useAdd() {
  const store = useStore();
  const router = useRouter();

  function addSymptom(type, value) {
    let payload = {
      type: type,
      value: value,
      date: new Date(),
    };

    store.commit("addSymptom", payload);
    ElMessage({
      message: "Simptom adaugat cu success!",
      type: "success",
    });
    router.push("/");
  }

  return {
    addSymptom,
  };
}
