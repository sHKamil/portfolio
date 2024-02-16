<script setup lang="ts">
import { colorSetInjectionKey } from '@/composables/useColorSet';
import GlowBox from './GlowBox.vue';
import { inject } from 'vue';

const props = defineProps<{
  linkTo?: string
}>();

const colorSet = inject(colorSetInjectionKey);

</script>

<template>
    <RouterLink @click="colorSet?.next()" v-if="linkTo" :to="linkTo">
        <GlowBox innerCss="p-2">
            <slot></slot>
        </GlowBox>
    </RouterLink>

    <GlowBox v-if="!linkTo" innerCss="p-2">
        <slot></slot>
    </GlowBox>
</template>

<style scoped>
</style>
