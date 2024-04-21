<template>
  <v-container>
    <v-toolbar rounded color="default" class="mb-4">
      <v-btn to="/movies/add" color="default" size="large" variant="elevated">
        add Movie
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>
    <Table>
      <template #item.actors="{ item }">
        {{ item.actors.length }}
      </template>
      <template #item.actions="{ item }">
        <div class="d-flex align-center ga-2">
          <v-btn size="small" icon="mdi-pencil" color="primary"></v-btn>
          <v-btn size="small" icon="mdi-delete" color="error"></v-btn>
          <v-btn size="small" icon="mdi-eye" color="warning"></v-btn>
        </div>
      </template>
    </Table>
  </v-container>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';

const store = useAppStore()
store.setHeaders([
  { title: 'movie_title', key: 'title' },
  { title: 'movie_year', key: 'year' },
  { title: 'number_of_actors', key: 'actors' },
  { title: 'actions', key: "actions" },
])

watchEffect(() => {
  if (localStorage.getItem('items')) {
    const items = JSON.parse(localStorage.getItem('items') as string)
    store.setItems(items)
  }
})
</script>
