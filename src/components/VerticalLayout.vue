<script>
export default {
  render(createElement) {
    const wrappedSlots = this.$slots.default.map(s => createElement('div', {class: 'vertical-layout-child'}, [s]));
    return createElement('div', {class: 'vertical-layout'}, wrappedSlots);
  }
}
</script>

<style scoped>
.vertical-layout {
  display: inline-block;
  vertical-align: middle;
}

.vertical-layout-child {
  margin: 4px 0;
  text-align: right;
}
</style>
