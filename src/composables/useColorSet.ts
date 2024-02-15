import { useColorMode, useCycleList } from '@vueuse/core'
import { watchEffect } from 'vue'

export function useColorSet () {
  const mode = useColorMode({
    emitAuto: true,
    modes: {
      green: 'green',
      orange: 'orange',
      red: 'red',
    },
  });
  
  const { state, next } = useCycleList(['green', 'orange', 'red', 'auto'], { initialValue: mode });
  watchEffect(() => mode.value = state.value as any);

  const { store } = useColorMode();
  const hueMap = new Map<string, number>([
      ['auto', 0],
      ['red', 160],
      ['orange', 220],
      ['green', 300]
  ]);

  return { store, hueMap, next };
}
