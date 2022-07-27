import { defineStore } from 'pinia';
import http from '@/services/http';

export const useFilterStore = defineStore({
    id: 'filter',
    state: () => ({
        sort: null,
        conditions: []
    }),
    actions: {
        orderBy(sort) {
            this.sort = sort;
        },
        async where(condition) {
            let data = await http().get('/163b5e66df9f2741243e');
            this.tickets = data.data.slice(0,5);
        }
    }
})