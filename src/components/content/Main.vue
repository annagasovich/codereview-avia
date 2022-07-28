<template>
  <Sort @onsort="sort" />
  <div class="list">
    <Ticket v-for="item in paginate(sort(filter(store.tickets, filterStore.conditions), filterStore.sort?.sort), page)" :data="item" />
    <div v-if="!paginate(sort(filter(store.tickets, filterStore.conditions), filterStore.sort?.sort), page).length" class="no-tickets">Билетов нет</div>
  </div>
  <div class="btn" @click="page++">Показать еще 5 билетов</div>
</template>

<script setup>
import {computed, reactive, ref} from "vue";
import Sort from "@/components/filter/Sort.vue";
import Ticket from "@/components/content/Ticket.vue";
import ticketFilter from "@/filters/ticketFilter";
import { useTicketsStore } from "@/stores/tickets";
import { useFilterStore } from "@/stores/filter";

const store = useTicketsStore();
const filterStore = useFilterStore();

store.getTickets();

const { filter, sort, paginate } = ticketFilter();

const page = ref(1);

</script>

<style scoped></style>
