<template>
  <v-radio-group
    :error="!!errorMessage"
    density="compact"
    inline
    v-bind="$attrs"
    v-model="value"
    :error-messages="errorMessage"
    color="primary"
  >
    <v-radio
      v-for="(option, index) in options"
      :key="index"
      v-bind="option"
    ></v-radio>
  </v-radio-group>
</template>

<script setup lang="ts">
import { useFieldGroup } from "./useFieldGroup";
interface IOption {
  name?: string;
  value: string;
  label: string;
}
interface IProps {
  name: string;
  options: IOption[];
}
const { name, options } = defineProps<IProps>();
const { value, errorMessage } = useFieldGroup(name);
</script>
