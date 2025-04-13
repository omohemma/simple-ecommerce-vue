<script setup>
import 'placeholder-loading/dist/css/placeholder-loading.min.css';

import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <RouterView />
</template>

<style scoped></style>
