<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// ข้อมูลสินค้า
const products = ref([
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 1990,
    image: 'https://hottipsusa.com/cdn/shop/products/Pro_Overear_Wireless_Headphones_Main_White_websize_1024x1024.jpg?v=1670266033',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 2990,
    image: 'https://www.leafstudios.in/cdn/shop/files/1_1099cd20-7237-4bdf-a180-b7126de5ef3d_800x.png?v=1722230645',
  },
  {
    id: 3,
    name: 'Gaming Mouse',
    price: 1290,
    image: 'https://s.alicdn.com/@sc04/kf/H2d7b5546d1414939960d5ce4d2e1c45bC.jpg_720x720q50.jpg',
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    price: 3490,
    image: 'https://mediam.istudio.store/media/catalog/product/cache/3b7e899159f673788675d87d1d929a98/n/u/nuphy_air60_ultra-slim_keyboard.001_1_1.jpeg',
  },
])

// ตั้งค่า state สำหรับแสดงสินค้าเมื่อเลื่อนถึง
const isVisible = ref(false)
const sectionRef = ref(null)

// ฟังก์ชันเช็กการมองเห็นของ section
const handleIntersection = (entries) => {
  if (entries[0].isIntersecting) {
    isVisible.value = true
  } else {
    isVisible.value = false
  }
}

// ใช้ IntersectionObserver
let observer
onMounted(() => {
  observer = new IntersectionObserver(handleIntersection, { threshold: 0.3 })
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

// ล้าง observer เมื่อ component ถูกทำลาย
onUnmounted(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value)
  }
})
</script>

<template>
  <div ref="sectionRef" class="container mx-auto px-5 py-10">
    <h2 class="cursor-pointer transition duration-300 ease-in-out text-3xl font-bold text-center text-gray-800 mb-8 hover:text-green-600">
      Featured Products
    </h2>

    <!-- Grid Layout -->
    <div
      class="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-1000 ease-in-out"
      :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-20 opacity-0': !isVisible }"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="group bg-white hover:bg-gray-900 shadow-md rounded-lg overflow-hidden p-4 transition duration-300 transform hover:scale-105"
      >
        <img
          :src="product.image"
          alt=""
          class="w-full h-auto object-cover mb-4 cursor-pointer"
        />

        <h3 class="overflow-hidden transition duration-300 ease-in-out text-lg font-semibold text-gray-900 group-hover:text-green-50 cursor-pointer">
          {{ product.name }}
        </h3>

        <p class="text-gray-600 mb-3">฿{{ product.price }}</p>

        <div>
          <button class="bg-gray-800 text-white px-4 py-2 rounded-md transition hover:bg-gray-900 cursor-pointer">
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
