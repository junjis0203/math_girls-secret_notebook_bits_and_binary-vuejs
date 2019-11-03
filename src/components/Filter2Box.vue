<script>
export default {
  props: {
    name: String
  }
}
</script>

<template>
  <div class="filter2-wrapper">
    <div class="filter2-before" />
    <div class="filter2">
      {{ name }}
    </div>
    <div class="filter2-after" />
  </div>
</template>

<style scoped>
.filter2-wrapper {
  display: inline-block;
  vertical-align: middle;
  height: 210px;
}

.filter2 {
  vertical-align: middle;
  display: inline-block;
  border:  1px solid #000;
  padding: 90px 4px;
}

.filter2-before {
  vertical-align: middle;
  display: inline-block;
  width: 32px;
  height: 140px;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
}

.filter2-after {
  vertical-align: middle;
  display: inline-block;
  width: 32px;
  border: 1px solid #000;
}
</style>
