import { useColorMode, useCycleList } from '@vueuse/core'
import { watchEffect } from 'vue'
import type { InjectionKey } from 'vue'

type ColorSetType = ReturnType<typeof useColorSet>;
type ColorModes =  'green' | 'orange' | 'red' | 'auto';

export const colorSetInjectionKey = Symbol() as InjectionKey<ColorSetType>

export function useColorSet () {
  const mode = useColorMode({
    emitAuto: true,
    modes: {
      green: 'green',
      orange: 'orange',
      red: 'red',
    },
  });
  let initial: ColorModes = 'auto';

  const { store } = useColorMode();

  if (store.value !== undefined && store.value !== 'dark' && store.value !== 'light') {
    initial = <ColorModes>store.value;
  }

  const { state, next } = useCycleList<ColorModes>(['green', 'orange', 'red', 'auto'], { initialValue: initial });
  watchEffect(() => mode.value = state.value);

  const hueMap = new Map<string, number>([
      ['auto', 0],
      ['red', 160],
      ['orange', 220],
      ['green', 300]
  ]);

  return { store, hueMap, next };
}
