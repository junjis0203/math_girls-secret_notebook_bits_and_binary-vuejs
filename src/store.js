import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function makeStore(pool) {
  const store = new Vuex.Store({
    state: {
      pool: pool
    },
    mutations: {
      toggle(state, payload) {
        const lines = state.pool[payload.tag];
        const line = lines[payload.y];
        line[payload.x] = line[payload.x] == 0 ? 1 : 0;
        // Array update using Vue.set is required although Array is not state
        Vue.set(lines, payload.y, line);
        Vue.set(state.pool, payload.tag, lines);
      },
      register(state, payload) {
        Vue.set(state.pool, payload.tag, payload.lines);
      }
    }
  });
  return store;
}

export { makeStore };
