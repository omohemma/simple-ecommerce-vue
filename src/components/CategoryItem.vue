<template>
  <div class="group relative">
    <img
      :src="image"
      :alt="name"
      class="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
    />
    <h3 class="mt-6 text-sm text-gray-500">
      <a :href="slug">
        <span class="absolute inset-0" />
        {{ name }}
      </a>
    </h3>
  </div>
</template>

<script setup>
const { name, image, slug } = defineProps({
  name : {
    type: String,
    required: true
  },
  slug : {
    type: String,
    required: true
  },
  image : {
    type: String,
    required: true
  }
})
</script>
