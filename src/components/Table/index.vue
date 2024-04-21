<template>
  <v-data-table :items="store.items" :headers="store.headers" v-bind="$attrs" :items-per-page="10">
  </v-data-table>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
const store = useAppStore();
</script>
