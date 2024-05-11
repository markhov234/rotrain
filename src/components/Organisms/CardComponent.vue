<template>
  <div :class="['card-component', variant]">
    <div class="details">
      <TitleMain :title-main="titleMainProps" />
      <DifficultySub
        :cardTitleMainProps="buttonTitleMainProps"
        :cardTitleSubProps="buttonTitleSecondaryProps"
        variant="card"
      />
    </div>
    <CardButton :cardTitleMainProps="titleButtonProps" />
  </div>
</template>

<script>
import DifficultySub from "../Molecules/DifficultySub.vue";
import CardButton from "../Molecules/CardButton.vue";
import TitleMain from "../Atoms/TitleMain.vue";

export default {
  props: {
    variant: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      buttonTitleMainProps: {
        headingLevel: "h4",
        text: "Difficulty",
        variant: "card",
        strokeColor: "black",
      },
      buttonTitleSecondaryProps: {
        headingLevel: "p",
        text: "Hard",
        variant: "card sub -hard",
        strokeColor: "black",
      },
      titleMainProps: {
        headingLevel: "h3",
        text: "Monday",
        variant: "card",
        strokeColor: "black",
      },
      titleButtonProps: {
        headingLevel: "p",
        text: "Accept Quest",
        variant: "button",
        strokeColor: "black",
      },
    };
  },
  components: {
    DifficultySub,
    CardButton,
    TitleMain,
  },
};
</script>
<style lang="scss">
@import "../../assets/scss/Organisms/CardComponent.scss";
</style>
