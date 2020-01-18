import Vue from 'vue'

const bus = new Vue({
  data: {
    // ppt 内容
    ppt: [],
    // 下标
    slideIndex: 0,
  }
})

if (process.env.NODE_ENV !== 'production') {
  window.__PPT__ = bus
}

export default bus
