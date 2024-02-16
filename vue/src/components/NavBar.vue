<script setup lang="ts">

</script>

<template>
    <nav class="p-2 flex justify-between items-center xl:flex-row flex-col gap-4">
        <div class="flex gap-4 sm:gap-1">
            <slot name="logo"></slot>
        </div>
        <div class="flex gap-1 flex-col text-center sm:gap-4 sm:flex-row">
            <slot name="buttons"></slot>
        </div>
        <div class="flex gap-1 flex-col text-center sm:gap-10 sm:flex-row sm:px-16">
            <slot name="icons"></slot>
        </div>
    </nav>
</template>

<style scoped>

</style>
