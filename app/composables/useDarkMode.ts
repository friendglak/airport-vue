import { useColorMode } from "@vueuse/core";
import { computed, readonly } from "vue";

export const useDarkMode = () => {
  const colorMode = useColorMode();

  const isDark = computed(() => colorMode.value === "dark");
  const isLight = computed(() => colorMode.value === "light");
  const isSystem = computed(() => colorMode.value === "auto");

  const toggleDarkMode = () => {
    colorMode.value = isDark.value ? "light" : "dark";
  };

  const setDarkMode = (mode: "light" | "dark" | "auto") => {
    colorMode.value = mode;
  };

  const setSystemMode = () => {
    colorMode.value = "auto";
  };

  return {
    isDark,
    isLight,
    isSystem,
    currentMode: readonly(colorMode),
    toggleDarkMode,
    setDarkMode,
    setSystemMode,
  };
};
