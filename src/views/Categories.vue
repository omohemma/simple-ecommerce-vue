<template>
  <div>
    <!--    Category Collection-->
    <section class="bg-gray-100">
      <PlaceholderContainer v-if="isCategoriesLoading">
        <CategoryPlaceholder v-for="i in 9" :key="i" />
      </PlaceholderContainer>
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
import { computed, onMounted, ref } from 'vue'
import store from '@/store/index.js'
import CategoryCollection from '@/components/CategoryCollection.vue'
import CategoryPlaceholder from '@/components/CategoryPlaceholder.vue'
import PlaceholderContainer from '@/components/PlaceholderContainer.vue'

const isCategoriesLoading = ref(false)
const getCategories = () => {
  isCategoriesLoading.value = true
  store
    .dispatch('Category/getCategories')
    .then(() => {
      isCategoriesLoading.value = false
    })
    .catch(() => {
      isCategoriesLoading.value = false
    })
}
const categories = computed(() => store.getters['Category/categories'])

onMounted(() => {
  getCategories()
})
</script>
