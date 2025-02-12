<template>
  <Layout :orangeHeader="true">
    <Carousel />
    <section class="u-align-center u-clearfix u-section-4" id="carousel_d65c">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div
          class="u-border-20 u-border-palette-2-base u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-shape u-shape-rectangle u-shape-1"
        ></div>
        <div class="u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1">
          <div class="u-gutter-0 u-layout">
            <div class="u-layout-row">
              <div
                class="u-align-left u-container-style u-layout-cell u-size-30 u-white u-layout-cell-1"
              >
                <div
                  class="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-container-layout-1"
                >
                  <h2 class="u-text u-text-1">OCEAN FREIGHT</h2>
                  <p class="u-text u-text-grey-40 u-text-2">
                    Ocean freight is affordable and reliable. It's the most used
                    shipping method in the world. In most cases, shipments
                    weighing more than 100kg or consisting of multiple cartons
                    will be sent by sea freight. <br /><br />

                    Whether you are sending Less than Container Load or Full
                    Container Load, our team is here to provide you with
                    hassle-free services. We not only connect your business
                    globally, but also simplify your end-to-end logistics in the
                    process.
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-2-base u-btn-1"
                    @click="showForm = true"
                    >Get A Quote</a
                  >
                </div>
              </div>
              <div
                class="u-container-style u-image u-layout-cell u-size-30 u-image-1"
                data-image-width="1980"
                data-image-height="1319"
                style="
                  background-image: url('https://expresscustomsbrokers.co.nz/wp-content/uploads/2021/12/ertwe.jpg');
                "
              >
                <div class="u-container-layout u-container-layout-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    <QuoteForm v-model="showForm" />
  </Layout>
</template>
  <script setup>
import { ref } from 'vue';
import Layout from '../../../layout/main/layout.vue';
import Footer from '../../../layout/footer/footer.vue';
import Carousel from './section_01.vue';
import QuoteForm from '../../../components/QuoteForm/QuoteForm.vue';

const showForm = ref(false);
  </script>
  <style scoped>
@import url(../../../assets/style/services_html.css);
</style>