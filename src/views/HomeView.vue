<template>
  <div>
    <CategoryCollection :categories="categories" >
      <div class="flex items-center justify-between text-sm text-blue-700 font-semibold">
        <h2 class="text-2xl font-bold text-gray-900">Collections</h2>
        <a class="" href="#"> Browse all categories</a>
      </div>
    </CategoryCollection>
  </div>
</template>

<script setup>
import CategoryCollection from '@/components/CategoryCollection.vue'

const categories = [
  {
    "id": 2,
    "name": "Electronics2",
    "slug": "electronics2",
    "image": "https://i.imgur.com/ZANVnHE.jpeg",
    "creationAt": "2025-04-10T21:22:01.000Z",
    "updatedAt": "2025-04-11T05:11:36.000Z"
  },
  {
    "id": 3,
    "name": "Furniture",
    "slug": "furniture",
    "image": "https://i.imgur.com/Qphac99.jpeg",
    "creationAt": "2025-04-10T21:22:01.000Z",
    "updatedAt": "2025-04-10T21:22:01.000Z"
  },
  {
    "id": 4,
    "name": "Shoes",
    "slug": "shoes",
    "image": "https://i.imgur.com/qNOjJje.jpeg",
    "creationAt": "2025-04-10T21:22:01.000Z",
    "updatedAt": "2025-04-10T21:22:01.000Z"
  },
]
</script>
