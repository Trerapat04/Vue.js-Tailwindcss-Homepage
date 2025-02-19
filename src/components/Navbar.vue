<script setup>
import { ref } from 'vue'
import Logo from '../assets/img/icon-store.png'
const toggle = ref(false)
const updateToggle = () => {
  toggle.value = !toggle.value
}
const menuItems = ['Home', 'Service', 'Feature', 'Product', 'Testimonial', 'FAQ']
</script>

<template>
  <nav class="bg-gray-900">
    <div class="container mx-auto max-w-[1320px] relative h-auto p-10 flex flex-col md:flex-row md:justify-between md:items-center md:h-[80px]">
      
      <!-- Logo -->
      <div>
        <a href="#">
          <img 
            :src="Logo" alt="Logo"
            class="max-w-[150px] object-contain transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6 hover:brightness-125 animate-pulse"
          />
        </a>
      </div>

      <!-- เมนูหลัก -->
      <ul :class="['text-gray-50 flex flex-col md:flex md:flex-row my-5', toggle ? 'flex' : 'hidden']">
        <li v-for="item in menuItems" :key="item" class="my-2 md:mx-4">
          <a href="#" class="transition duration-300 ease-in-out transform hover:scale-105 hover:text-green-600">
            {{ item }}
          </a>
        </li>
      </ul>

      <!-- ปุ่ม Login / Sign Up -->
      <ul :class="['flex flex-col md:flex md:flex-row my-5', toggle ? 'flex' : 'hidden']">
        <li class="my-2 md:mx-4">
          <a href="#" class="inline-flex justify-center items-center bg-gray-100 rounded-full py-3 px-6 text-green-600 transition duration-300 ease-in-out transform hover:scale-105">
            Login
          </a>
        </li>
        <li class="my-2 md:mx-4">
          <a href="#" class="inline-flex justify-center items-center bg-green-600 text-white rounded-full py-3 px-6 transition duration-300 ease-in-out transform hover:bg-green-700 hover:text-white hover:scale-105">
            SignUp
          </a>
        </li>
      </ul>

      <!-- Icon เมนู (ใช้ FontAwesome) -->
      <button @click="updateToggle" class="absolute right-5 cursor-pointer text-xl md:hidden transition-all duration-300 ease-in-out transform" :class="toggle ? 'rotate-90' : 'rotate-0'">
        <font-awesome-icon :icon="['fas', 'bars']" class="w-6 h-6 text-gray-600" />
      </button>

    </div>
  </nav>
</template>
