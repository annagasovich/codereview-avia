<template>
  <div class="custom-select" :class="className" @focusout="open = false" tabindex="0" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of items"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
  },
  className: {
    type: String,
    default: ''
  },
});

const emit = defineEmits(['input'])
const open = ref(false);

const selected = ref(props.placeholder);
</script>

<style scoped lang="scss">
@use "@/assets/colors";
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
}

.custom-select .selected {
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.custom-select .items {
  background-color: white;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  padding: 20px;
  border-bottom: 1px solid colors.$color-primary;
  cursor: pointer;
  user-select: none;
  &:hover{
    background-color: colors.$color-hover;
  }
}

.selectHide {
  display: none;
}
</style>
