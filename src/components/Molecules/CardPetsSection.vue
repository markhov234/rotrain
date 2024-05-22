<template>
    <div class="card-pets">
        <div class="card-pets-image" v-for="pet in selectedFriend.pets " :key="pet.id">
            <img class="image" src="https://placehold.co/30x30" alt={{pet.name}} />
        </div>
    </div>
</template>

<script>

export default {
    props: {
        friendId: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            arrayPetsFriends: {
                "friends": [
                    {
                        "id": 1,
                        "username": "Kushlover",
                        "level": "Lvl 1",
                        'pets': [
                            {
                                "id": 1,
                                "name": "Dog",
                                "level": "Lvl 1"
                            },
                            {
                                "id": 2,
                                "name": "Cat",
                                "level": "Lvl 2"
                            },
                            {
                                "id": 3,
                                "name": "Bird",
                                "level": "Lvl 3"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "username": "Lim Eunjin",
                        "level": "Lvl 1",
                        'pets': [
                            {
                                "id": 1,
                                "name": "Dog",
                                "level": "Lvl 1"
                            },
                            {
                                "id": 2,
                                "name": "Cat",
                                "level": "Lvl 2"
                            },
                            {
                                "id": 3,
                                "name": "Bird",
                                "level": "Lvl 3"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "username": "Mac n Cheese",
                        "level": "Lvl 1",
                        'pets': [
                            {
                                "id": 1,
                                "name": "Dog",
                                "level": "Lvl 1"
                            },
                            {
                                "id": 2,
                                "name": "Cat",
                                "level": "Lvl 2"
                            },
                            {
                                "id": 3,
                                "name": "Bird",
                                "level": "Lvl 3"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "username": "Markhov",
                        "level": "Lvl 1",
                        'pets': [
                            {
                                "id": 1,
                                "name": "Dog",
                                "level": "Lvl 1"
                            },
                            {
                                "id": 2,
                                "name": "Cat",
                                "level": "Lvl 2"
                            },
                            {
                                "id": 3,
                                "name": "Bird",
                                "level": "Lvl 3"
                            }
                        ]
                    },
                ]
            }
        };
    },
    computed: {
        selectedFriend() {
            const friendIdNumber = parseInt(this.friendId);
            return this.arrayPetsFriends.friends.find(friend => friend.id === friendIdNumber);
        },
    }
};
</script>