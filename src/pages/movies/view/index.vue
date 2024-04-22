<template>
  <v-container class="fill-height">
    <v-row>
      <v-col cols="12" lg="4" class="mx-auto">
        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-title class="d-flex align-center justify-space-between ga-12">
                <span>{{ $t('label.movie_title') }}</span>
                {{ movie.title }}
              </v-list-item-title>

            </v-list-item>
            <v-list-item>
              <v-list-item-title class="d-flex align-center justify-space-between ga-12">
                <span>{{ $t('label.movie_description') }}</span>
                {{ movie.description }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="d-flex align-center justify-space-between ga-12">
                <span>{{ $t('label.year') }}</span>
                {{ movie.year }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <h2 class="px-4 pt-2">{{ $t('label.actors') }}</h2>

          <v-list>
            <template v-for="(actor, index) in movie.actors" :key="index">
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-title class="d-flex align-center justify-space-between ga-12">
                  <span>{{ $t('label.name') }}</span>
                  {{ actor.name }}
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="d-flex align-center justify-space-between ga-12">
                  <span>{{ $t('label.age') }}</span>
                  {{ actor.age }}
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="d-flex align-center justify-space-between ga-12">
                  <span>{{ $t('label.join_date') }}</span>
                  {{ new Date(actor.join_date).toLocaleDateString() }}
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="d-flex align-center justify-space-between ga-12">
                  <span>{{ $t('label.role') }}</span>
                  {{ actor.role }}
                </v-list-item-title>
              </v-list-item>
            </template>


          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useAppStore } from '@/stores/app';
const route = useRoute()
const store = useAppStore()
const movie = store.getItem(route.params.id)
</script>

<style lang="scss" scoped></style>
