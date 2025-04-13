<template>
  <div>
    <!--  Products Listing  -->
    <section class="bg-white py-16 sm:py-24">
      <Loader v-if="isLoading"/>
      <ProductListing v-else :products="products" :show-favorite-button="true">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Top Picks Just for You</h2>
        <p class="text-base mt-2 font-light text-gray-900">
          Discover our curated selection of bestsellers, trending items, and everyday must-haves —
          all in one place.
        </p>
      </ProductListing>

      <!-- Pagination -->
      <div
        class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      >
        <div class="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >Previous</a
          >
          <a
            href="#"
            class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >Next</a
          >
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
          <div>
            <nav
              class="isolate inline-flex -space-x-px rounded-md shadow-xs"
              aria-label="Pagination"
            >
              <a
                href="#"
                class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span class="sr-only">Previous</span>
                <ChevronLeftIcon class="size-5" aria-hidden="true" />
              </a>
              <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
              <a
                href="#"
                aria-current="page"
                class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >1</a
              >
              <a
                href="#"
                class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >2</a
              >
              <a
                href="#"
                class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >3</a
              >
              <span
                class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0"
                >...</span
              >
              <a
                href="#"
                class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >8</a
              >
              <a
                href="#"
                class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >9</a
              >
              <a
                href="#"
                class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >10</a
              >
              <a
                href="#"
                class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span class="sr-only">Next</span>
                <ChevronRightIcon class="size-5" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ProductListing from '@/components/ProductListing.vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid/index.js'
import { ref, onMounted, computed } from 'vue'
import Loader from '@/components/Loader.vue'
import { useStore } from 'vuex'

const store = useStore()

const offset = ref(0)
const limit = ref(10)
const isLoading = ref(false)
const getProducts = () => {
  let payload = { offset: offset.value, limit: limit.value }
  isLoading.value = true
  store
    .dispatch('Product/getProducts', payload)
    .then(() => (isLoading.value = false))
    .catch(() => (isLoading.value = false))
}

const products = computed(() => {
  return store.getters['Product/products']
})

onMounted(() => {
  getProducts()
})
</script>
