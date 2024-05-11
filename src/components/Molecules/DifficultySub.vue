<template>
  <div :class="['card-difficulty', variant]">
    <TitleMain :title-main="cardTitleMainProps" />
    <span class="details"
      ><img src="https://placehold.co/32x24" />
      <TitleMain :title-main="cardTitleSubProps"
    /></span>
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
    cardTitleMainProps: {
      type: Object,
      required: true,
    },
    cardTitleSubProps: {
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
