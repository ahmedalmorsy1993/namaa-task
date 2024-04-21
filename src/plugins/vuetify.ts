/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { ar, en } from "vuetify/locale";

// Composables
import { createVuetify } from 'vuetify'

import Cookies from "js-cookie";
type Locale = "ar" | "en";
const locale = (
  !Cookies.get("locale") ? "en" : Cookies.get("locale")
) as Locale;
export default createVuetify({
  theme: {
    defaultTheme: 'dark'
  },
  locale: {
    locale,
    fallback: "en",
    messages: { ar, en },
    rtl: { ar: locale === "ar" ? true : false },
  },

});
