<script>
import VerticalLayout from './VerticalLayout';
import Filter2Box from './Filter2Box';
import Fig from './Fig';
import { mapState } from 'vuex';

export default {
  props: {
    in1_tag: String,
    in2_tag: String,
    func: Function,
    out_tag: String
  },
  computed: {
    name() {
      return this.func.name.toUpperCase()
    },
    ...mapState({
      lines(state) {
        const input1 = state.pool[this.in1_tag];
        const input2 = state.pool[this.in2_tag];
        if (!(input1 && input2)) {
          return [[]];
        }
        const output = this.func(input1, input2);
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
  components: { VerticalLayout, Filter2Box, Fig }
}
</script>

<template>
  <span>
    <vertical-layout>
      <slot />
    </vertical-layout>
    <filter2-box v-bind:name="name" />
    <fig v-bind:lines="lines" />
  </span>
</template>
