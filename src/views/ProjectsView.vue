<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';

</script>

<template>
  <main class="mt-[1%] p-5 flex justify-center content-between flex-col gap-8 w-fit mx-auto">
    <ProjectCard title="Karosu" technologies="Prestashop + Typescript" onlineLink="https://karosu.pl" />
    <ProjectCard title="Rowerovo frontend [in progress]" technologies="Vue.js" githubLink="https://github.com/sHKamil/rowerovo-frontend" onlineLink="https://rowerovo.shka.pro/products" />
    <ProjectCard title="Rowerovo backend [in progress]" technologies="Symfony" githubLink="https://github.com/sHKamil/rowerovo-backend" />
    <ProjectCard title="Rhelper" technologies="PHP + Vanilla JS + Bootstrap 5" githubLink="https://github.com/sHKamil/roommate-helper" onlineLink="https://rhelper.shka.pro/" />
    <ProjectCard title="ShopGarden" technologies="Laravel + Vanilla JS + Bootstrap 5" githubLink="https://github.com/sHKamil/shopgarden" />
    <ProjectCard title="Prestashop module - TrippleBanner" technologies="PHP + Vanilla JS + Bootstrap 5" githubLink="https://github.com/sHKamil/trippleBanner-prestashop" />
    <ProjectCard title="Polonia-news" technologies="PHP + Vanilla JS" onlineLink="https://polonia.shka.pro/" />
  </main>
</template>

<style scoped>

</style>
