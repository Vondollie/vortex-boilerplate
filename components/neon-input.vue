<template>
  <label class="n-input">
    <input
      :value="value"
      :type="type"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </label>
</template>

<script>
export default {
  name: 'NeonInput',
  props: {
    placeholder: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: String,
    },
    value: {
      required: true,
      type: String,
    },
  },
}
</script>

<style lang="less" scoped>
.n-input {
  position: relative;
  display: inline-block;
  overflow: hidden;

  span {
    position: absolute;
    display: block;

    &:nth-child(2) {
      top: 0;
      left: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #2196f3);
    }
    &:nth-child(3) {
      top: -100%;
      right: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(180deg, transparent, #2196f3);
    }
    &:nth-child(4) {
      bottom: 0;
      right: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(270deg, transparent, #2196f3);
    }
    &:nth-child(5) {
      bottom: -100%;
      left: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(360deg, transparent, #2196f3);
    }
  }

  input {
    padding: 15px 30px;
    color: #2196f3;
    text-transform: uppercase;
    outline: none;
    border: solid 2px transparent;
    transition: 0.2s;
    &:focus {
      transition-delay: 0.75s;
      border-color: #2196f3;
      // box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
      ~ span {
        &:nth-child(2) {
          left: 100%;
          transition: 0.5s;
        }
        &:nth-child(3) {
          top: 100%;
          transition: 0.5s;
          transition-delay: 0.125s;
        }
        &:nth-child(4) {
          right: 100%;
          transition: 0.5s;
          transition-delay: 0.25s;
        }
        &:nth-child(5) {
          bottom: 100%;
          transition: 0.5s;
          transition-delay: 0.375s;
        }
      }
    }
  }
}
</style>
