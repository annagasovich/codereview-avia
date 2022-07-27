<template>
  <div class="container">
    <header>
      <img src="@/assets/img/logo.svg" alt="">
    </header>
    <TopFilter/>
    <main>
      <div class="row">
        <div class="column column-33">
          <Filter/>
        </div>
        <div class="column column-67">
          <Main/>
        </div>
      </div>
    </main>
  </div>

</template>

<script setup>
import Filter from "@/components/filter/Filter.vue"
import TopFilter from "@/components/filter/TopFilter.vue"
import Main from "@/components/content/Main.vue"
</script>

<style scoped>

</style>
