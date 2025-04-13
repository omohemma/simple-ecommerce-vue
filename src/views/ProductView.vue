<template>
  <div class="bg-white">
    <Loader v-if="isLoading" />
    <div v-else-if="Object.keys(product).length > 0 && !isLoading" class="pt-6">
      <!-- Image gallery -->
      <div
        class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8"
      >
        <img
          :src="product?.images[0]"
          :alt="product.title"
          class="hidden size-full rounded-lg object-cover lg:block"
        />
        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <img
            :src="product?.images[1]"
            :alt="product.title"
            class="aspect-3/2 w-full rounded-lg object-cover"
          />
          <img
            :src="product?.images[2]"
            :alt="product.title"
            class="aspect-3/2 w-full rounded-lg object-cover"
          />
        </div>
        <img
          :src="product?.images[2]"
          :alt="product.title"
          class="aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto"
        />
      </div>

      <!-- Product info -->
      <div
        class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24"
      >
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {{ product.title }}
          </h1>
          <h3 class="text-base mt-2 font-semibold text-gray-500">{{ product?.category?.name }}</h3>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:row-span-3 lg:mt-0">
          <h2 class="sr-only">Product information</h2>
          <p class="text-3xl tracking-tight text-gray-900">${{ product.price }}</p>

          <form class="flex items-center gap-2 mt-10">
            <button
              type="submit"
              class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
            >
              Add to cart
            </button>
            <button
              type="button"
              aria-label="Add to favorites"
              @click="toggleFavorite(product.id, isFavorite)"
              :class="isFavorite ? 'text-amber-400' : 'text-gray-300'"
              class="w-14 rounded-md border border-transparent bg-transparent"
            >
              <StarIcon />
            </button>
          </form>
        </div>

        <div
          class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16"
        >
          <!-- Description -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">{{ product.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { StarIcon } from '@heroicons/vue/20/solid'
import { computed, onMounted, reactive, ref } from 'vue'
import Loader from '@/components/Loader.vue'

const store = useStore()
const route = useRoute()

// Product
const isLoading = ref(false)
const slug = computed(() => route.params.slug)
const getProduct = () => {
  isLoading.value = true
  store
    .dispatch('Product/getProduct', slug.value)
    .then(() => (isLoading.value = false))
    .catch(() => (isLoading.value = false))
}

const product = computed(() => {
  return store.getters['Product/product']
})

onMounted(() => {
  getProduct()
})

// Favorite Product
const isFavorite = computed(() => {
  return store.getters['Product/isProductFavorite'](product.value.id)
})
const toggleFavorite = (id, status) => {
  console.log(id)
  console.log(status)
  if (!status) {
    store.dispatch('Product/addProductToFavorites', id)
  } else {
    store.dispatch('Product/removeProductFromFavorites', id)
  }
}
</script>
