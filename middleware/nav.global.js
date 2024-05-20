export default defineNuxtRouteMiddleware((to, from) => {
    const navStore = useNavStore()
    navStore.isOpenSiteMenu = false
})