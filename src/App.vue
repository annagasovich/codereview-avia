<template>
  <div class="container">
    <header>
      <img src="@/assets/img/logo.svg" alt="">
    </header>

    <main>
      <div class="row">
        <div class="column column-33">
          <Filter/>
        </div>
        <div class="column column-67">
          <Sort/>
          <div class="list">
            <Ticket :data="data"/>
            <Ticket :data="data"/>
            <Ticket :data="data"/>
          </div>
        </div>
      </div>
    </main>
  </div>

</template>

<script setup>
import Ticket from "@/components/content/Ticket.vue"
import Filter from "@/components/filter/Filter.vue"
import Sort from "@/components/filter/Sort.vue"

const data = {
  "stops": ["EKT", "EKT"],
  "origin": "HKG",
  "dateEnd": 1664574603624,
  "duration": 8880000,
  "dateStart": 1663451403624,
  "destination": "ARH",
  "price": 57400,
  "logo": "S7 Airlines.svg"
}
</script>

<style scoped>

</style>
