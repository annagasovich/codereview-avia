import { defineStore } from 'pinia';
import http from '@/services/http';

export const useTicketsStore = defineStore({
    id: 'tickets',
    state: () => ({
        ticketsRaw: [],
        companies: []
    }),
    getters: {
        tickets: (state) => {
            return state.ticketsRaw.slice(0,5).map((el) => {
                let res = el.info;
                res.price = el.price;
                res.company = state.companies.find((company) => el.companyId === company.id);
                res.logo = new URL('@/assets/img/company/' + res.company?.name + '.svg', import.meta.url).href;
                return res;
            })
        }
    },
    actions: {
        async getCompanies() {
            let data = await http().get('/a1b1c28b32d9785bb26c');
            this.companies = data.data;
        },
        async getTickets() {
            let data = await http().get('/163b5e66df9f2741243e');
            this.ticketsRaw = data.data;
        }
    }
})