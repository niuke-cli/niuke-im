import { defineStore } from "pinia";

export const useImUserStore = defineStore("imUser", {
  state: () => ({
    userInfo: {
      userName: "123",
    },
  }),
  actions: {
    async login(userID: string, userSig: string) {
      return new Promise(async(resolve, reject) => {
        // @ts-ignore
        const { code, data } = await window.$tim.login({ userID,   userSig,  });
        if (code === 0) {
          sessionStorage.setItem('userID', userID)
          sessionStorage.setItem('userSig', userSig)
          resolve({code , data})
        }
        reject({code , data})
      })

    },
  },
});
