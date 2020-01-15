<template lang="pug">
  .slide(ref="slideDom")
    .line
      | 这就是传说中的
    .line
      | 高桥流
    .line
      | takahashi
</template>

<script>
export default {
  name: 'slide',

  mounted() {
    const slideDom = this.$refs.slideDom
    const innerWidth = window.innerWidth
    const innerHeight = window.innerHeight

    // https://github.com/kuitos/takahashi-slides/blob/gh-pages/index.js#L254
    Array
      .from(slideDom.children)
      .forEach(line => {
        line.style.fontSize = '1rem'
        line.style.fontSize = `${innerWidth / line.scrollWidth / 2}rem`
      })

    const scale = Math.min(innerHeight / slideDom.clientHeight, innerWidth / slideDom.clientWidth)
		slideDom.style.transform = `scale(${scale * 0.77}) `
  }
};
</script>

<style lang="stylus" scoped>
  .slide
    font-size 16px

  .line
    width: fit-content;
</style>
