<template>
  <div>
    <!--  Products Listing  -->
    <section class="bg-white py-16 sm:py-24">
      <Loader v-if="isLoading" />
      <ProductListing v-else :products="products" :show-favorite-button="true">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Top Picks Just for You</h2>
        <p class="text-base mt-2 font-light text-gray-900">
          Discover our curated selection of bestsellers, trending items, and everyday must-haves —
          all in one place.
        </p>
      </ProductListing>

      <!-- Pagination: hardcoded total pages because API doesn't provide it  -->
      <Pagination
        :total-pages="totalPages"
        :current-page="currentPage"
        :visible-pages="5"
        @page-change="currentPage = $event"
      />
    </section>
  </div>
</template>

<script setup>
import ProductListing from '@/components/ProductListing.vue'
import { ref, onMounted, computed, watch } from 'vue'
import Loader from '@/components/Loader.vue'
import { useStore } from 'vuex'
import Pagination from '@/components/Pagination.vue'
import { usePagination } from '@/composables/usePagination.js'

const store = useStore()

const isLoading = ref(false)
const getProducts = () => {
  let payload = { offset: offset.value, limit: limit.value }
  isLoading.value = true
  store
    .dispatch('Product/getProducts', payload)
    .then(() => (isLoading.value = false))
    .catch(() => (isLoading.value = false))
}

const { offset, limit, currentPage, totalPages } = usePagination(getProducts)

const products = computed(() => {
  return store.getters['Product/products']
})

onMounted(() => {
  getProducts()
})
</script>
