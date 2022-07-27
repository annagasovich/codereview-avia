<template>
  <div class="sort">
    <div
      class="column column-33"
      v-for="item in criteria"
      :class="active(item) ? 'active' : ''"
      @click="setActive(item)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import { useFilterStore } from "@/stores/filter";

const emit = defineEmits(["onsort"]);
const store = useFilterStore();
const criteria = [
  {
    code: "cheapest",
    name: "Самый дешевый",
    sort: (a, b) => a.price - b.price,
  },
  {
    code: "fastest",
    name: "Самый быстрый",
    sort: (a, b) => a.duration - b.duration,
  },
  {
    code: "optimum",
    name: "Оптимальный",
    sort: (a, b) => (a.id < b.id ? -1 : 1),
  },
];

store.orderBy(criteria[0]);
const active = (criteria) => {
  return store.sort.code === criteria.code;
};
const setActive = (criteria) => {
  store.orderBy(criteria);
  emit("onsort");
};
</script>

<style scoped></style>
