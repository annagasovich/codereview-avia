import { mount } from "@vue/test-utils";
import {test, expect} from "vitest";
import { setActivePinia, createPinia } from 'pinia';
import Main from "@/components/content/Main.vue"

test("idk", () => {
  setActivePinia(createPinia());
  const test = mount(Main);
  expect(test.html()).toContain("div");
  expect(test.find('.no-tickets').text()).toEqual("Билетов нет")
});