<template>
    <Sort @onsort="sort"/>
    <div class="list">
        <Ticket v-for="item in sorted(store.tickets)" :data="item"/>
    </div>
    <div class="btn">Показать еще 5 билетов</div>
</template>

<script setup>
import {computed, reactive} from 'vue';
import Sort from "@/components/filter/Sort.vue";
import Ticket from "@/components/content/Ticket.vue";
import ticketFilter from "@/filters/ticketFilter";
import {useTicketsStore} from '@/stores/tickets';
import {useFilterStore} from '@/stores/filter';

const store = useTicketsStore();
const filterStore = useFilterStore();

store.getTickets();

const tickets = store.tickets;
const {filter} = ticketFilter();
const sort = (data) => {
    console.log('test');
};
const sorted = (data) => {
    if (filterStore.sort?.sort) {
        return data.sort(filterStore.sort.sort);
    }
    return data;
    //return data.sort(filterStore.sort);
}
</script>

<style scoped>

</style>