<template>
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <slot></slot>
    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <ProductItem
        v-for="{ id, title, images, price, slug, category } in products"
        :key="id"
        :id="id"
        :title="title"
        :images="images"
        :price="price"
        :slug="slug"
        :category="category"
        :showFavoriteButton="showFavoriteButton"
      />
    </div>
  </div>
</template>

<script setup>
import ProductItem from '@/components/ProductItem.vue'

const { products } = defineProps({
  products: {
    type: Array,
    required: true,
  },
  showFavoriteButton: {
    type: Boolean,
    default: false,
  },
})
</script>
