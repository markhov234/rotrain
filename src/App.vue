<template>
  <router-view />
  <MenuMain />
</template>
<script>
import MenuMain from "@/components/Organisms/MenuMain.vue";
export default {
  name: "App",
  components: {
    MenuMain,
  },
};
</script>
<style lang="scss">
@import "./assets/scss/styles.scss";
</style>
