<script>
import Pixel from './Pixel';

export default {
  components: { Pixel },
  props: {
    lines: Array
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
}
</script>

<template>
  <div class="figure">
    <div
      v-for="(line, y) in lines"
      v-bind:key="y"
      class="pixel-line"
    >
      <pixel
        v-for="(value, x) in line"
        v-bind:key="x"
        v-bind:x="x"
        v-bind:y="y"
        v-bind:value="value"
        v-on:click="handleClick"
      ></pixel>
    </div>
  </div>
</template>

<style scoped>
.figure {
  display: inline-block;
  vertical-align: middle;
}

.pixel-line {
  line-height: 0;
}
</style>
