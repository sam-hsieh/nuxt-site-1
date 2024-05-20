import { defineStore } from 'pinia'
export const useNavStore = defineStore("nav", () => {
    //用來判斷選單是否顯示
    const navVisibility = ref(true)

    //用來記錄手機版選單是否打開
    //是否隱藏桌機板選單
    const isOpenSiteMenu = ref(false)
    return { navVisibility ,isOpenSiteMenu}
})