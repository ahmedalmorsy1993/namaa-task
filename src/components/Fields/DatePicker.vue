<template>
  <v-text-field
    density="compact"
    rounded
    variant="outlined"
    v-bind="$attrs"
    v-model="dateValue"
    :value="dateValue"
    :error-messages="errorMessage"
    append-inner-icon="mdi-calendar-month-outline"
    @blur="validateField"
    @focus="dialog = true"
    readonly
  ></v-text-field>
  <Dialog v-model="dialog">
    <v-card class="mx-auto">
      <v-date-picker
        class="mx-auto"
        v-model="value"
        v-bind="$attrs"
      ></v-date-picker>
    </v-card>
  </Dialog>
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
const dialog = ref(false);
const dateValue = ref();

watchEffect(() => {
  dateValue.value = value.value
    ? new Date(value.value as string).toDateString()
    : null;
});
</script>
