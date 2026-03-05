import { defineStore } from "pinia";
<<<<<<< HEAD

export const useUserStore = defineStore("user", {
  state: () => ({
    firstName: "Иван",
    middleName: "Иванович",
    secondName: "Иванов",
  }),
  getters: {
    fullName: (state) =>
      state.secondName + " " + state.firstName + " " + state.middleName,
  },
  actions: {
    setFullName() {
      this.firstName = "Петр";
      this.middleName = "Петрович";
      this.secondName = "Петров";
    },
  },
});
=======
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  class User {
    score = 0;

    constructor(name) {
      this.name = name;
    }

    increaseScore() {
      this.score++;
    }
  }

  const userBlack = ref(new User("Black"));

  const userWhite = ref(new User("White"));

  return {
    userBlack,
    userWhite,
  };
});
>>>>>>> 459004f (unit 16)
