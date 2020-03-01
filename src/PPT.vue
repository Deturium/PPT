<template lang="pug">
.ppt-root
  .ppt
    slide(:content="slideContent" :key="slideIndex")
</template>

<script>
import Slide from "./render";
import bus from "./bus";

export default {
  name: "ppt",
  components: {
    Slide
  },
  data() {
    return bus;
  },
  methods: {
    _keydownCallback(e) {
      const keyCode = e.keyCode;
      const cb = () => (window.location.hash = this.slideIndex);

      if (keyCode === 38 || keyCode === 37) {
        // ArrowUp | ArrowLeft
        this.prevSlide(cb);
      } else if (keyCode === 39 || keyCode === 40) {
        // ArrowDown | ArrowRight
        this.nextSlide(cb);
      }
    },

    _initSlides() {
      const pptName = window.location.pathname.slice(1)
      const url = `/ppt/${pptName}.html`;

      fetch(url)
        .then(r => r.text())
        .then(t => {

          // 404 到了 index.html
          if (t.startsWith('<!DOCTYPE html>')) {
            this.slides = [
              `
              Can't found <b>${pptName}</b>\nPlease check your URL
              `
            ]
            this.slideIndex = 0;
            return
          }

          this.slides = t.split(/[-]{3,40}/);

          // init slideIndex
          let hashIndex = parseInt(window.location.hash.slice(1), 10);
          if (hashIndex < 0) {
            hashIndex = 0;
          }
          if (hashIndex >= this.slides.length) {
            hashIndex = this.slides.length - 1
          }
          window.location.hash = this.slideIndex = hashIndex;
        })
    }
  },
  mounted() {
    this._initSlides()
    window.addEventListener("keydown", this._keydownCallback);
  },
  destroyed() {
    window.removeEventListener("keydown", this._keydownCallback);
  }
};
</script>

<style lang="stylus">
.ppt-root
  position: fixed
  left: 5%
  right: 5%
  top: 5%;
  bottom: 5%


.ppt
  position: relative
  top: 48%
  left: 50%
  width: fit-content
  transform: translate(-50%, -50%)
</style>
