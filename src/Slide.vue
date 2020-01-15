<template lang="pug">
  .slide(ref="slideDom" v-html="content")
</template>

<script>

// https://github.com/kuitos/takahashi-slides/blob/gh-pages/index.js#L254
function scaleFont(slideDom) {
    const innerWidth = window.innerWidth
    const innerHeight = window.innerHeight

    Array
      .from(slideDom.children)
      .forEach(line => {
        line.style.fontSize = '1rem'
        line.style.fontSize = `${innerWidth / line.scrollWidth / 2}rem`
      })

    const scale = Math.min(innerHeight / slideDom.clientHeight, innerWidth / slideDom.clientWidth)
    slideDom.style.transform = `scale(${scale * 0.77}) `
}

export default {
  name: 'slide',
  props: [
    'content',
  ],
  mounted() {
    scaleFont(this.$refs.slideDom)
  },
};
</script>

<style lang="stylus">
  .slide
    font-size 16px
    white-space pre-wrap
    text-align center

    >p
      margin 0
      width fit-content
</style>
