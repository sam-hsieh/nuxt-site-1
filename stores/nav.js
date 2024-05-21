import { defineStore } from 'pinia'
export const useNavStore = defineStore("nav", () => {
    //用來判斷選單是否顯示
    const navVisibility = ref(true)

    //用來記錄手機版選單是否打開
    //是否隱藏桌機板選單
    const isOpenSiteMenu = ref(false)

    //是否開啟聯絡我們表單
    const isopenContact = ref(false);
    //紀錄聯絡我們表單變數
    const toggleContactForm = () => {
        isopenContact.value = !isopenContact.value
        //當表單出現時，也讓手機板選單關閉
        isOpenSiteMenu.value=false
    };

    return { navVisibility, isOpenSiteMenu, isopenContact, toggleContactForm }
})