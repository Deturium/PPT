<template lang="pug">
.slide(ref="slideDom")
  p(v-for="line in lines" v-html="line")
</template>

<script>
import { scaleFont } from './util'

export default {
  name: 'slide',
  props: [
    'content',
  ],
  computed: {
    lines() {
      return (this.content || '')
        .split('\n\n')
        .map(l => l.trim())
        .filter(l => l)
    }
  },
  methods: {
    _scaleFont() {
      scaleFont(this.$refs.slideDom)
    }
  },
  mounted() {
    this._scaleFont()
    window.addEventListener('resize', this._scaleFont)
  },
  destroyed() {
    window.removeEventListener('resize', this._scaleFont)
  }
};
</script>

<style lang="stylus">
.slide
  font-size 16px
  color: var(--ppt-second-color);

  >*
    margin 0
    width fit-content

  b
    color: var(--ppt-primary-color);

  strong
    color var(--ppt-highlight-color);

  p, div
    white-space pre-wrap

  ol, ul
    white-space normal
    margin: .5em 0
    margin-left: .7em
    padding-left: .6em

  a
    color: var(--ppt-primary-color);
    text-decoration: none;

  a:hover
    text-decoration: underline;

</style>
