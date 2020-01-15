<template lang="pug">
  .ppt
    slide(:content="content" :key="slideIndex")
</template>

<script>
import Slide from "./Slide";
import bus from "./bus";

export default {
  name: "ppt",
  components: {
    Slide
  },
  data() {
    return bus;
  },
  computed: {
    content() {
      return window.__PPT__[this.slideIndex];
    }
  },
  methods: {
    nextSlide() {
      this.slideIndex += 1;
    },
    prevSlide() {
      this.slideIndex -= 1;
    },
    _keydownCallback(e) {
      const keyCode = e.keyCode;
      if (keyCode === 38 || keyCode === 37) {
        // ArrowUp | ArrowLeft
        if (this.slideIndex > 0) {
          this.prevSlide();
        }
      } else if (keyCode === 39 || keyCode === 40) {
        // ArrowDown | ArrowRight
        if (this.slideIndex < window.__PPT__.length - 1) {
          this.nextSlide();
        }
      }
    }
  },
  mounted() {
    window.addEventListener("keydown", this._keydownCallback);
  },
  destroyed() {
    window.removeEventListener("keydown", this._keydownCallback);
  }
};
</script>

<style lang="stylus">

.ppt
  position: relative;
  top: 48%;
  left: 50%;
  width: fit-content;
  transform: translate(-50%, -50%);

</style>
