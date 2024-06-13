import { defineStore } from 'pinia'

export const useAccountStore = defineStore('accountStore', {
  state: () => ({
    username: 'MarkHov',
    rolename: 'Intermediate',
    level: 45,
    experience: 38,
    questIdsAccepted: [],
    profileAvatarLarge: 1, // Defaulting to the first avatar for now
    profileAvatarSmall: 'avatar_small-card-01.png',
    avatars: [
      {
        id: 1,
        src: 'avatar_large-card-01.jpg',
        locked: false,
        questMoneyPrice: 50,
        paidMoneyPrice: 50,
      },
      {
        id: 2,
        src: 'avatar_large-card-02.jpg',
        locked: true,
        questMoneyPrice: 150,
        paidMoneyPrice: 50,
      },
      {
        id: 3,
        src: 'avatar_large-card-03.jpg',
        locked: true,
        questMoneyPrice: 250,
        paidMoneyPrice: 50,
      },
      {
        id: 4,
        src: 'avatar_large-card-03.jpg',
        locked: false,
        questMoneyPrice: 150,
        paidMoneyPrice: 50,
      },
      {
        id: 5,
        src: 'avatar_large-card-02.jpg',
        locked: true,
        questMoneyPrice: 50,
        paidMoneyPrice: 50,
      },
      {
        id: 6,
        src: 'avatar_large-card-01.jpg',
        locked: true,
        questMoneyPrice: 250,
        paidMoneyPrice: 50,
      },
      {
        id: 7,
        src: 'avatar_large-card-02.jpg',
        locked: true,
        questMoneyPrice: 250,
        paidMoneyPrice: 50,
      },
      {
        id: 8,
        src: 'avatar_large-card-03.jpg',
        locked: true,
        questMoneyPrice: 250,
        paidMoneyPrice: 50,
      },
      {
        id: 9,
        src: 'avatar_large-card-02.jpg',
        locked: false,
        questMoneyPrice: 250,
        paidMoneyPrice: 50,
      },
      {
        id: 10,
        src: 'avatar_large-card-01.jpg',
        locked: true,
        questMoneyPrice: 250,
        paidMoneyPrice: 50,
      },
      // Add more avatar objects as needed
    ],
    endurance: 100,
    health: 100,
    inventory: [], // Reference to inventory store
    paidMoney: 0,
    questMoney: 0,
    shopHistoryId: [], // Array to store IDs of shop history
  }),

  getters: {
    unlockedAvatars() {
      return this.avatars.filter((avatar) => !avatar.locked)
    },

    profileAvatarLargeSrc() {
      const avatar = this.avatars.find(
        (avatar) => avatar.id === this.profileAvatarLarge
      )
      return avatar ? avatar.src : '' // Return the src if avatar is found, otherwise return an empty string
    },
  },

  actions: {
    updateUsername(newUsername) {
      this.username = newUsername
    },

    updateRolename(newRolename) {
      this.rolename = newRolename
    },

    // Define actions to update account information
    // For example:
    updateLevel(newLevel) {
      this.level = newLevel
    },

    updateExperience(newExperience) {
      this.experience = newExperience
    },
    updateLargeImage(largeImageID) {
      this.profileAvatarLarge = largeImageID
    },

    acceptQuest(questId) {
      this.questIdsAccepted.push(questId)
    },

    // Define other actions as needed
  },
})
