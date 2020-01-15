import Vue from 'vue'

export default new Vue({
  data: {
    /** 当前 PPT 下标 */
    slideIndex: 0,
  }
})

import ppt from '../ppt/takahashi.md'
window.__PPT__ = ppt.split('<hr>').map(t => t.trim())
