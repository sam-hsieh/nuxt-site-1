<script setup>
import { } from 'vue'
</script>
<template>
    <Nav></Nav>
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
    <slot>
    </slot>
    <Footer ref="footer"></Footer>
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
</style>
