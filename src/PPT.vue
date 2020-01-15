<template lang="pug">
  .ppt
    slide
</template>

<script>
import Slide from './Slide'

export default {
  name: 'ppt',
  components: {
    Slide,
  },
};
</script>

<style lang="stylus" scoped>

.ppt
  position: relative;
  top: 48%;
  left: 50%;
  width: fit-content;
  transform: translate(-50%, -50%);
</style>
