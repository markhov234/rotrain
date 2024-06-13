<template>
  <div :class="['card-button', { 'accepted': questAccepted }]" @click="acceptQuest(questId)">
    <TitleMain :title-main="updatedCardTitleMainProps" />
  </div>
  <Transition name="slide-fade" appear>
    <QuestAcceptedPopUp v-if="questAccepted" :quest-link-time="questLinkTime" />
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
.slide-fade-enter-active {
  animation: slide-fade-enter 0.5s ease-out;
}

@keyframes slide-fade-enter {
  0% {
    transform: translateX(120%);
    opacity: 0;
  }

  50% {
    transform: translateX(-5%);
    opacity: 1;
  }

  70% {
    transform: translateX(0);
  }

  85% {
    transform: translateX(-2%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>