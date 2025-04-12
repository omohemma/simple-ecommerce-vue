<template>
  <div class="group relative">
    <router-link :to="{ name: 'product', params: { slug: slug } }">
      <img
        :src="images[0]"
        :alt="title"
        class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
    </router-link>
    <div class="my-4 flex items-start justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <router-link :to="{ name: 'product', params: { slug: slug } }">
            {{ title }}
          </router-link>
        </h3>
        <p class="text-xs mt-1 font-semibold text-gray-400">Category Name</p>
        <p class="text-base mt-1 tracking-tight text-gray-900">${{ price }}</p>
      </div>
      <button
        type="button"
        @click="toggleFavorite"
        v-show="showFavoriteButton"
        :class="isFavorite ? 'text-amber-400' : 'text-gray-300'"
        class="w-8 rounded-md border border-transparent bg-transparent"
      >
        <StarIcon />
      </button>
    </div>
  </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/20/solid'

import { ref } from 'vue'

const isFavorite = ref(false)
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}

const { title, images, price, slug } = defineProps({
  title: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  showFavoriteButton: {
    type: Boolean,
    default: false,
  },
})
</script>
