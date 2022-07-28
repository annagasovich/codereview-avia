import { defineStore } from "pinia";
import http from "@/services/http";

export const useTicketsStore = defineStore({
  id: "tickets",
  state: () => ({
    ticketsRaw: [],
    companies: [],
  }),
  getters: {
    tickets: (state) => {
      return state.ticketsRaw.map((el) => {
        let res = el.info;
        res.price = el.price;
        res.company = state.companies.find(
          (company) => el.companyId === company.id
        );
        res.company_id = res.company.id;
        res.logo = "@/assets/img/company/" + res.company?.name + ".svg";
        return res;
      });
    },
    citiesTo: (state) => {
      let cities = [];
      state.ticketsRaw.map((el) => {
        if(!cities.includes(el.info.destination)){
          cities.push(el.info.destination);
        }
      })
      return cities;
    },
    citiesFrom: (state) => {
      let cities = [];
      state.ticketsRaw.map((el) => {
        if(!cities.includes(el.info.origin)){
          cities.push(el.info.origin);
        }
      })
      return cities;
    }
  },
  actions: {
    async getCompanies() {
      let data = await http().get("/a1b1c28b32d9785bb26c");
      this.companies = data.data;
    },
    async getTickets() {
      let data = await http().get("/163b5e66df9f2741243e");
      this.ticketsRaw = data.data;
    },
  },
});
