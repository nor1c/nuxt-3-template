<template>
  <div class="text-center italic">
    <h1>~ {{ $t('helloWorld') }} ~</h1>
  </div>

  <div class="mt-4">
    <div class="feature">
      <LanguageSelector />
      <DarkModeSwitcher />
    </div>
  </div>
</template>