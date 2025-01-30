<template>
    <Layout :staticHeader="true" :darkHeader="true">
        <section>
          <Faq />
        </section>
        <footerVue />
    </Layout>
</template>

<script setup name="faq">
import Faq from '../../components/Faq/index.vue';
import footerVue from '../../layout/footer/footer.vue';
import Layout from '../../layout/main/layout.vue';
</script>

<style>
</style>