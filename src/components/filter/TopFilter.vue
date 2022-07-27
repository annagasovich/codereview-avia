<template>
  <div class="top-filter">
    <input
      type="text"
      name="from"
      placeholder="Откуда"
      class="top-filter__input"
    />
    <span class="swap">
      <img src="@/assets/img/swap.svg" alt="" />
    </span>
    <input
      type="text"
      name="from"
      placeholder="Куда"
      class="top-filter__input top-filter__input__extra_margin"
    />
    <Datepicker v-model="date" placeholder="Когда"></Datepicker>
    <Datepicker v-model="date" placeholder="Обратно"></Datepicker>
  </div>
</template>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
</script>

<style lang="scss">
.top-filter {
  display: flex;
  width: 100%;
  gap: 2px;
  input[type="text"],
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
