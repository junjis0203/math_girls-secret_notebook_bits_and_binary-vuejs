<script>
export default {
  props: {
    name: String
  }
}
</script>

<template>
  <div class="filter-wrapper">
    <div class="filter-before" />
    <div class="filter">
      {{ name }}
    </div>
    <div class="filter-after" />
  </div>
</template>

<style scoped>
.filter-wrapper {
  display: inline-block;
}

.filter {
  display: inline-block;
  border:  1px solid #000;
  padding: 4px;
  min-width: 64px;
  text-align: center;
}

.filter-before {
  display: inline-block;
  width: 32px;
  position: relative;
  top: -2px;
  border:  1px solid #000;
}

.filter-after {
  display: inline-block;
  width: 32px;
  position: relative;
  top: -2px;
  border:  1px solid #000;
}
</style>
