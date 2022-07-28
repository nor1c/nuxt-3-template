import { initLocale } from "./locales/initLocale"

export async function initApp () {
  // init app language
  await initLocale()
}