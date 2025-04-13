<template>
  <div>
    <!--    Category Collection-->
    <section class="bg-gray-100">
      <Loader v-if="isLoading" />
      <CategoryCollection v-else :categories="categories">
        <div
          class="flex flex-wrap items-center justify-between text-sm text-blue-700 font-semibold"
        >
          <h2 class="text-2xl font-bold text-gray-900">Shop by Category</h2>
        </div>
        <p class="text-base mt-2 font-light text-gray-900">
          Explore a wide variety of products by browsing through our categorized collections.
        </p>
      </CategoryCollection>
    </section>
  </div>
</template>

<script setup>
import { useCategories } from '@/composables/useCategories.js'
import CategoryCollection from '@/components/CategoryCollection.vue'
import Loader from '@/components/icons/Loader.vue'

const { isLoading, categories } = useCategories()
</script>
