<template>
  <v-container>
    <v-toolbar rounded color="default" class="mb-4">
      <v-btn to="/add-movie" color="default" size="large" variant="elevated">
        add Movie
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>
    <Table />
  </v-container>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';

const store = useAppStore()
store.setHeaders([
  { title: 'movie_title' },
  { title: 'movie_year' },
  { title: 'number_of_actors' },
  { title: 'actions' },
])
</script>
