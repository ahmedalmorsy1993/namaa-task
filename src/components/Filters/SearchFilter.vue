<template>
  <v-text-field flat rounded v-bind="$attrs" variant="outlined" density="compact" hide-details
    append-inner-icon="mdi-magnify" @update:model-value="handleFilter">
    <template #append-inner>
      <slot name="append-inner" />
    </template>
    <template #prepend-inner>
      <slot name="prepend-inner" />
    </template>
  </v-text-field>
</template>

<script setup lang="ts">
import { useFilter, Props } from "@/composables/useFilter";

const { filterName } = defineProps<Props>();

const { handleFilter } = useFilter({ filterName });
</script>
