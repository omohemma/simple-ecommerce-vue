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
          <router-link class="" :to="{ name: 'categories' }"> Browse all categories</router-link>
        </div>
        <p class="text-base mt-2 font-light text-gray-900">
          Explore a wide variety of products by browsing through our categorized collections.
        </p>
      </CategoryCollection>
    </section>

    <!-- Products with search filter   -->

    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 capitalize">Products</h1>

        <div class="flex items-center">
          <!--         search use input-->
          <label for="search-field" class="sr-only">Search all products</label>
          <input
            id="search-field"
            v-model="search"
            type="text"
            class="block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm placeholder-gray-400"
            placeholder="Search..."
          />
        </div>
      </div>

      <section aria-labelledby="products-heading" class="pt-6 pb-24">
        <h2 id="products-heading" class="sr-only">Products</h2>

        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <!-- Product grid -->
          <div class="lg:col-span-4 bg-white">
            <Loader v-if="isProductsLoading" />
            <EmptyContent v-else-if="filteredProducts.length === 0">
              <h2 class="text-2xl font-bold tracking-tight text-gray-900">No Products Found</h2>
              <p class="text-base mt-2 font-light text-gray-900">
                We couldn't find any products that match search criteria.
              </p>
            </EmptyContent>
            <ProductListing v-else :products="filteredProducts" />
          </div>
        </div>
      </section>
    </section>

    <!--  Favorites Products  -->
    <section class="bg-white py-16 sm:py-24">
      <EmptyContent v-if="favoriteProducts.length === 0">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Looks like your favorites list is feeling a little lonely.
        </h2>
        <p class="text-base mt-2 font-light text-gray-900">
          Show it some love in
          <router-link
            class="text-indigo-600 cursor-pointer font-semibold"
            :to="{ name: 'products' }"
            >Shop</router-link
          >
          and add some favorite Products!
        </p>
      </EmptyContent>

      <ProductListing v-else :products="favoriteProducts">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Your Favorite Products</h2>
      </ProductListing>
    </section>

    <!--  Last Viewed Products  -->
    <section class="bg-gray-100 py-16 sm:py-24">
      <EmptyContent v-if="lastViewedProducts.length === 0">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Looks like your last viewed products list is feeling a little lonely.
        </h2>
        <p class="text-base mt-2 font-light text-gray-900">
          Show it some love in
          <router-link
            class="text-indigo-600 cursor-pointer font-semibold"
            :to="{ name: 'products' }"
            >Shop</router-link
          >
        </p>
      </EmptyContent>
      <ProductListing v-else :products="lastViewedProducts">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Your Last Viewed Products</h2>
      </ProductListing>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useCategories } from '@/composables/useCategories.js'
import CategoryCollection from '@/components/CategoryCollection.vue'
import ProductListing from '@/components/ProductListing.vue'
import Loader from '@/components/Loader.vue'
import EmptyContent from '@/components/EmptyContent.vue'

const { isLoading, categories } = useCategories(3)
const store = useStore()

const isProductsLoading = ref(false)
const offset = ref(0)
const limit = ref(50)
const getProducts = () => {
  let payload = { offset: offset.value, limit: limit.value }
  isProductsLoading.value = true
  store
    .dispatch('Product/getProducts', payload)
    .then(() => (isProductsLoading.value = false))
    .catch(() => (isProductsLoading.value = false))
}

const products = computed(() => {
  return store.getters['Product/products']
})

onMounted(() => {
  getProducts()
})

// Search
const search = ref('')
const filteredProducts = computed(() => {
  console.log(products.value)
  if (!search.value.trim()) {
    return products.value
  }
  return products.value.filter((product) =>
    product.title.toLowerCase().includes(search.value.toLowerCase()),
  )
})

const favoriteProducts = computed(() => store.getters['Product/favoriteProducts'])
const lastViewedProducts = computed(() => store.getters['Product/lastViewedProducts'])
</script>
