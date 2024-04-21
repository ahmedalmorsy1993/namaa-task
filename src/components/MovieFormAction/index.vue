<template>
  <v-container>
    <v-toolbar rounded :title="title">
    </v-toolbar>
    <v-row class="mt-5">
      <v-col cols="12" lg="10" class="mx-auto">
        <v-card color="white" rounded class="pa-1">
          <template #text>
            <v-row>
              <v-col cols="12">
                <TextField name="title" :label="$t('label.movie_title')" />
              </v-col>
              <v-col cols="12">
                <TextField type="number" name="year" :label="$t('label.year')" />
              </v-col>
              <v-col cols="12">
                <TextArea name="description" :label="$t('label.movie_description')" />
              </v-col>

            </v-row>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useFormAction } from './useFormAction';

const { title } = useFormAction()
</script>
