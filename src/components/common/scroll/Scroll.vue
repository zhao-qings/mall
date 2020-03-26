<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: Number
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true, // 如果想要里面的div等标签可以点击，必须设置click为true
      probeType: this.probeType
    });

    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    }
  }
};
</script>

<style scoped>
</style>