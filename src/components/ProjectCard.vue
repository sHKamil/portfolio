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
   <GlowBox innerCss="p-8">
      <div class="flex flex-row justify-between gap-8">
        <div>
          <p class="text-white text-5xl w-fit">
            {{ title }}
          </p> 
          <p class="text-primary text-3xl w-fit">
            {{ technologies }}
          </p>
        </div>
        <div class="flex gap-2 flex-col">
          <a v-if="onlineLink" class="hover:text-primary transition-all duration-300" :href="onlineLink">
            <IconOnline />
          </a>
          <a v-if="githubLink" class="hover:text-primary transition-all duration-300" :href="githubLink">
            <IconGithubRounded />
          </a>
        </div>
      </div>
    </GlowBox>
</template>

<style scoped>

</style>
