<template>
  <BannerTitle :titleMainProps="titleMainProps" variant="long" />
  <BannerTitle :titleMainProps="titleSecondaryProps" variant="short" />
  <CardComponent variant="small left" />
</template>

<script>
import BannerTitle from "./Molecules/BannerTitle.vue";
import CardComponent from "./Organisms/CardComponent.vue";
export default {
  props: {
    msg: String,
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
  components: {
    BannerTitle,
    CardComponent,
  },
};
</script>
