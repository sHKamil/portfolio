<script setup lang="ts">
import { useElementBounding, useMouse } from '@vueuse/core';
import { reactive, ref, watchEffect } from 'vue';

const props = defineProps<{
  innerCss?: string
}>();

const glow = ref(null);
const rect = reactive(useElementBounding(glow));
const {x,y} = useMouse();
const m_x = ref('');
const m_y = ref('');
watchEffect(() =>{m_x.value = x.value - rect.left- window.scrollX + "px"});
watchEffect(() =>{m_y.value = y.value - rect.top - window.scrollY + "px"});

</script>

<template>
    <div ref="glow" class="outer-box p-[2px] backdrop-blur-sm rounded-lg">
        <div class="inner-box rounded-lg bg-accenttp-background" :class="innerCss">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.outer-box {
    background: radial-gradient(
    400px circle at v-bind(m_x) v-bind(m_y), 
    hsla(var(--primary)),
    transparent 60%
  );
}
</style>
