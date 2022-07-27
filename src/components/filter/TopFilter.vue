<template>
  <div class="top-filter">
    <VSelect
      :items="store.citiesFrom"
      :placeholder="'Откуда'"
      :className="'top-filter__input'"
      @input="setFilter('origin', $event)"
    ></VSelect>
    <span class="swap">
      <img src="@/assets/img/swap.svg" alt="" />
    </span>
    <VSelect
      :items="store.citiesFrom"
      :placeholder="'Куда'"
      :className="'top-filter__input top-filter__input__extra_margin'"
      @input="setFilter('destination', $event)"
    ></VSelect>
    <Datepicker v-model="dateStart" placeholder="Когда" :format="'yyyy/MM/dd'" @update:modelValue="setFilter('dateStart', $event.getTime())"></Datepicker>
    <Datepicker v-model="dateEnd" placeholder="Обратно" @update:modelValue="setFilter('dateEnd', $event.getTime())"></Datepicker>
  </div>
</template>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import { useTicketsStore } from "@/stores/tickets";
import { useFilterStore } from "@/stores/filter";
import VSelect from "@/components/controls/VSelect.vue";
import {ref} from "vue";
const store = useTicketsStore();
const filter = useFilterStore();

const dateStart = ref(null);
const dateEnd = ref(null);

const setFilter = (param, ev) => {
  console.log(ev);
  filter.where({ name: param, value: ev });
};
</script>

<style lang="scss">
.top-filter {
  display: flex;
  width: 100%;
  gap: 2px;
  input[type="text"],
  .custom-select,
  .dp__main {
    position: relative;
    padding: 20px 13px;
    border-radius: 0px;
    border: none;
    font-size: 15px;
    line-height: 20px;
    min-height: 60px;
    &.top-filter__input__extra_margin {
      padding-left: 20px;
    }
    &.top-filter__input__date {
    }
  }
  .dp__main {
    width: 100%;
    margin: 0;
    padding: 0;
    input {
      border-radius: 0px;
      border: none;
      background-repeat: no-repeat;
      background-image: url("@/assets/img/date.svg");
      background-position-x: calc(100% - 20px);
      background-position-y: 50%;
      font-size: 15px;
      line-height: 20px;
      padding: 20px 13px;
      min-height: 60px;
      max-width: 100%;
    }
    .dp__icon {
      display: none;
    }
    .dp__input_wrap {
      box-sizing: inherit;
    }
  }
  .swap {
    position: absolute;
    width: 26px;
    left: 25%;
    transform: translate(20%, 50%);
    z-index: 10;
    img {
      width: 100%;
    }
  }
}
</style>
