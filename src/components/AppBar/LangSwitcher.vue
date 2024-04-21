<template>
  <v-menu transition="slide-x-transition">
    <template v-slot:activator="{ props, isActive }">
      <v-btn variant="flat" rounded v-bind="props">
        <div class="d-flex gap-5 align-center">
          <span> {{ lang?.name }}</span>
          <v-icon class="transition" :class="isActive && 'rotate'">mdi-chevron-down</v-icon>
        </div>
      </v-btn>
    </template>

    <v-list :lines="false" bg-color="black" class="mt-4">
      <v-list-item v-for="(item, index) in items" density="compact" :key="index"
        :class="item.code == lang?.code && 'bg-primary text-white'" @click="switchLang(item.code)">
        <v-list-item-title class="text-14 text-capitalize">
          {{ item.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script setup lang="ts">
import Cookies from "js-cookie";
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();

const items = [
  { code: "ar", name: t("arabic") },
  { code: "en", name: t("english") },
];
const lang = items.find((el) => el.code == locale.value);
const switchLang = (value: string) => {
  nextTick(() => {
    Cookies.set("locale", value);
    window.location.reload();
  });
};
</script>
