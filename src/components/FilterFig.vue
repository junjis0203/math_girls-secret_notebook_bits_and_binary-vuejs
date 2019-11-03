<script>
import FilterBox from './FilterBox';
import Fig from './Fig';
import { mapState } from 'vuex';

export default {
  props: {
    in_tag: String,
    func: Function,
    out_tag: String
  },
  computed: {
    name() {
      return this.func.name.toUpperCase()
    },
    ...mapState({
      lines(state) {
        const input = state.pool[this.in_tag];
        if (!input) {
          return [[]];
        }
        const output = this.func(input);
        if (this.out_tag) {
          const payload = {
            tag: this.out_tag,
            lines: output
          };
          this.$store.commit('register', payload);
        }
        return output;
      }
    })
  },
  components: { FilterBox, Fig },
}
</script>

<template>
  <span>
    <slot />
    <filter-box v-bind:name="name" />
    <fig v-bind:lines="lines" />
  </span>
</template>
