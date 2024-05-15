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
      },
      {
        id: 'task002',
        title: 'Afternoon Yoga',
        description: 'Complete a 15-minute yoga session.',
        dayOfWeek: 'Wednesday',
        time: '15 mins',
        difficulty: 'intermediate',
        isQuestAccepted: false,
      },
    ],
  }),
})
