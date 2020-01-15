import Vue from 'vue'
import ppt from '../ppt/takahashi.md'

export default new Vue({
  data: {
    /** 当前 PPT 下标 */
    slideIndex: 0,
  }
})

window.__PPT__ = ppt.split('<hr>').map(t => t.trim())
