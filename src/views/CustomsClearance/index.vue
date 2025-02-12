<template>
  <Layout :staticHeader="true" :darkHeader="true">
    <section class="ca-content">
      <h2>Customs Clearance Assistance</h2>
      <p>
        Recently moving to NZ from overseas and wishing to bring your household
        personal effects in?
      </p>
      <p>
        Having purchased online goods from overseas valued at NZ$1,000 or over?
      </p>
      <p>
        Importing business goods from overseas regularly and needing assistance
        with Customs clearance?
      </p>
      <p>Needing to export goods to overseas?</p>
      <div>
        <h1 class="large-bold">Needing to export goods to overseas?</h1>
        <p class="contact">
          Contact
          <span class="highlight large-bold-blue"
            >Express Customs Brokers Limited</span
          >
          for <span class="highlight pink-large-bold">hassle-free</span>,
          <span class="highlight light-blue-large-bold">family-friendly</span>
          service,
          <span class="highlight dark-purple-large-bold"
            >fast and efficient!</span
          >
        </p>

        <p class="description purple-large-bold">
          Personalized service, tailored for your special needs;
        </p>

        <p class="list green-large-bold">
          One stop service, assistance with Customs clearance, freight
          forwarding;
        </p>

        <p class="description pink-large">
          The most cost-effective way of moving your goods!
        </p>
      </div>
    </section>
    <footerVue />
  </Layout>
</template>

<script setup name="faq">
import footerVue from '../../layout/footer/footer.vue';
import Layout from '../../layout/main/layout.vue';
</script>

<style>
/* Add any necessary styles here */
section {
  padding: 20px;
  background-color: #f9f9f9; /* Light background for better readability */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

h2 {
  color: #333; /* Darker color for the heading */
}

p {
  color: #555; /* Slightly lighter color for the text */
  line-height: 1.6; /* Improved line height for readability */
}

.ca-content {
  min-height: calc(100vh - 105px - 445px);
}

.large-bold {
  font-size: 36px; /* 大字号 */
  font-weight: bold; /* 加粗 */
  color: black; /* 黑色 */
}

.contact {
  font-weight: normal; /* 正常 */
  color: black; /* 黑色 */
}

.highlight {
  font-weight: normal; /* 默认 */
}

.large-bold-blue {
  font-size: 24px; /* 大字号 */
  font-weight: bold; /* 加粗 */
  color: blue; /* 蓝色 */
}

.pink-large-bold {
  font-size: 20px; /* 稍大字号 */
  font-weight: bold; /* 加粗 */
  color: pink; /* 粉色 */
}

.light-blue-large-bold {
  font-size: 20px; /* 稍大字号 */
  font-weight: bold; /* 加粗 */
  color: lightblue; /* 浅蓝色 */
}

.dark-purple-large-bold {
  font-size: 20px; /* 稍大字号 */
  font-weight: bold; /* 加粗 */
  color: darkviolet; /* 深紫色 */
}

.purple-large-bold {
  font-size: 20px; /* 稍大字号 */
  font-weight: bold; /* 加粗 */
  color: purple; /* 紫色 */
}

.green-large-bold {
  font-size: 20px; /* 稍大字号 */
  font-weight: bold; /* 加粗 */
  color: darkgreen; /* 深绿色 */
}

.pink-large {
  font-size: 18px; /* 稍大字号 */
  color: deeppink; /* 深粉色 */
}
</style>