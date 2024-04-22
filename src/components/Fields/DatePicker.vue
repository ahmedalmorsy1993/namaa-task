<template>
  <v-text-field density="compact" rounded variant="outlined" v-bind="$attrs" v-model="dateValue"
    :error-messages="errorMessage" append-inner-icon="mdi-calendar-month-outline" @blur="validateField"
    @focus="dialog = true" readonly></v-text-field>
  <Dialog v-model="dialog">
    <v-card class="mx-auto">
      <v-date-picker @update:model-value="onChange" class="mx-auto"></v-date-picker>
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
const { value, errorMessage, validateField, setValue } = useFieldGroup(name);
const dialog = ref(false);
const dateValue = ref();
const onChange = (value: any) => {

  dateValue.value = value
    ? new Date(value as string).toDateString()
    : null;
  setValue(value)

}
watchEffect(() => {
  if (value.value) {
    dateValue.value = value.value

  }
})

</script>
