<template>
  <div :class="['card-button', variant]">
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
    variant: {
      type: String,
      required: true,
    },
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
