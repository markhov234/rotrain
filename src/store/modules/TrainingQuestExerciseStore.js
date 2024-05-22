import { defineStore } from 'pinia'

export const useTrainingQuestExerciseStore = defineStore(
  'trainingQuestExerciseStore',
  {
    state: () => ({
      exercises: {
        task001: [
          {
            id: 'exercise001',
            name: 'Push-ups',
            sets: 3,
            repetitions: 10,
            completed: false,
            experiencePoints: 50,
          },
          {
            id: 'exercise002',
            name: 'Push-ups',
            sets: 3,
            repetitions: 10,
            completed: false,
            experiencePoints: 50,
          },
          // Add more exercises for task001
        ],
        task002: [
          {
            id: 'exercise002',
            name: 'Squats',
            sets: 3,
            repetitions: 15,
            completed: false,
            experiencePoints: 75,
          },
          {
            id: 'exercise001',
            name: 'Push-ups',
            sets: 3,
            repetitions: 10,
            completed: false,
            experiencePoints: 50,
          },
          // Add more exercises for task002
        ],
        // Add more tasks with their associated exercises
      },
    }),
    actions: {
      // Add actions to update exercise completion status, etc.
      acceptQuestExerciseById(taskId, exerciseId) {
        const exercises = this.exercises[taskId]
        if (exercises) {
          const exercise = exercises.find(
            (exercise) => exercise.id === exerciseId
          )
          if (exercise) {
            exercise.completed = true
          }
        }
      },
    },
    getters: {
      getExercisesByQuestId: (state) => (taskId) => {
        return state.exercises[taskId] || []
      },
    },
  }
)
