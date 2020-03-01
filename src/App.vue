<template lang="pug">
.backgroud
  ppt
  lotusLand
</template>

<script>
import PPT from './PPT'
import LotusLand from './component/lotusLand'
import * as Theme from './asset/theme'

export default {
  name: 'app',
  components: {
    ppt: PPT,
    lotusLand: LotusLand,
  },
  mounted() {
    const searchParams = new URLSearchParams(window.location.search)
    const theme = searchParams.get('theme')?.toLowerCase() || 'a'

    Object.entries(Theme[theme] || {}).forEach(([key, value]) => {
      document.body.style.setProperty(key, value)
    })
  }
};
</script>

<style lang="stylus">
  *
    box-sizing border-box

  html
    font-family: Noto Sans CJK SC, PingFang SC, Hiragino Sans GB

  body
    margin 0
    --ppt-background-color #111
    --ppt-primary-color #ccc
    --ppt-second-color #aaa
    --ppt-highlight-color #3f51b5

  .backgroud
    height 100vh
    background-color var(--ppt-background-color)
</style>
