<template>
  <v-text-field
    density="compact"
    rounded
    variant="outlined"
    v-bind="$attrs"
    v-model="value"
    :error-messages="errorMessage"
    @blur="validateField"
  >
    <template #append-inner>
      <slot name="append-inner" />
    </template>
    <template #prepend-inner>
      <slot name="prepend-inner" />
    </template>
  </v-text-field>
</template>

<script setup lang="ts">
import { useFieldGroup } from "./useFieldGroup";
const { name } = defineProps({
  name: {
    type: String,
    default: "",
  },
});
const { value, errorMessage, validateField } = useFieldGroup(name);
</script>
