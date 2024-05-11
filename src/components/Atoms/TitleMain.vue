<template>
  <component
    :is="headingLevel"
    :style="{ '-webkit-text-stroke-color': strokeColor, color: textColor }"
    :class="[variant, headingLevel]"
    >{{ text }}</component
  >
</template>

<script>
export default {
  props: {
    titleMain: {
      type: Object,
      required: true,
    },
  },
  computed: {
    headingLevel() {
      return this.titleMain.headingLevel;
    },
    text() {
      return this.titleMain.text;
    },
    variant() {
      return this.titleMain.variant;
    },
    strokeColor() {
      return this.titleMain.strokeColor;
    },
    textColor() {
      return this.titleMain.textColor;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/atoms/title.scss";
</style>
