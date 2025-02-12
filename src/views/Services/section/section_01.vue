<!-- <template>

      <section
        id="carousel"
        class="carousel-container"
        @mouseenter="pauseAutoPlay"
        @mouseleave="startAutoPlay"
      >
        <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="carousel-item"
            :style="{ backgroundImage: slide.style }"
          >
            <div class="carousel-content" :class="{ 'fade-in': index === currentIndex }">
              <h2 class="carousel-title">{{ slide.title }}</h2>
              <p v-if="slide.description" class="carousel-description">
                {{ slide.description }}
              </p>
              <ul v-if="slide.list" class="carousel-list">
                <li v-for="(item, i) in slide.list" :key="i" class="carousel-list-item">
                  <span class="list-icon">✔</span> {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button class="carousel-control prev" @click="prevSlide">❮</button>
        <button class="carousel-control next" @click="nextSlide">❯</button>
      </section>

  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  // import Layout from '../../../layout/main/layout.vue';
  // import Footer from '../../../layout/footer/footer.vue';
  
  const currentIndex = ref(0);
  const slides = ref([
    {
      style: "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://expresscustomsbrokers.co.nz/wp-content/uploads/2021/12/tryy-min.jpg')",
      title: 'Import & Export',
      list: [
        'Import and export Customs clearance',
        'Import and export document preparation',
        'Import & Export licensing',
        'Import & Export code applications',
        "Cost calculations for MPI & Customs'Inspections"
      ]
    },
    {
      style: "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://expresscustomsbrokers.co.nz/wp-content/uploads/2021/12/ertwe.jpg')",
      title: 'Shipping Solutions',
      description: 'Ocean freight is affordable and reliable, it’s the most used shipping method in the world. In most cases, shipments weighing more than 100kg or consisting of multiple cartons will be sent by ocean freight.'
    },
    {
      style: "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://expresscustomsbrokers.co.nz/wp-content/uploads/2021/12/gf8b4f2fd6b06b61632339073819e9c68ab221ba71bfecb72bcd7a0dc2ed673517a9e5f4a992c172e8f52ebe51162094f_1280.jpg')",
      title: 'Shipping Solutions',
      description: 'Air Freight is a fast, efficient and safe way to transport goods from and to anywhere of the world. Sending heavy freight shipment is simple and economical.'
    }
  ]);
  
  let interval;
  
  const startAutoPlay = () => {
    interval = setInterval(nextSlide, 5000);
  };
  
  const pauseAutoPlay = () => {
    clearInterval(interval);
  };
  
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  };
  
  const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
  };
  
  onMounted(() => {
    startAutoPlay();
  });
  
  onUnmounted(() => {
    pauseAutoPlay();
  });
  </script>
  
  <style scoped>
  .carousel-container {
    position: relative;
    width: 100%;
    margin: auto;
    overflow: hidden;
    /* border-radius: 10px; */
  }
  
  .carousel-inner {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-item {
    min-width: 100%;
    height: 744px;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  
  .carousel-content {
    position: absolute;
    bottom: 50px;
    left: 10em;
    /* background: rgba(0, 0, 0, 0.6); */
    padding: 20px;
    border-radius: 5px;
    color: white;
    max-width: 500px;
    opacity: 0;
    transition: opacity 2s ease-in-out;
  }
  
  .fade-in {
    opacity: 1;
  }
  
  .carousel-title {
    font-size: 5.5rem;
    margin-bottom: 10px;
    font-weight: 700;
  }
  
  .carousel-description {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .carousel-list {
    list-style: none;
    padding: 0;
  }
  
  .carousel-list-item {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }
  
  .list-icon {
    margin-right: 10px;
    color: #00f;
  }
  
  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    font-size: 24px;
  }
  
  .carousel-control.prev {
    left: 10px;
  }
  
  .carousel-control.next {
    right: 10px;
  }
  /* Add media queries for responsiveness */
@media (max-width: 768px) {
  .carousel-content {
    left: 1em;
    bottom: 20px;
    max-width: 90%;
  }

  .carousel-title {
    font-size: 3rem;
  }

  .carousel-description {
    font-size: 16px;
  }
}
  </style> -->

  <template>
  <!-- <section
      id="carousel"
      class="carousel-container"
      @mouseenter="pauseAutoPlay"
      @mouseleave="startAutoPlay"
    >
      <div 
        class="carousel-inner" 
        ref="carouselInner"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="carousel-item"
          :style="{ backgroundImage: slide.style }"
        >
          <div class="carousel-content" :class="{ 'fade-in': index === currentIndex }">
            <h2 class="carousel-title">{{ slide.title }}</h2>
            <p v-if="slide.description" class="carousel-description">
              {{ slide.description }}
            </p>
            <ul v-if="slide.list" class="carousel-list">
              <li v-for="(item, i) in slide.list" :key="i" class="carousel-list-item">
                <span class="list-icon">✔</span> {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button class="carousel-control prev" @click="prevSlide">❮</button>
      <button class="carousel-control next" @click="nextSlide">❯</button>
    </section> -->
  <div>
    <swiper
      class="swiper-container"
      :slides-per-view="1"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :modules="modules"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      navigation
      :loop="true"
    >
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
        class="carousel-item"
        :style="{ backgroundImage: slide.style }"
      >
        <div
          class="carousel-content"
        >
          <h2 class="carousel-title">{{ slide.title }}</h2>
          <p v-if="slide.description" class="carousel-description">
            {{ slide.description }}
          </p>
          <ul v-if="slide.list" class="carousel-list">
            <li
              v-for="(item, i) in slide.list"
              :key="i"
              class="carousel-list-item"
            >
              <span class="list-icon">✔</span> {{ item }}
            </li>
          </ul>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
  
  <script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
const modules = [Navigation, Pagination, A11y, Autoplay];

const originalSlides = [
  {
    style: "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://expresscustomsbrokers.co.nz/wp-content/uploads/2021/12/tryy-min.jpg')",
    title: 'Import & Export',
    list: [
      'Import and export Customs clearance',
      'Import and export document preparation',
      'Import & Export licensing',
      'Import & Export code applications',
      "Cost calculations for MPI & Customs' Inspections"
    ]
  },
  {
    style: "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://expresscustomsbrokers.co.nz/wp-content/uploads/2021/12/ertwe.jpg')",
    title: 'Shipping Solutions',
    description: 'Ocean freight is affordable and reliable, it’s the most used shipping method in the world. In most cases, shipments weighing more than 100kg or consisting of multiple cartons will be sent by ocean freight.'
  },
  {
    style: "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://expresscustomsbrokers.co.nz/wp-content/uploads/2021/12/gf8b4f2fd6b06b61632339073819e9c68ab221ba71bfecb72bcd7a0dc2ed673517a9e5f4a992c172e8f52ebe51162094f_1280.jpg')",
    title: 'Shipping Solutions',
    description: 'Air Freight is a fast, efficient and safe way to transport goods from and to anywhere of the world. Sending heavy freight shipment is simple and economical.'
  }
];
const slides = ref([...originalSlides]);
const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};
const onSlideChange = () => {
  console.log('slide change');
};

  </script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  margin: auto;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%;
  height: 744px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.carousel-content {
  position: absolute;
  bottom: 50px;
  left: 10em;
  /* background: rgba(0, 0, 0, 0.6); */
  padding: 20px;
  border-radius: 5px;
  color: white;
  max-width: 500px;
  opacity: 0;
  transition: opacity 2s ease-in-out;
  animation: fadeIn 2s forwards;
}

.fade-in {
  opacity: 1;
}

@keyframes fadeIn {
  0% {
    opacity: 0; /* 初始透明度为0 */
  }
  100% {
    opacity: 1; /* 最终透明度为1 */
  }
}

.carousel-title {
  font-size: 5.5rem;
  margin-bottom: 10px;
  font-weight: 700;
}

.carousel-description {
  font-size: 18px;
  margin-bottom: 10px;
}

.carousel-list {
  list-style: none;
  padding: 0;
}

.carousel-list-item {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}

.list-icon {
  margin-right: 10px;
  color: #00f;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 24px;
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}
/* Add media queries for responsiveness */
@media (max-width: 768px) {
  .carousel-content {
    left: 1em;
    bottom: 20px;
    max-width: 90%;
  }

  .carousel-title {
    font-size: 3rem;
  }

  .carousel-description {
    font-size: 16px;
  }
}
</style>