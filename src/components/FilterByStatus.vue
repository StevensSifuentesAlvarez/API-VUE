<template>
  <div class="filter">
      <div class="item" @click="filter('')">All</div>
      <div class="item" @click="filter('Alive')">Alive</div>
      <div class="item" @click="filter('Dead')">Dead</div>
      <div class="item" @click="filter('unknown')">Unknown</div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  setup(){
    const store = useStore();
    const filter = ((status) => {
      store.dispatch('filterByStatus', status)
      
    })
    return {
      filter
    }
  },
}

</script>

<style lang="scss">
  .filter {
    width: 400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-radius: 10px;
    overflow: hidden;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    .item {
      padding: 1rem 0.5rem;
      background-color: var(--background-card);
      text-align: center;
      cursor: pointer;
      &:hover {
        color: var(--text-teal);
      }
    }
    .active {
      color: var(--text-teal);
    }
  }
  @media screen and (min-width: 600px){
    .filter {
      width: 600px;
    }
  }
</style>