<template lang="pug">
.backgroud

    ppt
</template>

<script>
import PPT from './PPT'

export default {
  name: 'app',
  components: {
    ppt: PPT,
  },
};
</script>

<style lang="stylus">
  *
    box-sizing border-box

  html
    font-family: Noto Sans CJK SC, PingFang SC, Hiragino Sans GB

  body
    margin 0

  .backgroud
    height 100vh
    color #ccc
    background-color #111
</style>
