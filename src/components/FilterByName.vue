<template>
  <div class="search">
        <input 
            type="text"
            placeholder="Search by name"
            v-model="name"
            @keyup="filter()"
        >
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
    setup() {
        const name = ref('')
        const store = useStore()
        const filter = () => {
            store.dispatch('filterByName', name.value)
        }
        return {
            name,
            filter
        }
    }
}
</script>

<style lang="scss">
    .search {
        width: 100%;
        margin: 3rem auto 0;
        input {
            height: 53px;
            width: 100%;            
            border-radius: 10px;
            padding: 0 0.5rem;
            outline: none;
            border: none;
            font-size: 1em;
        }
        input:hover {
            box-shadow: 3px 3px 10px rgb(93, 118, 128);
        }
    }
</style>