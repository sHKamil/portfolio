<script setup lang="ts">
import { colorSetInjectionKey } from '@/composables/useColorSet';
import gsap from 'gsap';
import { inject, onMounted, reactive, ref, watchEffect } from 'vue';

const video = ref<HTMLVideoElement | null>(null);
const rate = reactive({ number: 10 })
const hueDeg = reactive({ deg: 110 });
const colorSet = inject(colorSetInjectionKey);
const timelineRate = gsap.timeline();



onMounted(() => {
    if(video.value !== null) {
        watchEffect(() => {
            timelineRate.clear();            
            animateBg(colorSet?.hueMap.get(colorSet.store.value));
            timelineRate.play();
        })
    }
});

function animateBg(hueDegree?: number) {
    rate.number = 10;
    if (hueDegree) {
        gsap.to(hueDeg, { duration: 1.5, deg: hueDegree });
    } else {
        gsap.to(hueDeg, { duration: 1.5, deg: 0 });
    }
    timelineRate.to(rate, { duration: 2, number: 1 });
    watchEffect(() => {
        if(video.value) {
            video.value.playbackRate = rate.number;
        }
    });
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
