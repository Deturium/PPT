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
      return this.ppt[this.slideIndex];
    }
  },
  methods: {
    nextSlide() {
      this.slideIndex += 1;
      window.location.hash = this.slideIndex
    },
    prevSlide() {
      this.slideIndex -= 1;
      window.location.hash = this.slideIndex
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
        if (this.slideIndex < this.ppt.length - 1) {
          this.nextSlide();
        }
      }
    }
  },
  mounted() {
    let hashIndex = parseInt(window.location.hash.slice(1), 10)
    if (!(hashIndex >= 0 && hashIndex < this.ppt.length)) {
      hashIndex = 0
    }

    window.location.hash = this.slideIndex = hashIndex
    window.addEventListener("keydown", this._keydownCallback);

    const url = `/ppt${window.location.pathname}.md`

    fetch(url)
      .then(r => r.text())
      .then(t => {
        this.ppt = t.split(/[-]{3,40}/)
      })
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
