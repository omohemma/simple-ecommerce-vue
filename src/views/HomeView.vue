<template>
  <div>
    <!--    Category Collection-->
    <section class="bg-gray-100">
      <Loader v-if="isLoading"/>
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
      <ProductListing :products="products">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Your Favorite Products</h2>
      </ProductListing>
    </section>

    <!--  Last Viewed Products  -->
    <section class="bg-gray-100 py-16 sm:py-24">
      <ProductListing :products="products">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Your Last Viewed Products</h2>
      </ProductListing>
    </section>
  </div>
</template>

<script setup>
import { useCategories } from '@/composables/useCategories.js'
import CategoryCollection from '@/components/CategoryCollection.vue'
import ProductListing from '@/components/ProductListing.vue'
import Loader from '@/components/icons/Loader.vue'

const { isLoading, categories } = useCategories(3)

const products = [
  {
    id: 26,
    title: 'Sleek Mirror Finish Phone Case',
    slug: 'sleek-mirror-finish-phone-case',
    price: 27,
    description:
      "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
    category: {
      id: 2,
      name: 'Electronics2',
      slug: 'electronics2',
      image: 'https://i.imgur.com/ZANVnHE.jpeg',
      creationAt: '2025-04-10T21:22:01.000Z',
      updatedAt: '2025-04-11T05:11:36.000Z',
    },
    images: [
      'https://i.imgur.com/yb9UQKL.jpeg',
      'https://i.imgur.com/m2owtQG.jpeg',
      'https://i.imgur.com/bNiORct.jpeg',
    ],
    creationAt: '2025-04-10T21:22:01.000Z',
    updatedAt: '2025-04-10T21:22:01.000Z',
  },
  {
    id: 35,
    title: 'Futuristic Holographic Soccer Cleats',
    slug: 'futuristic-holographic-soccer-cleats',
    price: 39,
    description:
      "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
    category: {
      id: 4,
      name: 'Shoes',
      slug: 'shoes',
      image: 'https://i.imgur.com/qNOjJje.jpeg',
      creationAt: '2025-04-10T21:22:01.000Z',
      updatedAt: '2025-04-10T21:22:01.000Z',
    },
    images: [
      'https://i.imgur.com/qNOjJje.jpeg',
      'https://i.imgur.com/NjfCFnu.jpeg',
      'https://i.imgur.com/eYtvXS1.jpeg',
    ],
    creationAt: '2025-04-10T21:22:01.000Z',
    updatedAt: '2025-04-10T21:22:01.000Z',
  },
  {
    id: 40,
    title: 'Futuristic Silver and Gold High-Top Sneaker',
    slug: 'futuristic-silver-and-gold-high-top-sneaker',
    price: 68,
    description:
      'Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!',
    category: {
      id: 4,
      name: 'Shoes',
      slug: 'shoes',
      image: 'https://i.imgur.com/qNOjJje.jpeg',
      creationAt: '2025-04-10T21:22:01.000Z',
      updatedAt: '2025-04-10T21:22:01.000Z',
    },
    images: [
      'https://i.imgur.com/npLfCGq.jpeg',
      'https://i.imgur.com/vYim3gj.jpeg',
      'https://i.imgur.com/HxuHwBO.jpeg',
    ],
    creationAt: '2025-04-10T21:22:01.000Z',
    updatedAt: '2025-04-10T21:22:01.000Z',
  },
  {
    id: 41,
    title: 'Futuristic Chic High-Heel Boots',
    slug: 'futuristic-chic-high-heel-boots',
    price: 36,
    description:
      'Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.',
    category: {
      id: 4,
      name: 'Shoes',
      slug: 'shoes',
      image: 'https://i.imgur.com/qNOjJje.jpeg',
      creationAt: '2025-04-10T21:22:01.000Z',
      updatedAt: '2025-04-10T21:22:01.000Z',
    },
    images: [
      'https://i.imgur.com/HqYqLnW.jpeg',
      'https://i.imgur.com/RlDGnZw.jpeg',
      'https://i.imgur.com/qa0O6fg.jpeg',
    ],
    creationAt: '2025-04-10T21:22:01.000Z',
    updatedAt: '2025-04-10T21:22:01.000Z',
  },
]
</script>
