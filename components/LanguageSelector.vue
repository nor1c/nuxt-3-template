<template>
  <div class="profile dropdown nav-icon">
    <button 
      class="icon-button"
      aria-haspopup="true" 
      aria-expanded="true" 
      aria-controls="language-group"
    >
      <div class="i-fa6-solid-language" />
    </button>

    <div class="profile-dropdown dropdown-menu">
      <div 
        id="language-group"
        class="p-1 w-52 toggler"
        aria-labelledby="language-selection-buttons" 
        role="menu"
      >
        <a
          v-for="lang in availableLanguages" 
          @click.prevent="changeLocale(lang.iso)"
        >
          <div class="item" :class="{ 'button-color': (selectedLanguage == lang.iso) }">
            <div :class="lang.icon" class="mr-2" /> {{ lang.name }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { availableLanguages } from '~/utils/locales/availableLanguages'
  import useLocale from '~/stores/locale'
  
  const localeStore = useLocale()
  const selectedLanguage = computed(() => localeStore.locale)
  const changeLocale = (localePrefix: string) => {
    localeStore.changeLocale(localePrefix)
  }
</script>