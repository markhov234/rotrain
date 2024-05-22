<template>
  <div :class="['card-button', { 'accepted': this.questAccepted }]" @click="acceptQuest(this.questId)">
    <TitleMain :title-main="updatedCardTitleMainProps" />
  </div>
  <Transition name="slide-fade" appear>
    <QuestAcceptedPopUp v-if="questAccepted" :questLinkTime="questLinkTime" />
  </Transition>
</template>

<script>
import TitleMain from "../Atoms/TitleMain.vue";
import QuestAcceptedPopUp from "./QuestAcceptedPopUp.vue";
import { useTrainingQuestStore } from "@/store/modules/TrainingQuestStore";
// import { Transition } from "vue";
export default {
  components: {
    TitleMain,
    QuestAcceptedPopUp
  },
  props: {
    questId: {
      type: String,
      required: true,
    },
    cardTitleMainProps: {
      type: Object,
      required: true,
    },
    questAccepted: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    updatedCardTitleMainProps() {
      return {
        ...this.cardTitleMainProps,
        text: this.questAccepted ? "Accepted" : this.cardTitleMainProps.text
      };

    },
    questLinkTime() {
      if (this.questAccepted) {
        const store = useTrainingQuestStore();
        const questInfo = store.getQuestExercisesIdAndTimeById(this.questId);
        return questInfo ? questInfo : {};
      }
      return {};
    }
  },
  methods: {
    acceptQuest(argQuestId) {
      const store = useTrainingQuestStore();
      store.acceptQuestById(argQuestId);
    },
  },
};
</script>
<style lang="scss">
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>