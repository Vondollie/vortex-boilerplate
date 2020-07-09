<template>
  <button class="n-button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'NeonButton',
}
</script>

<style lang="less" scoped>
.n-button {
  position: relative;
  display: inline-block;
  overflow: hidden;
  padding: 15px 30px;
  color: #2196f3;
  text-transform: uppercase;
  outline: none;
  transition: 0.2s;

  &:hover {
    color: #fff;
    background: #2196f3;
    box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
  }
}
</style>
