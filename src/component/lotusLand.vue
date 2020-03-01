<template lang="pug">
img.lotusLand(:src="character")
</template>

<script>

import TouHouProject from '../asset/TouHouProject'

export default {
  name: 'lotusLand',
  data: function() {
    return {
      character: TouHouProject[~~(Math.random() * 10) % 3]
    }
  }
};
</script>

<style lang="stylus">
.lotusLand
  position fixed
  bottom 0
  right 0
  pointer-events none
</style>
