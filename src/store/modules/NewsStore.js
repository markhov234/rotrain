import { defineStore } from "pinia";

export const useNewsStore = defineStore("newsStore", {
  state: () => ({
    news: [
      {
        id: "news001",
        title: "Global Economic Update",
        image: "placeholder_for_global_economic_update.jpg",
        link: "https://example.com/news/global-economic-update",
        isFav: false,
      },
      {
        id: "news002",
        title: "Tech Innovations 2024",
        image: "placeholder_for_tech_innovations.jpg",
        link: "https://example.com/news/tech-innovations-2024",
        isFav: false,
      },
      {
        id: "news003",
        title: "New Yoga Mats Available",
        image: "placeholder_for_yoga_mats.jpg",
        itemId: "item001",
        link: "https://example.com/shop/item001",
        isFav: true,
      },
      {
        id: "news004",
        title: "Book Club Choices for June",
        image: "placeholder_for_book_club.jpg",
        link: "https://example.com/news/book-club-june",
        isFav: false,
      },
    ],
  }),
});
