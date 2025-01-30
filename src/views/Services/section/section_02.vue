<template>
  <Layout :orangeHeader="true">
    <Carousel />
    <section class="u-clearfix u-section-3 mb-93" id="sec-fd61">
      <div class="u-clearfix u-sheet u-valign-middle-xs u-sheet-1">
        <div
          class="u-border-5 u-border-palette-1-base u-container-style u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-group u-group-1"
        >
          <div class="u-container-layout u-valign-middle u-container-layout-1">
            <h2 class="u-text u-text-default u-text-1">
              IMPORT &amp; EXPORT SERVICE&nbsp;
            </h2>
            <p class="u-text u-text-2">
              We are committed to our customer’s success and satisfaction, with
              us you get great service wherever your cargo comes from!&nbsp;
              &nbsp; &nbsp; &nbsp;&nbsp;<br />
              <br />Our services include<br />&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Import and export custom clearance<br />&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Import and export documentation<br />&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Import &amp; Export licensing<br />&nbsp;
              ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Import &amp; Export
              code&nbsp;<br />&nbsp; ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Costing calculations<br />&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              MPI &amp; Customs’ Inspections
            </p>
            <a
              href="javascript:void(0)"
              class="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-1"
              @click="showForm = true"
              >Get Quote</a
            >
          </div>
        </div>
        <div
          class="u-align-left u-hidden-sm u-hidden-xs u-left-0 u-palette-1-base u-shape u-shape-1"
        ></div>
        <img
          decoding="async"
          class="u-align-left u-hidden-sm u-hidden-xs u-image u-image-1"
          data-image-width="500"
          data-image-height="300"
          src="https://expresscustomsbrokers.co.nz/wp-content/uploads/2021/12/205-0-2.jpeg"
        />
      </div>
    </section>
    <Footer />
    <QuoteForm v-model="showForm" />
  </Layout>
</template>

<script setup>
import {ref} from 'vue';
import Layout from '../../../layout/main/layout.vue';
import Footer from '../../../layout/footer/footer.vue';
import Carousel from './section_01.vue';
import QuoteForm from '../../../components/QuoteForm/QuoteForm.vue';

const showForm = ref(false);
</script>

<style scoped>
@import url(../../../assets/style/services_html.css);
.mb-93 {
  margin: 2rem;
}
</style>