<script setup>
</script>

<template>
  <div class="container">
    <header>
      <img src="@/assets/img/logo.svg" alt="">
    </header>

    <main>
      <div class="row">
        <div class="column column-33">
          <div class="filter">
            <div class="filter-count">
              <div class="filter-count__name">Количество пересадок</div>
              <div class="filter-count__controls">
                <label class="checkbox-container">One
                  <input type="checkbox" checked="checked">
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div class="filter-company">
              <div class="filter-company__name">Компания</div>
              <div class="filter-company__controls">
                <label for=""><input type="radio" name="" id="">Test</label>
              </div>
            </div>
          </div>
        </div>
        <div class="column column-67">
          <div class="sort">
              <div class="column column-33 active">Самый дешевый</div>
              <div class="column column-33">Самый быстрый</div>
              <div class="column column-33">Оптимальный</div>
           </div>
          <div class="list">
            <div class="item">
              <div class="item-main">
                <div class="item-main__price">13 400 Р</div>
                <div class="item-main__logo"><img src="@/assets/img/company/1.svg" alt=""></div>
              </div>
              <div class="item-info">
                <div class="row">
                  <div class="column column-33">
                    <div class="item-info__name">MOW – HKT</div>
                    <div class="item-info__data">10:45 – 08:00</div>
                  </div>
                  <div class="column column-33">
                    <div class="item-info__name">В пути</div>
                    <div class="item-info__data">21ч 15м</div>
                  </div>
                  <div class="column column-33">
                    <div class="item-info__name">Без пересадок</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>

</template>

<style scoped>

</style>
