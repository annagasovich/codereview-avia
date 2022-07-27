<template>
  <div class="filter__controls filter-company__controls" v-for="item in data">
    <label :htmlFor="'radio' + name + item.value">
      <input
        type="radio"
        :name="name"
        :id="'radio' + name + item.value"
        value="item.value"
      />
      <span class="radio"></span>
      {{ item.label }}
    </label>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  name: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/colors";
label {
  display: flex;
  align-items: center;
  position: relative;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  input {
    margin-bottom: 0;
  }
  &:hover {
    .radio:before {
      border: 1px solid colors.$color-primary;
    }
  }
}

.radio {
  height: 25px;
  margin-right: 10px;
  padding-left: 28px;
  display: inline-block;
}

[type="radio"]:checked,
[type="radio"]:not(:checked) {
  display: none;
}
.radio:before {
  content: "";
  position: absolute;
  left: 0;
  width: 25px;
  height: 25px;
  border: 1px solid colors.$color-inactive;
  border-radius: 100%;
  background: #fff;
}
[type="radio"]:checked + .radio:before {
  border: 1px solid colors.$color-primary;
}
[type="radio"]:checked + .radio:after,
[type="radio"]:not(:checked) + .radio:after {
  content: "";
  width: 15px;
  height: 15px;
  background: colors.$color-primary;
  position: absolute;
  top: 5px;
  left: 5px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + .radio:after {
  opacity: 0;
}
[type="radio"]:checked + .radio:after {
  opacity: 1;
}
</style>
