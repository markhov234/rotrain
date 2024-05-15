<template>
  <BannerTitle :titleMainProps="homeBanner" variant="long" />
  <SectionCard :bannerInfo="questBanner" :responsePiniaObject="trainingQuestObject" variantSide="left" />
  <SectionCard :bannerInfo="newsBanner" :responsePiniaObject="newsObject" variantSide="right" />
  <SectionCard :bannerInfo="shopBanner" :responsePiniaObject="newsObject" variantSide="left" />
</template>

<script>
import BannerTitle from "./Molecules/BannerTitle.vue";
import SectionCard from "./Templates/SectionCard.vue";
export default {
  props: {
    newsObject: Object,
    bannersObject: Object,
    trainingQuestObject: Object,
  },
  data() {
    return {
      titleMainProps: {
        headingLevel: "h1",
        text: "Home",
        variant: "main title",
        strokeColor: "black",
      },
      titleSecondaryProps: {
        headingLevel: "h2",
        text: "News",
        variant: "left title",
        strokeColor: "black",
      },
    };
  },
  computed: {
    // Compute the banner object for the home page
    homeBanner() {
      return this.bannersObject.getBannerByText("Home");
    },
    // Compute the banner object for the news page
    newsBanner() {
      return this.bannersObject.getBannerByText("News");
    },
    // Compute the banner object for the shop page
    shopBanner() {
      return this.bannersObject.getBannerByText("Shop");
    },
    questBanner() {
      return this.bannersObject.getBannerByText("Daily Quests");
    },
  },
  setup() {
  },
  components: {
    BannerTitle,
    SectionCard,
  },
};
</script>
