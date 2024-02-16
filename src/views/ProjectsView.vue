<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import gsap from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
  const cards = document.querySelectorAll('.popUpCard');
  const timelineProjects = gsap.timeline()
  cards.forEach(card => {
    timelineProjects.from(card, {y: 20, opacity: 0, duration: 0.5})
  });
  timelineProjects.play();
})



</script>

<template>
  <main class="mt-[1%] p-5 flex justify-center content-between flex-col gap-8 w-fit mx-auto">
    <ProjectCard class="popUpCard" title="Karosu" technologies="Prestashop + Typescript" onlineLink="https://karosu.pl" />
    <ProjectCard class="popUpCard" title="Rowerovo frontend [in progress]" technologies="Vue.js" githubLink="https://github.com/sHKamil/rowerovo-frontend" onlineLink="https://rowerovo.shka.pro/products" />
    <ProjectCard class="popUpCard" title="Rowerovo backend [in progress]" technologies="Symfony" githubLink="https://github.com/sHKamil/rowerovo-backend" />
    <ProjectCard class="popUpCard" title="Rhelper" technologies="PHP + Vanilla JS + Bootstrap 5" githubLink="https://github.com/sHKamil/roommate-helper" onlineLink="https://rhelper.shka.pro/" />
    <ProjectCard class="popUpCard" title="ShopGarden" technologies="Laravel + Vanilla JS + Bootstrap 5" githubLink="https://github.com/sHKamil/shopgarden" />
    <ProjectCard class="popUpCard" title="Prestashop module - TrippleBanner" technologies="PHP + Typescript" githubLink="https://github.com/sHKamil/trippleBanner-prestashop" />
    <ProjectCard class="popUpCard" title="Polonia-news" technologies="PHP + Vanilla JS" onlineLink="https://polonia.shka.pro/" />
  </main>
</template>

<style scoped>

</style>
