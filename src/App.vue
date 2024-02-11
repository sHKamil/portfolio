<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TextLogo from './components/TextLogo.vue'
import BgVideo from './components/BgVideo.vue';
import CustomButton from './components/CustomButton.vue';


</script>

<template>
  <BgVideo>
    <header>

      <div class="wrapper">
        <nav class="p-2 flex flex-grow justify-between items-center">
          <TextLogo />
          <div class=" flex gap-4">
            <CustomButton><RouterLink to="/">Home</RouterLink></CustomButton>
            <CustomButton><RouterLink to="/">Projects</RouterLink></CustomButton>
            <CustomButton><RouterLink to="/">Resume</RouterLink></CustomButton>
          </div>
          <div class=" flex gap-4">
            <CustomButton><a href="https://www.linkedin.com/in/kamil-ha%C5%82asa/">in</a></CustomButton>
            <CustomButton><a href="https://github.com/sHKamil">GitHub</a></CustomButton>
          </div>
        </nav>
      </div>
    </header>

    <RouterView />
  </BgVideo>
</template>

<style scoped>

</style>
