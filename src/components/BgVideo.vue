<script setup lang="ts">
import { useColorSet } from '@/composables/useColorSet';
import gsap from 'gsap';
import { onMounted, reactive, ref, watchEffect } from 'vue';

const video = ref<HTMLVideoElement | null>(null);
const rate = reactive({ number: 10 })
const hueDeg = reactive({ deg: 110 });
const { store, hueMap } = useColorSet();

onMounted(() => {
    if(video.value !== null) {
        watchEffect(() => {
            animateBg(hueMap.get(store.value))
            console.log(hueMap.get(store.value));
            console.log(store.value);
        })
    }
});

function animateBg(hueDegree?: number) {
    if (hueDegree) {
        gsap.to(hueDeg, { duration: 2, deg: hueDegree });
    } else {
        gsap.to(hueDeg, { duration: 2, deg: 0 });
    }
    gsap.to(rate, { duration: 2, number: 1 });
    watchEffect(() => {
        if(video.value) {
            video.value.playbackRate = rate.number;
        }
    })
    rate.number = 10;
}

</script>

<template>
    <video ref="video" class="-z-10 fixed object-cover top-0 left-0 h-dvh w-dvw opacity-30" :style="{filter: 'hue-rotate(' + hueDeg.deg +'deg)'}" playsinline autoplay loop muted preload="auto">
        <source src="../media/bg.mp4" type="video/mp4"/>
    </video>
    <slot></slot>
</template>

<style scoped>

</style>
