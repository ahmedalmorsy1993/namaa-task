<template>
  <v-app>
    <AppBar>
      <router-view #="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </AppBar>
  </v-app>
</template>
