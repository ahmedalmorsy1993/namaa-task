<template>
  <v-container>
    <v-toolbar rounded color="default" class="mb-4">
      <v-btn to="/movies/add" color="default" size="large" variant="elevated">
        add Movie
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card class="pa-4 ">
      <v-row>
        <v-col cols="12" lg="3">
          <SearchFilter :label="$t('label.movie_title')" filter-name="title" />
        </v-col>
        <v-col cols="12" lg="3">
          <SearchFilter type="number" :label="$t('label.year')" filter-name="year" />
        </v-col>
        <v-col cols="12" lg="3">
          <SearchFilter type="number" :label="$t('label.actors_number')" filter-name="actors" />
        </v-col>
      </v-row>
    </v-card>
    <Table>
      <template #item.actors="{ item }">
        {{ item.actors?.length }}
      </template>
      <template #item.actions="{ item }">
        <div class="d-flex align-center ga-2">
          <v-btn :to="`/movies/edit/${item.id}`" size="small" icon="mdi-pencil" color="primary"></v-btn>
          <v-btn :to="`/movies/view/${item.id}`" size="small" icon="mdi-eye" color="warning"></v-btn>
          <v-btn @click="store.removeItem(item.id)" size="small" icon="mdi-delete" color="error"></v-btn>
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
