<script>
import Fig from './Fig';
import { mapState, mapMutations } from 'vuex';

export default {
  props: {
    tag: String
  },
  components: { Fig },
  computed: mapState({
    lines(state) {
      return state.pool[this.tag];
    }
  }),
  methods: {
    handleClick(e) {
      const payload = {
        tag: this.tag,
        x: e.x,
        y: e.y
      }
      this.$store.commit('toggle', payload);
    }
  }
}
</script>

<template>
  <fig v-bind:lines="lines" v-on:click="handleClick" />
</template>
