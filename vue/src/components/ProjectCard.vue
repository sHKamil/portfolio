<script setup lang="ts">
import GlowBox from './GlowBox.vue';
import IconGithubRounded from './icons/IconGithubRounded.vue';
import IconOnline from './icons/IconOnline.vue';
const props = defineProps<{
  title: string,
  technologies: string,
  githubLink?: string,
  onlineLink?: string
}>();

</script>

<template>
   <GlowBox class="overflow-hidden" innerCss="xl:p-8 p-4">
      <div class="flex lg:flex-row flex-col justify-between gap-8">
        <div>
          <p class="text-white xl:text-5xl text-2xl w-fit">
            {{ title }}
          </p> 
          <p class="text-primary xl:text-3xl text-lg w-fit">
            {{ technologies }}
          </p>
        </div>
        <div class="flex lg:gap-2 lg:flex-col flex-row justify-around">
          <a v-if="onlineLink" class="hover:text-primary transition-all duration-300" :href="onlineLink" target="_blank">
            <IconOnline />
          </a>
          <a v-if="githubLink" class="hover:text-primary transition-all duration-300" :href="githubLink" target="_blank">
            <IconGithubRounded />
          </a>
        </div>
      </div>
    </GlowBox>
</template>

<style scoped>

</style>
