<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

// นำเข้ารูปภาพ
import Header2 from '../assets/img/h-02.png'
import gifImage from '../assets/img/y.gif'
import gif2 from '../assets/img/y-2.gif'

// รายการสไลด์
const slides = ref([
  {
    title: 'Welcome to Trerapat',
    highlight: 'Online Store',
    text: '"Experience the Best Shopping at Trerapat."',
    buttonText: 'Register →',
    buttonColor: 'bg-green-600 hover:bg-green-700',
    image: gif2
  },
  {
    title: 'Discover Amazing Deals',
    highlight: 'Shop Smart, Save More!',
    text: '"Enjoy exclusive discounts and offers."',
    buttonText: 'Shop Now →',
    buttonColor: 'bg-[#50C878] hover:bg-green-700',
    image: Header2
  },
  {
    title: 'Fast & Reliable Service',
    highlight: 'Your Orders, Right on Time!',
    text: '"We ensure fast and secure service."',
    buttonText: 'Learn More →',
    buttonColor: 'bg-red-600 hover:bg-red-700',
    image: gifImage
  }
])
</script>

<template>
  <div class="bg-zinc-200 h-auto md:h-[600px] flex items-center">
    <div class="container mx-auto max-w-[1320px] p-10">
      
      <Swiper
        class="header-swiper"
        :modules="[Pagination]"
        :spaceBetween="50"
        :slidesPerView="1"
        :pagination="{ clickable: true }"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <div class="flex flex-col md:flex-row md:justify-between md:items-center">
            
            <!-- Text Content -->
            <div class="cursor-pointer">
              <h1 class="group transition duration-300 ease-in-out text-[64px] font-semibold text-gray-800 hover:text-green-600">
                {{ slide.title }} <br />
                <span class="transition duration-300 ease-in-out text-[#4CAF4F] group-hover:text-gray-800">
                  {{ slide.highlight }}
                </span>
              </h1>
              <p class="text-[#717171] mt-5">
                {{ slide.text }}
              </p>
              <a href="#" 
                class="mt-5 inline-flex justify-center items-center text-white py-3 px-6 transition duration-300 ease-in-out transform hover:text-white hover:scale-105"
                :class="slide.buttonColor"
              >
                {{ slide.buttonText }}
              </a>
            </div>

            <!-- Image -->
            <div class="w-full md:w-[500px]">
              <img :src="slide.image" alt="Slide Image" class="w-full object-contain" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
    </div>
  </div>
</template>

