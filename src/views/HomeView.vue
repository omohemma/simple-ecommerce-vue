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

    <!--  Favorites Products  -->
    <section class="bg-white py-16 sm:py-24">
      <EmptyContent v-if="favoriteProducts.length === 0">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Looks like your favorites list is feeling a little lonely.
        </h2>
        <p class="text-base mt-2 font-light text-gray-900">
          Show it some love in <router-link class="text-indigo-600 cursor-pointer font-semibold" :to="{ name: 'products' }">Shop</router-link> and add
          some favorite Products!
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
          Show it some love in <router-link class="text-indigo-600 cursor-pointer font-semibold" :to="{ name: 'products' }">Shop</router-link>
        </p>
      </EmptyContent>
      <ProductListing v-else :products="lastViewedProducts">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Your Last Viewed Products</h2>
      </ProductListing>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useCategories } from '@/composables/useCategories.js'
import CategoryCollection from '@/components/CategoryCollection.vue'
import ProductListing from '@/components/ProductListing.vue'
import Loader from '@/components/Loader.vue'
import EmptyContent from '@/components/EmptyContent.vue'

const { isLoading, categories } = useCategories(3)
const store = useStore()

const favoriteProducts = computed(() => store.getters['Product/favoriteProducts'])
const lastViewedProducts = computed(() => store.getters['Product/lastViewedProducts'])

</script>
