<template>
  <div>
    <div class="group relative">
      <img
        :src="images[0]"
        :alt="title"
        class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div class="my-4 flex justify-between">
        <div>
          <h3 class="text-sm text-gray-700">
            <a :href="slug">
              <span aria-hidden="true" class="absolute inset-0" />
              {{ title }}
            </a>
          </h3>
        </div>
        <p class="text-sm font-medium text-gray-900">${{ price }}</p>
      </div>
    </div>
    <button
      v-show="showFavoriteButton"
      @click="addToFavorites"
      class="bg-gray-200 rounded-lg w-full p-2.5 text-sm hover:bg-blue-700 cursor-pointer mb-2"
      type="button"
    >
      Add to Favorites
    </button>
  </div>
</template>

<script setup>
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

const addToFavorites = () => {
  console.log('Added to favorites:', title)
}
</script>
