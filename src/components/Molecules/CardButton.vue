<template>
  <div :class="['card-button']">
    <TitleMain :title-main="cardTitleMainProps" />
  </div>
</template>

<script>
import TitleMain from "../Atoms/TitleMain.vue";

export default {
  components: {
    TitleMain,
  },
  props: {
    cardTitleMainProps: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">
@import "../../assets/scss/molecules/bannerTitle.scss";
</style>
