<script setup>
import { } from 'vue'
//應用第2個觀察元素是否進入畫面
const { intersectionObserver, isIntersecting } = useIntersectionObserver()
const footer = ref(null)

onMounted(() => {
    let target = document.querySelector("#footer");
    //也可以用這種方式取得dom，然後再用intersectionObserver(target)
    intersectionObserver(
        target,
        //composables裡面也有設定這些options
        //但在這裡設定的option會蓋過composables裡面的
        { root: null, threshold: "0.75" }
    );
});
</script>

<template>
    <footer class="px-10 py-20 border-t border-gray-200 transition-all" id="footer" :class="[isIntersecting?'bg-gray-100':'bg-gray-300']">
        <div class="container mx-auto">
            <div class="flex justify-center lg:divide-x lg:flex-nowrap flex-wrap">
                <div class="lg:flex-1 md:basis-1/2 basis-full px-10 mb-10">
                    <h3 class="font-bold pb-3 tracking-wide">DIVI</h3>
                    <ul class="foot-submenu">
                        <li>All FeaturesExplore Divi</li>
                        <li>Divi Modules</li>
                        <li>Divi Layouts</li>
                        <li>No-Code Builder</li>
                        <li>Workflow</li>
                        <li>Ecommerce Websites</li>
                        <li>Theme Builder</li>
                        <li>Marketing Platform</li>
                        <li>Speed & Performance</li>
                        <li>Developers</li>
                        <li>Premium Support</li>
                    </ul>
                </div>
                <div class="lg:flex-1 md:basis-1/2 basis-full px-10 mb-10">
                    <h3 class="font-bold pb-3 tracking-wide">PRODUCTS</h3>
                    <ul class="foot-submenu">
                        <li>Divi Theme</li>
                        <li>Divi Marketplace</li>
                        <li>Divi Cloud</li>
                        <li>Divi AIBrand New!</li>
                        <li>Divi Teams</li>
                        <li>Divi VIP</li>
                        <li>Divi Hosting</li>
                        <li>Extra Theme</li>
                        <li>Bloom Plugin</li>
                        <li>Monarch Plugin</li>
                        <li>Plans & Pricing</li>
                    </ul>
                </div>
                <div class="lg:flex-1 md:basis-1/2 basis-full px-10 mb-10">
                    <h3 class="font-bold pb-3 tracking-wide">BLOG</h3>
                    <ul class="foot-submenu">
                        <li>Divi Meetups</li>
                        <li>Divi Facebook Group</li>
                        <li>Divi Examples</li>
                        <li>Divi Integrations</li>
                        <li>Divi Reviews</li>
                        <li>Community Forum</li>
                        <li>Affiliate Program</li>
                    </ul>
                </div>
                <div class="lg:flex-1 md:basis-1/2 basis-full px-10 mb-10">
                    <h3 class="font-bold pb-3 tracking-wide">COMMUNITY</h3>
                    <ul class="foot-submenu">
                        <li>Recent Posts</li>
                        <li>Product Updates</li>
                        <li>Divi Resources</li>
                        <li>Business</li>
                        <li>WordPress</li>
                        <li>Best Plugins</li>
                        <li>Top Tools</li>
                        <li>Best Hosting</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer ul.foot-submenu>li{
    color: #666;
}
</style>
