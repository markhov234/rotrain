import { defineStore } from 'pinia'

export const useFriendsStore = defineStore('friendsStore', {
  state: () => ({
    friends: [
      {
        id: '1',
        username: 'Lim Eunjin',
        smallCardPicture: 'avatar_small-card-01.png',
        largeCardPicture: 'placeholder_for_tech_innovations.jpg',
        level: '45',
      },
      {
        id: '2',
        username: 'Markhov',
        smallCardPicture: 'avatar_small-card-02.png',
        largeCardPicture: 'placeholder_for_tech_innovations.jpg',
        level: '55',
      },
      {
        id: '3',
        username: 'KushLover',
        smallCardPicture: 'avatar_small-card-01.png',
        largeCardPicture: 'placeholder_for_tech_innovations.jpg',
        itemId: 'item001',
        level: '49',
      },
      {
        id: '4',
        username: 'MacNdCheese',
        smallCardPicture: 'avatar_small-card-02.png',
        largeCardPicture: 'placeholder_for_tech_innovations.jpg',
        level: '65',
      },
    ],
  }),
})
