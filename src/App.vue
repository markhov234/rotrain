<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="disappear" @before-enter="beforeEnter" @enter="enter" @leave="leave">
        <component :is="Component" />
      </transition>
      <div class="background"></div>
    </router-view>

    <ProfileBanner />
    <MenuMain />
  </div>
</template>

<script>
import MenuMain from "@/components/Organisms/MenuMain.vue";
import ProfileBanner from "@/components/Organisms/ProfileBanner.vue";

export default {
  name: "App",
  components: {
    MenuMain,
    ProfileBanner
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      setTimeout(() => {
        el.style.transition = "opacity 0.5s";
        el.style.opacity = 1;
        done();
      });
    },
    leave(el, done) {
      el.style.transition = "opacity 0.5s";
      el.style.opacity = 0;
      setTimeout(done, 500);
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/styles.scss";

.disappear-enter-active,
.disappear-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}

.disappear-enter,
.disappear-leave-to {
  opacity: 0;
}
</style>