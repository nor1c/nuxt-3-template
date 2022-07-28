<template>
  <div 
    class="icon-button w-auto"
    @click.native="$colorMode.preference === 'dark' ? $colorMode.preference = 'light' : $colorMode.preference = 'dark'" 
  >
    <div 
      :class="[
        $colorMode.value === 'light' ? 'i-fluent-weather-moon-48-regular' : 'i-line-md-sunny-outline-loop'
      ]"
    />
  </div>
</template>

<script setup lang="ts">
  // 
</script>