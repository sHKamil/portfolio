<script setup lang="ts">
import GlowBox from '@/components/GlowBox.vue';
import gsap from 'gsap';
import { onMounted, ref } from 'vue';

const popUpHi = ref(null);
const popUpIm = ref(null);
const popUpName = ref(null);
const cursorBlink = ref(null);
const writeText = ref(null);
const time = gsap.timeline();

onMounted(() => {
  time.from('.glowBox', { y: '+20', autoAlpha: 0 , duration: .4, ease: "back.out(1.7)", delay: .3 })
  .from('.mainBox', { y: '+20', autoAlpha: 0 , duration: .4, ease: "back.out(1.7)", delay: .3 }, "-=1")
  .from(popUpHi.value, { y: 20, autoAlpha: 0 , duration: .2, ease: "back.out(1.7)" })
  .from(popUpIm.value, { y: 20, autoAlpha: 0 , duration: .2, delay: .3, ease: "back.out(1.7)" })
  .from(popUpName.value, { y: 20, autoAlpha: 0 , duration: .2, ease: "back.out(1.7)" })
  .to(cursorBlink.value, { autoAlpha: 1, duration: .5, ease: "power2.inOut", repeat:-1 })
  .from(writeText.value, { duration: 1.7, text: "", delay: .1 });
  time.play();
})

</script>

<template>
  <main class="mt-[7%] p-5 flex justify-center content-between">
   <GlowBox class="glowBox h-fit" innerCss="mainBox md:p-8 p-4">
      <p class="text-white md:text-9xl text-4xl flex md:gap-12 gap-4 w-fit overflow-hidden">
        <span ref="popUpHi" class="block w-fit">Hi</span> <span ref="popUpIm" class="block w-fit">I'm</span> <span ref="popUpName" class="block w-fit">Kamil</span> 
      </p> 
      <p class="text-primary md:text-6xl text-2xl w-fit">
        <span ref="writeText">Web Developer</span><span class="opacity-0" ref="cursorBlink">_</span>
      </p>
    </GlowBox>
  </main>
</template>

<style scoped>

</style>
