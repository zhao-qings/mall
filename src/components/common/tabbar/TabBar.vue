<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar'
}
</script>

<style scoped>
#tab-bar{
  height: 49px;
  background-color: #f6f6f6;

  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  box-shadow: 0 -1px 2px rgba(100, 100, 100, .2);

  font-size: 14px;
}
</style>