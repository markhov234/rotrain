import { defineStore } from 'pinia'

export const useBannerStore = defineStore('bannerStore', {
  state: () => ({
    banners: [
      {
        headingLevel: 'h2',
        text: 'News',
        variant: 'right title',
        strokeColor: 'black',
      },
      {
        headingLevel: 'h2',
        text: 'Shop',
        variant: 'left title',
        strokeColor: 'black',
      },
      {
        headingLevel: 'h1',
        text: 'Home',
        variant: 'main title',
        strokeColor: 'black',
      },
      {
        headingLevel: 'h2',
        text: 'Daily Quests',
        variant: 'left title',
        strokeColor: 'black',
      },
      {
        headingLevel: 'h2',
        text: 'Friends',
        variant: 'left title',
        strokeColor: 'black',
      },
    ],
  }),
  getters: {
    // Getter to retrieve a banner by its text
    // I use State to target my object banners, then i use find to look if banner.text is equal to the text send, then return the array with the right options.
    getBannerByText: (state) => (text) => {
      return state.banners.find((banner) => banner.text === text)
    },
  },
  actions: {},
})
