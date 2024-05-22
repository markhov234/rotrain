import { defineStore } from 'pinia'

export const useTrainingQuestStore = defineStore('trainingQuestStore', {
  state: () => ({
    quests: [
      {
        id: 'task001',
        title: 'Morning Yoga',
        description: 'Complete a 15-minute yoga session.',
        dayOfWeek: 'Wednesday',
        time: '15 mins',
        difficulty: 'Easy',
        isQuestAccepted: false,
        isQuests: true,
        exercisesId: 'task002',
      },
      {
        id: 'task002',
        title: 'Afternoon Yoga',
        description: 'Complete a 15-minute yoga session.',
        dayOfWeek: 'Wednesday',
        time: '15 mins',
        difficulty: 'intermediate',
        isQuestAccepted: false,
        isQuests: true,
        exercisesId: 'task001',
      },
    ],
  }),
  actions: {
    acceptQuestById(questId) {
      const quest = this.quests.find((quest) => quest.id === questId)
      if (quest) {
        quest.isQuestAccepted = true
      }
    },
  },
  getters: {
    getQuestExercisesIdAndTimeById: (state) => (questId) => {
      const quest = state.quests.find((quest) => quest.id === questId)
      if (quest) {
        return { exercisesId: quest.exercisesId, time: quest.time }
      }
      return null // Return null if quest is not found
    },
  },
})
