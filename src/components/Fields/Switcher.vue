<template>
  <v-switch color="primary" :true-value="1" :false-value="0" v-model="value" :label="$t(label)"
    v-bind="$attrs"></v-switch>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
});
const { value } = useField(() => props.name)
</script>

