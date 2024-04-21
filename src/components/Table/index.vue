<template>
  <v-data-table :items="store.items" :headers="store.headers" v-bind="$attrs" :items-per-page="10">
    <template v-for="(slotName) in slots" :key="slotName" v-slot:[slotName]="scope">
      <slot :name="slotName" v-bind="scope">
      </slot>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
const store = useAppStore();
const tableSlots = useSlots()

const slots = computed(() => Object.keys(tableSlots)) as unknown
</script>
