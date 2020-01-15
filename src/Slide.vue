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
    slideDom.style.transform = `scale(${scale * 0.74}) `
}

export default {
  name: 'slide',
  props: [
    'content',
  ],
  methods: {
    scaleFont() {
      scaleFont(this.$refs.slideDom)
    }
  },
  mounted() {
    this.scaleFont()
    window.addEventListener('resize', this.scaleFont)
  },
  destroyed() {
    window.removeEventListener('resize', this.scaleFont)
  }
};
</script>

<style lang="stylus">
  .slide
    font-size 16px
    text-align center

    >*
      margin 0
      width fit-content

    p, div
      white-space pre-wrap
      text-align center

    ol, ul
      padding-left: .7em;
      margin: 0.4em 0;

    a
      color: #3f51b5;
      text-decoration: none;

    a:hover
      text-decoration: underline;

</style>
