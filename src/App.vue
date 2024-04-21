<template>
  <v-app>
    <v-main>
      <router-view #="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
//
</script>
