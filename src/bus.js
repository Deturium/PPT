import Vue from 'vue'

const bus = new Vue({
  data: {
    slides: [],
    slideIndex: -7,
  },
  computed: {
    slideContent() {
      return this.slides[this.slideIndex];
    }
  },
  methods: {
    nextSlide(cb) {
      if (this.slideIndex < this.slides.length - 1) {
        this.slideIndex += 1;
        cb && cb();
      }
    },
    prevSlide(cb) {
      if (this.slideIndex > 0) {
        this.slideIndex -= 1;
        cb && cb();
      }
    },
  }
})

if (process.env.NODE_ENV !== 'production') {
  window.__PPT__ = bus
}

export default bus
