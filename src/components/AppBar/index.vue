<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Movies</v-toolbar-title>
    <v-spacer></v-spacer>
    <LangSwitcher />
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" :permanent="!$vuetify.display.mobile" :temporary="$vuetify.display.mobile">
    <v-list>
      <v-list-item color="primary" v-for="(item, index) in items" :key="index" :to="item.to" :title="item.title"
        :value="item.value" class="text-capitalize">
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-main>
    <slot />
  </v-main>
</template>
<script setup lang="ts">
const items = [
  { title: 'Movies', value: 'movies', to: '/' }
]
const drawer = ref<boolean>(true)

</script>
