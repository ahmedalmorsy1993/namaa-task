<template>
  <v-text-field density="compact" rounded variant="outlined" v-bind="$attrs" v-model="dateValue"
    :error-messages="errorMessage" append-inner-icon="mdi-calendar-month-outline" @blur="validateField"
    @focus="dialog = true" readonly></v-text-field>
  <Dialog v-model="dialog">
    <v-card class="mx-auto">
      <v-date-picker @update:model-value="onChange" v-model="date" class="mx-auto"></v-date-picker>
    </v-card>
  </Dialog>
</template>

<script setup lang="ts">
import { useFieldGroup } from "./useFieldGroup";
const date = ref(null)
const { name } = defineProps({
  name: {
    type: String,
    default: "",
  },
});
const { value, errorMessage, validateField, setValue } = useFieldGroup(name);
const dialog = ref(false);
const dateValue = ref();
const onChange = (value: any) => {
  dateValue.value = value
    ? new Date(value as string).toDateString()
    : null;
  setValue(value)
  date.value = value
  dialog.value = false

}
watchEffect(() => {
  if (value.value) {
    dateValue.value = value.value
    date.value = new Date(value.value as string) as any

  }
})

</script>
