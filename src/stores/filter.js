import { defineStore } from "pinia";
import http from "@/services/http";

export const useFilterStore = defineStore({
  id: "filter",
  state: () => ({
    sort: null,
    conditions: [],
  }),
  actions: {
    orderBy(sort) {
      this.sort = sort;
    },
    where(condition) {
      let updateCondition = this.conditions.find((el) => el.name === condition.name);
      if(!updateCondition) {
        this.conditions.push(condition);
      } else {
        updateCondition.value = condition.value;
      }
    },
  },
});
