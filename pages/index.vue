<script setup>
import { } from 'vue'
useSeoMeta({
 title: "官網首頁(2) - Nuxt3 初學練習網站",
 description: "官網首頁 - 練習Nuxt3時所架設的初學練習網站，內容使用部分假文字及其他網站圖片，如有侵權敬請見諒",
 ogDescription: "官網首頁 - 練習Nuxt3時所架設的初學練習網站，內容使用部分假文字及其他網站圖片，如有侵權敬請見諒",
 ogTitle: "官網首頁 - Nuxt3 初學練習網站",
 ogImage: "",
 twitterCard: "summary_large_image",
 twitterSite: "",
 twitterCreator: "",
});
const { intersectionObserver, isIntersecting } = useIntersectionObserver()
const EventIntro = ref(null)
watch(isIntersecting, (newVal, prevVal) => {
    //console.log(prevVal, newVal);
});

onMounted(() => {
    //let target = document.querySelector("#EventIntro");
    //也可以用這種方式取得dom，然後再用intersectionObserver(target)
    intersectionObserver(
        EventIntro.value,
        //composables裡面也有設定這些options
        //但在這裡設定的option會蓋過composables裡面的
        { root: null,rootMargin:'-15%', threshold: "0.25" },
        //這裡決定是否隱藏選單
        true
    );
});
</script>

<template>
      <div id="home-hero">
        <div class="container mx-auto md:py-10 py-4 relative z-10">
            <div class="flex justify-center lg:flex-row flex-col mb:px-0 px-8">
                <div class="lg:basis-5/12 basis-full">
                    <h1 class="text-5xl xl:text-7xl font-black md:mb-5 mb-2 font-mono">
                        WordPress Unleashed
                    </h1>
                    <h3 class="xl:text-3xl text-xl font-bold md:mb-5 mb-2">
                        The Most Popular WordPress Themes In The World And The Ultimate Visual Page Builder
                    </h3>
                    <h5 class="d-block text-lg mb-5">Join 974,872 Empowered Web Design
                        Professionals & Business
                        Owners
                    </h5>
                    <div class="text-center md:text-left">
                        <NuxtLink to="/"
                            class="inline-block rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 font-extrabold shadow-lg">
                            UNLOCK THE POWER OF DIVI
                        </NuxtLink>
                    </div>
                </div>
                <div class="lg:basis-6/12 basis-full xl:basic-5/12 md:pl-5 lg:mt-0 mt-10">
                    <div id="landing-hero-video" >
                        <video class="w-full" width="1040" height="auto" autoplay="" loop=""
                        muted="" playsinline="" poster="@/assets/build.jpg">
                        <source src="@/assets/build.webm" type="video/webm">
                    </video>
                    </div>
                 
                </div>
            </div>
        </div>
        <div id="home-hero-overlay"></div>
    </div>
    <div class="container mx-auto">
        <div class="lg:w-8/12 w-10/12 mx-auto mb-20">
            <h1 class="text-6xl text-violet-800 font-black mb-2 text-center">Mauris</h1>
            <h2 class="text-3xl font-bold text-center mb-2">The Most Popular WordPress Theme In The World And
                The Ultimate WordPress Page Builder</h2>
            <p class="text-center text-stone-500 italic">
                Sed eget imperdiet odio. Donec luctus, nunc eget sagittis interdum, dui mi malesuada ipsum, lacinia
                porta erat
                sapien at dui. Cras pellentesque suscipit lacus, ut rhoncus nibh volutpat a. Nullam quam quam, congue a
                iaculis
                vel, interdum in arcu. Morbi tincidunt tortor non rhoncus feugiat. Nulla facilisi. Donec euismod feugiat
                pulvinar
            </p>
            <div>
                <img src="/divi-video-cover.jpg" alt="影片圖片" class="blcok mx-auto my-4">
            </div>
        </div>
        <div :class="{ open: isIntersecting }" class="md:p-20 p-5" id="EventIntro" ref="EventIntro">
            <h1 class="md:text-5xl text-2xl font-black text-center">
                974,872 Customers Are Already Building Amazing Websites
            </h1>
            <div class="text-center md:my-10 my-5">
                <button
                    class="rounded-full bg-gradient-to-tr to-green-500 from-green-900 text-white py-4 px-10 font-extrabold">Sing
                    Up Today</button>
            </div>
            <p class="text-center">
                such as Divi AI, which you can get for 58% off with the Divi Pro bundle.
                <span class="font-semibold">ith Divi. Join The Most E <br></span>Wmpowered <span
                    class="italic underline">WordPress</span> Community On The Web
            </p>
        </div>
        <div id="EventIntroOverlay"></div>
        <div class="w-10/12 mx-auto my-20" id="scrollArea">
            <div class="flex justify-center gap-6 flex-wrap">
                <div class="lg:basis-1/3 basis-full">
                    <h1 class="text-6xl  text-violet-800 font-black mb-2 ">Design</h1>
                    <h2 class="text-3xl font-bold mb-2">
                        The Most Powerful Design Tool For WordPress
                    </h2>
                    <p class="mb-2 text-stone-500 italic">
                        Enjoy the ultimate web design editor. Divi is like Photoshop or Sketch for the web. It brings an
                        advanced design interface to WordPress that both beginners and experts will fall in love with.
                        It's
                        incredibly smart, super flexible, amazingly powerful and visual by nature. This is how designing
                        for
                        the web is meant to be done.
                    </p>
                    <NuxtLink to="/"
                        class="inline-block rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 font-extrabold shadow-lg text-white">
                        UNLOCK THE POWER OF DIVI
                    </NuxtLink>
                </div>
                <div class="">
                    <img src="/design-02.png" alt="">
                </div>
            </div>
        </div>
        <div class="w-10/12 mx-auto my-20" id="scrollArea">
            <div class="flex justify-center gap-6 flex-wrap">
                <div class="">
                    <img src="/woo-02.jpg" alt="">
                </div>
                <div class="lg:basis-1/2 basis-full">
                    <h1 class="text-6xl  text-violet-800 font-black mb-2 ">Take Flight</h1>
                    <h2 class="text-3xl font-bold mb-2">
                        Build Websites Faster than Ever Before With Divi's Amazing Efficiency Tools
                    </h2>
                    <p class="mb-2 text-stone-500 italic">
                        Building websites with Divi is fast. Super fast. Divi is built by designers for designers, and we are striving to bring advanced UI paradigms to WordPress so that website owners and design agencies can enjoy a better building experience.
                    </p>
                    <NuxtLink to="/"
                        class="inline-block rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 font-extrabold shadow-lg text-white">
                        EXPLORE DIVI'S EFFICIENCY TOOLS
                    </NuxtLink>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
#home-hero {
    overflow: hidden;
    background-image: linear-gradient(rgba(255, 74, 158, .2), rgba(255, 74, 158, 0) 50%),
        linear-gradient(60deg, #5c00c3 16%, #ff4a9e 85%);
    padding-bottom: 10vw;
    padding-top: 6rem;
    margin-bottom: 2rem;
    color: #fff;
    background-size: cover;
    /* clip-path: polygon(0 0, 100% 0, 100% 70%, 0% 100%); */
    background-image: url(@/assets/img/landing-hero-background.jpg);
    background-position: center bottom;
    background-repeat: no-repeat;
    position: relative;
}

/* 首頁影片 */
#landing-hero-video {
    box-shadow: -7vh 7vh 7vh -6vh rgba(23, 16, 159, .5), -200px 160px 160px -100px rgba(23, 16, 159, .1);
    max-width: none;
    /* transform: rotateY(0deg) rotateX(-16deg) rotateX(24deg) skewY(-16deg) skewX(32deg); */
    /* 讓影片左邊有1%的間距 */
    /* width: calc(100% - 3vw ) ; */
    margin-left: auto;
    margin-right: 0;
    border-radius: 20px;
    overflow: hidden;
}

.hero-container {
    width: 960px;
    max-width: 100%;
}

#home-hero-overlay {
    background: linear-gradient(-8deg, transparent 35%, #130e87 75%);
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
}
#EventIntro {
    @apply bg-black;
    @apply bg-violet-800;
    color: #fff;
    width: 80%;
    margin: 0 auto;
    border-radius: 1rem;
    transition: all 0.7s;
}

#EventIntro.open {
    transform: scale(1.1);
    @apply bg-blue-900;
    z-index: 15;
    position: relative;
}

#EventIntroOverlay {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0;
    visibility: hidden;
    z-index: 6;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.3s;
}

#EventIntro.open+#EventIntroOverlay {
    opacity: 1;
    visibility: visible;
}
</style>
