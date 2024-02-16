<script setup lang="ts">
import { RouterView } from 'vue-router'
import TextLogo from './components/TextLogo.vue'
import BgVideo from './components/BgVideo.vue';
import CustomButton from './components/CustomButton.vue';
import NavBar from './components/NavBar.vue';
import IconLinkedin from './components/icons/IconLinkedin.vue';
import IconGithub from './components/icons/IconGithub.vue';
import { colorSetInjectionKey, useColorSet } from './composables/useColorSet';
import { provide } from 'vue';

const colorSet = useColorSet();
provide(colorSetInjectionKey, colorSet);

</script>

<template>
  <BgVideo >
    <header class="font-ProtestStrike">
      <div>
        <NavBar class="text-xl">
          <template #logo>
            <TextLogo />
          </template>
          <template  #buttons>
            <CustomButton  linkTo="/">HOME</CustomButton>
            <CustomButton linkTo="/projects">PROJECTS</CustomButton>
            <a href="/resume-kh.pdf" target="_blank"><CustomButton >RESUME</CustomButton></a>
          </template>
          <template #icons>
            <a class="text-blue-500 w-12 h-12" href="https://www.linkedin.com/in/kamil-ha%C5%82asa/" target="_blank"><IconLinkedin class="text-primary" /></a>
            <a class="text-gray-300 w-12 h-12" href="https://github.com/sHKamil" target="_blank"><IconGithub /></a>
          </template>
        </NavBar>
      </div>
    </header>
    <div class="font-ProtestStrike">
      <RouterView />
    </div>
  </BgVideo>
</template>

<style scoped>

</style>
