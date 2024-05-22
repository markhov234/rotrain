<template>
  <p :class="['card-friends-title']"><span class="card-friends-title-lvl">{{ lvl }}</span> {{ username }}</p>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    lvl: {
      type: String,
      required: false,
    },
  },
  computed: {
  },
};
</script>

<style lang="scss"></style>
