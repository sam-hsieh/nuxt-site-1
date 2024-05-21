<script setup>
import { } from 'vue'
//引入Pinia
const navStore = useNavStore();
</script>

<template>
    <div class="contactForm" :class="{ open: navStore.isopenContact }">
        <div class="flex p-5 bg-gradient-to-r  to-[#ff3190] from-[#ff4ac2]">
            <div class="flex-1 text-2xl font-medium uppercase text-center  text-white">
                Send us a message
            </div>
            <NuxtLink to="javascript:;" @click="navStore.toggleContactForm()">
                <Icon name="heroicons:x-mark-20-solid" class="text-2xl text-white/50 hover:text-yellow-300" />
            </NuxtLink>

        </div>

        <div class="p-5">

            <form action="">
                <div class="py-2">
                    <input type="text"
                        class="block border-b w-full py-2 placeholder:italic transtion-all focus-visible:outline-none focus-visible:border-black"
                        name="name" id="name" placeholder="姓名">
                </div>
                <div class="py-2">
                    <input type="text"
                        class="block border-b w-full py-2 placeholder:italic transtion-all focus-visible:outline-none focus-visible:border-black"
                        name="email" id="email" placeholder="電郵">
                </div>
                <div class="py-2">
                    <input type="text"
                        class="block border-b w-full py-2 placeholder:italic transtion-all focus-visible:outline-none focus-visible:border-black"
                        name="phone" id="phone" placeholder="電話">
                </div>
                <div class="py-2">

                    <textarea name="" rows="3" id="comment"
                        class="block border-b w-full py-2 placeholder:italic transtion-all focus-visible:outline-none focus-visible:border-black"
                        placeholder="訊息"></textarea>
                </div>
                <div class="text-center pt-2">
                    <button type="button"
                        class="focus:outline-none text-white bg-gradient-to-r  to-[#ff3190] from-[#ff4ac2] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">SUBMIT</button>
                </div>
            </form>
        </div>
    </div>

</template>

<style scoped>
.contactForm {
    overflow: hidden;
    width: 50%;
    max-width: 400px;
    position: fixed;
    right: -50%;
    top: 20vh;
    background: #fff;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
    z-index: 18;
    border-radius: 1rem 0 0 1rem;
    transition: all 0.5s ease-in-out;
}

.contactForm.open {
    right: 0;
}

@media (max-width:768px) {
    .contactForm {
        top: 0;
        right: -100%;
        width: 100%;
        height: 100vh;
        z-index: 100;
        border-radius: 0;
    }

    .contactForm.open {
right: 0;
    }
}
</style>
