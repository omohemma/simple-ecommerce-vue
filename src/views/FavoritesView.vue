<template>
  <div>
    <!--  Favorites page  -->
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

      <ProductListing v-else :products="favoriteProducts" :show-favorite-button="true">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Things You Love</h2>
        <p class="text-base mt-2 font-light text-gray-900">
          Keep track of the pieces that caught your eye. Add to cart when the time’s right — we’re not going anywhere.
        </p>
      </ProductListing>
    </section>

  </div>
</template>

<script setup>
import ProductListing from '@/components/ProductListing.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import EmptyContent from '@/components/EmptyContent.vue'

const store = useStore()

const favoriteProducts = computed(() => store.getters['Product/favoriteProducts'])
</script>
