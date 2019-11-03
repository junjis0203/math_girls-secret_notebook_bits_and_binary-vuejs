<script>
export default {
  props: {
    x: Number,
    y: Number,
    value: Number
  },
  computed: {
    classObject() {
      return {
        'pixel-black': this.value == 1,
        'pixel-white': this.value == 0
      }
    }
  },
  methods: {
    handleClick() {
      const event = {
        x: this.x,
        y: this.y
      };
      this.$emit('click', event);
    }
  }
};
</script>

<template>
  <span
    class="pixel"
    v-bind:class="classObject"
    v-on:click="handleClick"
  ></span>
</template>

<style scoped>
.pixel {
  display: inline-block;
  width:  6px;
  height: 6px;
  border: 1px solid #808080;
}

.pixel-black {
  background-color: black;
}

.pixel-white {
  background-color: white;
}
</style>
