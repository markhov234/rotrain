import { defineStore } from 'pinia'

export const useFriendsStore = defineStore('friendsStore', {
  state: () => ({
    friends: [
      {
        id: '1',
        username: 'Lim Eunjin',
        smallCardPicture: 'https://placehold.co/192x180',
        largeCardPicture: 'placeholder_for_tech_innovations.jpg',
        level: '45',
      },
      {
        id: '2',
        username: 'Markhov',
        smallCardPicture: 'https://placehold.co/192x180',
        largeCardPicture: 'placeholder_for_tech_innovations.jpg',
        level: '55',
      },
      {
        id: '3',
        username: 'KushLover',
        smallCardPicture: 'https://placehold.co/192x180',
        largeCardPicture: 'placeholder_for_tech_innovations.jpg',
        itemId: 'item001',
        level: '49',
      },
      {
        id: '4',
        username: 'MacNdCheese',
        smallCardPicture: 'https://placehold.co/192x180',
        largeCardPicture: 'placeholder_for_tech_innovations.jpg',
        level: '65',
      },
    ],
  }),
})
