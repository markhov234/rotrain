<template>
  <div v-for="piniaItems in contentItems" :key="piniaItems.id" :class="['card-component', variant]">
    <TitleMain :cardTitle="piniaItems.title" :title-main="titleMainProps" />
    <div class="details">
      <DifficultySub v-if="piniaItems.isQuests" :difficultySub="piniaItems.difficulty"
        :cardTitleMainProps="buttonTitleMainProps" :cardTitleSubProps="buttonTitleSecondaryProps" variant="card" />
      <CardImage v-else variant="card" />
    </div>
    <CardButtonQuest v-if="piniaItems.isQuests" :questAccepted="piniaItems.isQuestAccepted" :questId="piniaItems.id"
      :cardTitleMainProps="titleButtonProps" />
    <CardButtonShop v-else :cardTitleMainProps="shopButtonProps" />
  </div>
</template>

<script>
// DO A NEW COMPONENT FOR THE LOWER PART OF THE CARD
import DifficultySub from "../Molecules/DifficultySub.vue";
import CardImage from "../Molecules/CardImage.vue";
import CardButtonQuest from "../Molecules/CardButtonQuest.vue";
import CardButtonShop from "../Molecules/CardButtonShop.vue";
import TitleMain from "../Atoms/TitleMain.vue";

export default {
  props: {
    variant: {
      type: String,
      required: true,
    },
    responsePiniaObject: {
      type: Object,
      required: false,
    },
  },
  computed: {
    contentItems() {
      // Determine which content type to use based on responsePiniaObject
      if (this.responsePiniaObject.news) {
        return this.responsePiniaObject.news;
      } else if (this.responsePiniaObject.shops) {
        return this.responsePiniaObject.shops;
      } else if (this.responsePiniaObject.quests) {
        return this.responsePiniaObject.quests;
      } else {
        // Return default content or handle case where no content is available
        return [];
      }
    },
  },
  data() {
    return {
      difficultySub: null,
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
        variant: "card",
        text: "Accept Quest",
        strokeColor: "black",
      },
      titleButtonProps: {
        headingLevel: "p",
        text: "Accept Quest",
        variant: "button",
        strokeColor: "black",
      },
      shopButtonProps: {
        headingLevel: "p",
        text: "Consult the shop",
        variant: "button-shop",
        strokeColor: "black",
      },
    };
  },
  components: {
    DifficultySub,
    CardButtonQuest,
    CardImage,
    TitleMain,
    CardButtonShop
  },
};
</script>
<style lang="scss">
@import "../../assets/scss/Organisms/CardComponent.scss";
</style>
