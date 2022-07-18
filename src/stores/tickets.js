import { defineStore } from 'pinia';
import http from '@/services/http';

export const useTicketsStore = defineStore({
    id: 'tickets',
    state: () => ({
        tickets: [],
        companies: []
    }),
    actions: {
        async getCompanies() {
            let data = await http().get('/a1b1c28b32d9785bb26c');
            this.companies = data.data;
        },
        async getTickets() {
            let data = await http().get('/163b5e66df9f2741243e');
            this.tickets = data.data.slice(0,5);
        }
    }
})