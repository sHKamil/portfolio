<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TextLogo from './components/TextLogo.vue'
import BgVideo from './components/BgVideo.vue';
import CustomButton from './components/CustomButton.vue';
import NavBar from './components/NavBar.vue';
import IconLinkedin from './components/icons/IconLinkedin.vue';
import IconGithub from './components/icons/IconGithub.vue';


</script>

<template>
  <BgVideo>
    <header class="font-ProtestStrike">
      <div>
        <NavBar>
          <template #logo>
            <TextLogo />
          </template>
          <template #buttons>
            <CustomButton linkTo="/">Home</CustomButton>
            <CustomButton linkTo="/projects">Projects</CustomButton>
            <CustomButton linkTo="/">Resume</CustomButton>
          </template>
          <template #icons>
            <a class="text-blue-500 w-12 h-12" href="https://www.linkedin.com/in/kamil-ha%C5%82asa/"><IconLinkedin /></a>
            <a class="text-gray-300 w-12 h-12" href="https://github.com/sHKamil"><IconGithub /></a>
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
