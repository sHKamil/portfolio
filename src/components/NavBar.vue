<script setup lang="ts">
import { ref } from 'vue';

</script>

<template>
    <nav class="p-2 flex justify-between items-center xl:flex-row flex-col gap-4">
        <div class="flex gap-4">
            <slot name="logo"></slot>
        </div>
        <div class="flex gap-4">
            <slot name="buttons"></slot>
        </div>
        <div class="flex gap-4">
            <slot name="icons"></slot>
        </div>
    </nav>
</template>

<style scoped>

</style>
