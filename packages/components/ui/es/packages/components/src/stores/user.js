import { defineStore as i } from "../../../../node_modules/.pnpm/pinia@2.0.35_hmuptsblhheur2tugfgucj7gc4/node_modules/pinia/dist/pinia.js";
const m = i("imUser", {
  state: () => ({
    userInfo: {
      userName: "123"
    }
  }),
  actions: {
    async login(s, t) {
      return new Promise(async (n, r) => {
        const { code: e, data: o } = await window.$tim.login({ userID: s, userSig: t });
        e === 0 && (sessionStorage.setItem("userID", s), sessionStorage.setItem("userSig", t), n({ code: e, data: o })), r({ code: e, data: o });
      });
    }
  }
});
export {
  m as useImUserStore
};
