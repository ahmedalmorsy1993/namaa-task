<template>
  <Field v-slot="{ field, errorMessage, handleChange, validate }" :name="name">
    <v-autocomplete
      variant="outlined"
      v-bind="{ field, ...$attrs }"
      @change="handleChange"
      @blur="validate"
      :error-messages="errorMessage"
    >
      <template #append-inner>
        <slot name="append-inner" />
      </template>
      <template #prepend-inner>
        <slot name="prepend-inner" />
      </template>
    </v-autocomplete>
  </Field>
</template>

<script setup lang="ts">
import { Field } from "vee-validate";

defineProps({
  name: {
    type: String,
    default: "",
  },
});
</script>
