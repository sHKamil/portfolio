<script setup lang="ts">
import { useColorSet } from '@/composables/useColorSet';
import GlowBox from './GlowBox.vue';

const props = defineProps<{
  linkTo?: string
}>();

const { next } = useColorSet();

</script>

<template>
    <RouterLink @click="next()" v-if="linkTo" :to="linkTo">
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
