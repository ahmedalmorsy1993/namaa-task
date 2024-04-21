<template>
  <v-dialog transition="page" :activator="activator" max-width="720" min-height="350" scrollable v-bind="$attrs">
    <template v-slot:default="{ isActive }">
      <v-card class="rounded-20 py-9 px-10">
        <template #title>
          <div>
            <div class="d-flex align-center justify-space-between">
              <h2 class="text-primary text-24">{{ title }}</h2>
              <v-icon @click="isActive.value = false" size="x-small" class="cursor-pointer align-self-center">
                mdi-close
              </v-icon>
            </div>
            <v-divider class="mt-5"></v-divider>
          </div>
        </template>
        <template #text>
          <slot />
        </template>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
import { IDialogProps } from "./types";
defineProps<IDialogProps>();
</script>
