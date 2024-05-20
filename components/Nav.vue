<script setup>
import { } from 'vue';
//引入Pinia
const navStore = useNavStore()
//判斷是否改變導航條樣式
const mainNavOverY = ref(false)
const logoimgSrc = ref('logo-light.svg')
//是否隱藏桌機板選單
//navStore.isOpenSiteMenu = false




const affixed = () => {
    if (window.scrollY > 1) {
        mainNavOverY.value = true
        console.log('affixed');
        logoimgSrc.value = 'logo.svg'
        return
    } else {
        mainNavOverY.value = false
        logoimgSrc.value = 'logo-light.svg'
    }
}
const toggled = () => {
    navStore.isOpenSiteMenu = !navStore.isOpenSiteMenu
}
// 移到頁面頂端
const scrollToTop = () => {
    console.log('scrollToTop');
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}
onMounted(() => {
    affixed()
    window.addEventListener('scroll', affixed)
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', affixed);
});

</script>

<template>
    <!-- 選單是否顯示游store裡的getNavStatus決定 -->
    <div id="main-nav" :class="[mainNavOverY ? 'affixed' : '']" v-show="navStore.navVisibility">
        <div>
            <div class="flex justify-between items-center lg:flex-nowrap flex-wrap">
                <NuxtLink to="/" class="logo">
                    <img :src="logoimgSrc" alt="" class="max-w-full ">
                </NuxtLink>
                <!-- 把手機板選單放到這裡 -->
                <div class="lg:hidden pr-10" id="mobile-hamburger">
                    <NuxtLink @click="toggled">
                        <Icon to="javascript:;" name="bi:list" />
                    </NuxtLink>
                </div>
                <!-- 手機時讓這個選單wrap並且widht:100% -->
                <div id="site-menu" :class="{ flex: navStore.isOpenSiteMenu }">
                    <div class="socialList flex px-8 justify-center gap-5">
                        <NuxtLink>
                            <Icon name="bi:facebook" class="text-2xl text-fuchsia-500 hover:text-yellow-300" />
                        </NuxtLink>
                        <NuxtLink>
                            <Icon name="bi:3-circle-fill" class="text-2xl text-fuchsia-500 hover:text-yellow-300" />
                        </NuxtLink>
                        <NuxtLink>
                            <Icon name="file-icons:ansible" class="text-2xl text-fuchsia-500 hover:text-yellow-300" />
                        </NuxtLink>
                    </div>

                    <nav>
                        <NuxtLink to="/about">About</NuxtLink>
                        <NuxtLink to="/support">Support</NuxtLink>
                        <NuxtLink to="/price">price</NuxtLink>
                    </nav>
                    <button id="nav-contact">Contact</button>
                </div>

            </div>
        </div>
    </div>
    <div id="gotoTop" v-show="mainNavOverY" @click=scrollToTop>
        <Icon name="heroicons:chevron-up-16-solid" class="text-7xl " />
    </div>
</template>

<style scoped>
#main-nav {
    padding: 16px 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99999999;
    transition: all .3s cubic-bezier(.4, 0, .2, 1);
}

#main-nav .logo {
    width: 109px;
    transition: all .3s;
    margin-left: 2.5rem;
}

#main-nav #site-menu nav a {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 40px;
    transition: all .3s cubic-bezier(.4, 0, .2, 1);
}

#main-nav #site-menu nav {
    display: flex;
}

/* 當手機版時，不要有hover功能 */
#main-nav #site-menu:not(.flex) nav a:hover {
    color: #ff0;
}

#main-nav.affixed {
    background-color: #fff;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

#main-nav.affixed .logo {
    width: 80px;
}

#main-nav.affixed #site-menu nav a {
    padding-top: 10px;
    padding-bottom: 10px;
    color: rgba(32, 41, 47, .6);
}

#nav-contact {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
    background-color: #fff;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    padding: 0.75rem 2rem;
    transition: all 0.3s;
    color: #FE499E;
    font-weight: 600;
}

#main-nav.affixed #nav-contact {
    background: linear-gradient(120deg, rgba(255, 74, 158, 0), #ff3190);
    background-color: #ff4ac2;
    color: #fff !important;
}

#main-nav #site-menu {
    display: flex;
    align-items: center;
    flex-basis: 1/2;
    width: auto;
    padding-right: 2.5rem;
}

#mobile-hamburger>a {
    font-size: 2rem;
    color: #fff;
}

#main-nav.affixed #mobile-hamburger>a {
    color: #FE499E;
}

#gotoTop {
    position: fixed;
    bottom: 2vh;
    right: 2vw;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.5)
}

@media (min-width:1024px) {
    #nav-contact:hover {
        transform: translateY(-5px);
    }
}

@media (max-width:768px) {
    #main-nav #site-menu {
        display: none;
        margin-top: 1.5rem;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        flex-direction: column;
        padding-right: 0;
        opacity: 0;
        transition: all .3s cubic-bezier(.4, 0, .2, 1);
        visibility: hidden;
        width: 100%;
        background: #f2f4f5;
    }

    #main-nav #site-menu.flex {
        display: flex;
        opacity: 1;
        visibility: visible;
    }

    #main-nav #site-menu nav {
        flex-direction: column;
        width: 100%;
    }

    #main-nav #site-menu nav a {
        color: #aaa;
        padding-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ddd;
    }

    #main-nav #site-menu #nav-contact {
        margin-top: 20px;
        background: linear-gradient(120deg, rgba(255, 74, 158, 0), #ff3190);
        background-color: #ff4ac2;
        color: #fff;
    }

    #main-nav:has(#site-menu.flex) {
        transition: none;
        padding-bottom: 0;
    }
}
</style>
