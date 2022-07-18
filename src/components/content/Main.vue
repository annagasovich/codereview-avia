<template>
    <Sort/>
    <div class="list">
        <Ticket v-for="item in tickets" :data="item"/>
    </div>
    <div class="btn">Показать еще 5 билетов</div>
</template>

<script setup>
import {computed} from 'vue';
import Sort from "@/components/filter/Sort.vue"
import Ticket from "@/components/content/Ticket.vue"
import {useTicketsStore} from '@/stores/tickets';

const store = useTicketsStore();
const tickets = computed(() =>
    store.tickets.map((el) => {
        let res = el.info;
        res.price = el.price;
        res.company = store.companies.find((company) => el.companyId === company.id);
        res.logo = res.company?.name + '.svg';
        return res;
    })
)
store.getTickets();

const data = {
    "stops": ["EKT", "EKT"],
    "origin": "HKG",
    "dateEnd": 1664574603624,
    "duration": 8880000,
    "dateStart": 1663451403624,
    "destination": "ARH",
    "price": 57400,
    "logo": "S7 Airlines.svg"
}
</script>

<style scoped>

</style>