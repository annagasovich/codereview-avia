<template>
  <div class="filter">
    <div class="filter-count">
      <div class="filter-count__name">Количество пересадок</div>
      <div class="filter-count__controls">
        <Checkbox :label="'Без пересадок'" :name="'stops0'" />
        <Checkbox :label="'1 пересадка'" :name="'stops1'" />
        <Checkbox :label="'2 пересадки'" :name="'stops2'" />
        <Checkbox :label="'3 пересадки'" :name="'stops3'" />
      </div>
    </div>
    <div class="filter-company">
      <div class="filter-company__name">Компания</div>
      <Radiogroup :data="companies" :name="'company'" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Checkbox from "@/components/controls/Checkbox.vue";
import Radiogroup from "@/components/controls/Radiogroup.vue";
import { useTicketsStore } from "@/stores/tickets";

const store = useTicketsStore();
const companies = computed(() =>
  [{ name: "Все", id: 1 }].concat(store.companies).map((el) => {
    return { label: el.name, value: el.id };
  })
);
store.getCompanies();
</script>

<style scoped></style>
