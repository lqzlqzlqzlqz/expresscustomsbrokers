<template>
  <Layout :orangeHeader="true">
    <Carousel />
    <section class="u-clearfix u-section-5" id="carousel_2f32">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div
          class="u-border-5 u-border-palette-1-base u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-group-1"
        >
          <div
            class="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-container-layout-1"
          >
            <h2
              class="u-text u-text-default-lg u-text-default-md u-text-default-sm u-text-default-xl u-text-1"
            >
              AIR FRIGHT
            </h2>
            <p class="u-text u-text-2">
              Air Freight is a fast, efficient and safe way to transport goods
              from and to anywhere in the world. &nbsp;&nbsp;<br />
              <br />Express Customs Brokers Ltd can assist with all your air
              cargo handling and documentation requirements. We offer a very
              competitive rate, with the best combination of cost & transit time.
              &nbsp;&nbsp;<br />
              <br />Our professional team have extensive experience in working
              with clients from a variety of sectors.&nbsp;
            </p>
            <a
              href="javascript:void(0)"
              @click="showForm = true"
              class="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-1"
              >Get A Quote</a
            >
          </div>
        </div>
        <div
          class="u-align-left u-expanded-width-xs u-hidden-sm u-hidden-xs u-left-0 u-palette-1-base u-shape u-shape-1"
        ></div>
        <img
          decoding="async"
          class="u-align-left u-expanded-width-xs u-hidden-sm u-hidden-xs u-image u-image-1"
          data-image-width="500"
          data-image-height="375"
          src="https://expresscustomsbrokers.co.nz/wp-content/uploads/2021/12/205-0.jpeg"
        />
      </div>
    </section>
    <Footer />
    <QuoteForm v-model="showForm" />
  </Layout>
</template>
  <script setup>
import Layout from '../../../layout/main/layout.vue';
import Footer from '../../../layout/footer/footer.vue';
import Carousel from './section_01.vue';
import QuoteForm from '../../../components/QuoteForm/QuoteForm.vue';
import { ref } from 'vue';

const showForm = ref(false);
  </script>
  <style scoped>
@import url(../../../assets/style/services_html.css);
</style>