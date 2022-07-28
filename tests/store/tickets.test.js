import { test, expect } from "vitest";
import { setActivePinia, createPinia } from 'pinia'
import { useTicketsStore} from "@/stores/tickets";

test("test sort", () => {
    setActivePinia(createPinia());
    const store = useTicketsStore();
    store.getCompanies().then(() => {
        expect(store.companies.length).toBeGreaterThan(0);
        expect(store.companies[0]).toMatch({id: 'id', logo: 'logo', name: 'name'});
    })
});
