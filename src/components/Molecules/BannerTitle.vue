<template>
  <div :class="['bannerTitle', variant]">
    <TitleMain :title-main="titleMainProps" />
  </div>
</template>

<script>
import TitleMain from "../Atoms/TitleMain.vue";

export default {
  components: {
    TitleMain,
  },
  props: {
    variant: {
      type: String,
      required: true,
    },
    titleMainProps: {
      type: Object,
      required: true,
    },
  },
  //   data() {
  //     return {
  //       titleMainProps: {
  //         headingLevel: "h1",
  //         text: "Home",
  //         variant: "main",
  //         strokeColor: "black",
  //       },
  //     };
  //   },
};
</script>
<style lang="scss">
@import "../../assets/scss/molecules/bannerTitle.scss";
</style>
