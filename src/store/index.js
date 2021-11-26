import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],  //Todos los datos en general
    charactersFilter: [] // para filtrar
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload
    }
  },
  actions: {
    // Para realizar la petición a la API
    async getCharacters({commit}) {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const { results } = await response.json()
        commit('setCharacters', results)
        commit('setCharactersFilter', results)
      } catch (error) {
        console.error(error);
      }
    },
    // Para realizar el filtro según el estado
    filterByStatus({commit, state}, status) {
      const filter = state.characters.filter((character) => {
        return character.status.includes(status)
      })
      commit('setCharactersFilter', filter)
    },
    // Para realizar el filtro de la barra de búsqueda según el nombre
    filterByName({commit, state}, name) {
      const formatName = name.toLowerCase();
      const filter = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase();
        if (characterName.includes(formatName)) return character;
      })
      commit('setCharactersFilter', filter)
    }
  },
  modules: {
  }
})