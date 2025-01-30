<template>
  <html lang="en" class="u-responsive-xs">
    <body
      class="u-body u-overlap u-xl-mode"
      :class="{
        'menu-overlay': showMediaMenu,
        'u-offcanvas-opened': showMediaMenu,
      }"
      style=""
      data-bg=""
    >
      <header
        class="u-clearfix u-header u-header m-header"
        :class="{
          'static-header': staticHeader,
          'dark-header': darkHeader,
          'orange-header': orangeHeader,
        }"
        id="sec-5396"
      >
        <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <a
            href="/"
            class="m-logo"
            data-image-width="1390"
            data-image-height="958"
            title="Home"
          >
            <img
              src="https://expresscustomsbrokers.co.nz/wp-content/uploads/2022/05/cropped-EXPRESS-CUSTOMS-BROKERS-LTDLOGO-01.png"
              class="u-logo-image u-logo-image-1 cropped-logo"
            />
          </a>
          <nav
            class="u-menu u-menu-dropdown u-enable-responsive u-offcanvas u-menu-1"
            :class="{ open: showMediaMenu }"
          >
            <div
              class="menu-collapse"
              style="
                font-size: 1rem;
                letter-spacing: 0px;
                text-transform: uppercase;
                font-weight: 700;
              "
              :style="{ display: isMenuBtn ? 'block' : 'none' }"
              @click="toggleMediaMenu"
            >
              <a
                class="u-button-style u-custom-active-border-color u-custom-active-color u-custom-border u-custom-border-color u-custom-borders u-custom-hover-border-color u-custom-hover-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                href="#"
                style=""
              >
                <svg class="u-svg-link" viewBox="0 0 24 24">
                  <use xlink:href="#menu-hamburger"></use>
                </svg>
                <svg
                  class="u-svg-content"
                  version="1.1"
                  id="menu-hamburger"
                  viewBox="0 0 16 16"
                  x="0px"
                  y="0px"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <rect y="1" width="16" height="2"></rect>
                    <rect y="7" width="16" height="2"></rect>
                    <rect y="13" width="16" height="2"></rect>
                  </g>
                </svg>
              </a>
            </div>
            <div
              class="u-custom-menu u-nav-container"
              :style="{ display: isMenuBtn ? 'none' : 'block' }"
            >
              <ul id="menu-menu-1" class="u-nav u-spacing-2 u-unstyled u-nav-1">
                <li
                  id="menu-item-657"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-345 current_page_item menu-item-657 u-nav-item"
                >
                  <a
                    href="/"
                    aria-current="page"
                    class="menu-item-btn"
                    style="padding: 10px 20px"
                    :class="{
                      active: route.name === 'Home',
                      bfm: orangeHeader,
                    }"
                    >Home</a
                  >
                </li>
                <li
                  id="menu-item-669"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-669 u-nav-item"
                >
                  <a
                    href="/news"
                    class="menu-item-btn"
                    style="padding: 10px 20px"
                    :class="{
                      active: route.name === 'News',
                      bfm: orangeHeader,
                    }"
                    >News</a
                  >
                </li>
                <li
                  id="menu-item-670"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-670 u-nav-item"
                >
                  <a
                    href="/"
                    class="menu-item-btn"
                    style="padding: 10px 20px"
                    :class="{ active: isService, bfm: orangeHeader }"
                  >
                    Services
                  </a>
                  <div class="dropdown-content">
                    <!-- <a
                      href="/services/section1"
                      :class="{ active: route.name === 'section1' }"
                      >Carousel</a
                    > -->
                    <a
                      href="/services/section2"
                      :class="{ active: route.name === 'section2' }"
                      >IMPORT & EXPORT SERIVCE
                    </a>
                    <a
                      href="/services/section3"
                      :class="{ active: route.name === 'section3' }"
                      >OCEAN FRIGHT</a
                    >
                    <a
                      href="/services/section4"
                      :class="{ active: route.name === 'section4' }"
                      >AIR FRIGHT</a
                    >
                    <a
                      href="/services/section5"
                      :class="{ active: route.name === 'section5' }"
                      >Service list</a
                    >
                  </div>
                </li>
                <!-- <li
                  id="menu-item-671"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-671 u-nav-item"
                >
                  <a
                    href="/faq"
                    :class="{
                      active: route.name === 'FAQ',
                      bfm: orangeHeader,
                    }"
                    class="menu-item-btn"
                    style="padding: 10px 20px"
                    >FAQ</a
                  >
                </li> -->
                <li
                  id="menu-item-671"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-671 u-nav-item"
                >
                  <a
                    href="/contact"
                    :class="{
                      active: route.name === 'Contact',
                      bfm: orangeHeader,
                    }"
                    class="menu-item-btn"
                    style="padding: 10px 20px"
                    >Contact</a
                  >
                </li>
              </ul>
            </div>
            <div
              class="u-custom-menu u-nav-container-collapse"
              :style="{
                width: showMediaMenu ? '100%' : 0,
                display: showMediaMenu ? 'flex' : 'none',
              }"
              @click="toggleMediaMenu"
            >
              <div
                class="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav"
                style="margin-left: 0"
                @click.stop
              >
                <div class="u-inner-container-layout u-sidenav-overflow">
                  <div
                    class="u-menu-close u-button-style u-nav-link c-btn"
                    @click="toggleMediaMenu"
                  ></div>
                  <ul
                    id="menu-menu-2"
                    class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"
                  >
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-345 current_page_item menu-item-657 u-nav-item"
                    >
                      <a
                        href="/"
                        aria-current="page"
                        class="u-button-style u-nav-link c-btn"
                        style="padding: 10px 20px"
                        :class="{ active: route.name === 'Home' }"
                        >Home</a
                      >
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-669 u-nav-item"
                    >
                      <a
                        href="/news"
                        class="u-button-style u-nav-link c-btn"
                        style="padding: 10px 20px"
                        :class="{ active: route.name === 'News' }"
                        >News</a
                      >
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-670 u-nav-item"
                    >
                      <div class="services-menu">
                        <div
                          class="u-button-style u-nav-link"
                          style="padding: 10px 20px; color: rgb(152, 204, 204)"
                        >
                          Services
                        </div>
                        <a
                          href="/services/section2"
                          :class="{
                            active: route.name === 'section2',
                            'c-btn': true,
                          }"
                          >IMPORT & EXPORT SERIVCE
                        </a>
                        <a
                          href="/services/section3"
                          :class="{
                            active: route.name === 'section3',
                            'c-btn': true,
                          }"
                          >OCEAN FRIGHT</a
                        >
                        <a
                          href="/services/section4"
                          :class="{
                            active: route.name === 'section4',
                            'c-btn': true,
                          }"
                          >AIR FRIGHT</a
                        >
                        <a
                          href="/services/section5"
                          :class="{
                            active: route.name === 'section5',
                            'c-btn': true,
                          }"
                          >Service list</a
                        >
                      </div>
                    </li>
                    <!-- <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-671 u-nav-item"
                    >
                      <a
                        href="/faq"
                        class="u-button-style u-nav-link c-btn"
                        style="padding: 10px 20px"
                        :class="{ active: route.name === 'FAQ' }"
                        >FAQ</a
                      >
                    </li> -->
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-671 u-nav-item"
                    >
                      <a
                        href="/contact"
                        class="u-button-style u-nav-link c-btn"
                        style="padding: 10px 20px"
                        :class="{ active: route.name === 'Contact' }"
                        >Contact</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="u-black u-menu-overlay u-opacity u-opacity-70"
                :style="{
                  display: showMediaMenu ? 'block' : 'none',
                  opacity: showMediaMenu ? 0.7 : 0,
                }"
              ></div>
            </div>
          </nav>
        </div>
      </header>
      <div class="main-content">
        <div class="floating-container">
          <div
            class="floating-button"
            v-if="!showContact"
            @click="showContact = true"
          >
            <svg
              class="u-svg-link"
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 384 384"
              style="width: 35px; height: 35px"
            >
              <use xlink:href="#svg-3562"></use></svg
            ><svg
              class="u-svg-content"
              viewBox="0 0 384 384"
              x="0px"
              y="0px"
              id="svg-3562"
              style="enable-background: new 0 0 384 384"
            >
              <g>
                <g>
                  <path
                    d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594    c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448    c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813    C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div class="contact-info" :class="{ show: showContact }">
            <p>
              Our Address:<br />
              191 Maces Road, Bromley Christchurch, New Zealand
            </p>

            <p>
              Phone:<br />
              <span>
                <a
                  class="u-active-none u-border-none u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1"
                  href="https://wa.me/64800124191"
                  >+64 800 124 191</a
                >&nbsp;</span
              >
              <br />
              <span>
                <a
                  class="u-active-none u-border-none u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1"
                  href="https://wa.me/640210343101"
                  >+64 021 034 3101 (office)</a
                >&nbsp;</span
              >
            </p>
            <p>
              Email:<br />
              <span class="contact-detail">
                <a
                  class="u-active-none u-border-none u-button-link u-button-style u-hover-none u-none u-text-palette-1-base"
                  @click="
                    showMailFormConfig('info@expresscustomsbrokers.co.nz')
                  "
                  href="javascript:void(0)"
                  >General inqiries: info@expresscustomsbrokers.co.nz</a
                ><br />
                <a
                  class="u-active-none u-border-none u-button-link u-button-style u-hover-none u-none u-text-palette-1-base"
                  @click="
                    showMailFormConfig('imports@expresscustomsbrokers.co.nz')
                  "
                  href="javascript:void(0)"
                  >Import inquries: imports@expresscustomsbrokers.co.nz</a
                >
              </span>
            </p>
            <div
              class="close-button"
              @click="
                (e) => {
                  e.stopPropagation();
                  showContact = false;
                }
              "
            >
              ×
            </div>
          </div>
        </div>
        <slot />
      </div>
    </body>
    <QuoteForm v-model="showForm" :toEmail="toEmail" />
  </html>
</template>
  
  <script setup name="Home">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import QuoteForm from '../../components/QuoteForm/QuoteForm.vue';

const showForm = ref(false);

const toEmail = ref("");
const showMailFormConfig = (m) => {
  showForm.value = true;
  toEmail.value = m;
}
const route = useRoute();
const isMenuBtn = ref(false);
function handleMediaQueryChange(event) {
  if (event.matches) {
    isMenuBtn.value = true;
  } else {
    isMenuBtn.value = false;
  }
}
const mediaQuery = window.matchMedia("(max-width: 991px)");
mediaQuery.addListener(handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);

const showMediaMenu = ref(false);
const toggleMediaMenu = () => {
  showMediaMenu.value = !showMediaMenu.value;
  console.log("SHOW");
}

const props = defineProps({
  staticHeader: {
    type: Boolean,
    default: true
  },
  darkHeader: {
    type: Boolean,
    default: false
  },
  orangeHeader: {
    type: Boolean,
    default: false
  }
});

const isService = computed(() => {
  return route.fullPath.includes("/services");
})

const showContact = ref(false);
  </script>
  
  <style scoped lang="scss">
.u-offcanvas .u-sidenav {
  flex-basis: 250px !important;
}
.u-offcanvas:not(.u-menu-open-right) .u-sidenav {
  margin-left: -250px;
}
.u-offcanvas.u-menu-open-right .u-sidenav {
  margin-right: -250px;
}
@keyframes menu-shift-left {
  from {
    left: 0;
  }
  to {
    left: 250px;
  }
}
@keyframes menu-unshift-left {
  from {
    left: 250px;
  }
  to {
    left: 0;
  }
}
@keyframes menu-shift-right {
  from {
    right: 0;
  }
  to {
    right: 250px;
  }
}
@keyframes menu-unshift-right {
  from {
    right: 250px;
  }
  to {
    right: 0;
  }
}
.u-nav-item {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 25px;
  background-color: #f1c50e;
  color: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.services-menu {
  border: 1px solid #ccc;
  margin: 20px;
}
.services-menu a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  width: 100%;
  white-space: pre-wrap;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.c-btn:hover {
  color: #f1c50e;
}

.c-btn.active {
  color: #f1c50e;
}

.dropdown-content a.active {
  background-color: #ddd;
}

.u-nav-item:hover .dropdown-content {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}

.u-nav-item:hover > span {
  background-color: #f0f0f0; /* Example hover effect */
  color: #000; /* Example hover effect */
  transition: background-color 0.3s ease, color 0.3s ease;
}

/*/RESPONSIVE_MEDIA*/

.u-overlap:not(.u-sticky-scroll) .u-header {
  /* background-color: #292d33 !important */
}

.dark-header {
  background-color: #292d33 !important;
}
.orange-header {
  background: #f1c50e;
}
.bfm {
  color: #111111 !important;
}
.u-body {
  font-family: "Open Sans", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Roboto, sans-serif;
}

.u-overlap.u-overlap-transparent .u-header,
.u-image,
.u-gradient {
  color: #111111;
}
.u-shading,
.u-overlap.u-overlap-contrast .u-header {
  color: #ffffff;
}
.u-body {
  color: #111111;
  background-color: #ffffff;
  --effect-scale: 1.1;
}

.u-header {
  background-image: none;
}
.u-header .u-sheet-1 {
  min-height: 80px;
}
.u-header .u-image-1 {
  width: 93px;
  height: 64px;
  margin: 22px auto 0 0;
}
.u-header .u-logo-image-1 {
  width: 100%;
  height: 100%;
}
.u-header .u-menu-1 {
  margin: -57px 0 22px auto;
  padding-bottom: 20px;
}
.u-header .u-nav-1 {
  font-size: 1rem;
  letter-spacing: 0px;
  text-transform: uppercase;
  font-weight: 700;
}
.u-block-a543-19 {
  box-shadow: 2px 2px 8px 0 rgba(128, 128, 128, 1);
}
.u-block-a543-19 {
  box-shadow: 2px 2px 8px 0 rgba(128, 128, 128, 1);
}
.u-block-a543-19 {
  box-shadow: 2px 2px 8px 0 rgba(128, 128, 128, 1);
}
.u-block-a543-19 {
  box-shadow: 2px 2px 8px 0 rgba(128, 128, 128, 1);
}
.u-header .u-nav-2 {
  font-size: 1.25rem;
}

.static-header {
  position: static !important;
}

/* .main-content {
  min-height: calc(100vh - 199px - 112px);
} */

.cropped-logo {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: top;
  clip-path: inset(0px 0px 20px 0px);
}

.floating-container {
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;

  flex-direction: column;
  align-items: flex-end;
  z-index: 1000;
}

.floating-button {
  background-color: #444;
  color: white;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;

  &:hover {
    background: #f1c50e;
  }
}

.floating-button.hidden {
  opacity: 0;
}

.contact-info {
  max-height: 0;
  overflow: hidden;
  background-color: white;
  color: black;
  padding: 0 10px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 330px;
  transition: max-height 0.5s ease, padding 0.5s ease, transform 0.5s ease,
    opacity 0.5s ease;
  transform: scale(0.8) translate(20px, 20px);
  opacity: 0;
}

.contact-info.show {
  max-height: 400px; /* Adjust based on content */
  padding: 10px;
  transform: scale(1) translate(0, 0);
  opacity: 1;
}

.contact-detail {
  user-select: text; /* Allows text to be selectable for copying */
}

.contact-info {
  position: relative;
  /* existing styles */
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: #444;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: #e0b00d;
}

.menu-item-btn {
  transition: all 0.3s;
  color: #f1c50e;
  &:hover {
    background: #f1c50e;
    color: #fff;
  }
  &.active {
    background: #f1c50e;
    color: #fff;
  }
  &.bfm {
    color: #000;
  }
  &.bfm:hover {
    color: #000;
    background: #fff;
  }
  &.bfm.active {
    color: #000;
    background: #fff;
  }
}

.m-logo {
  width: 120px;
  margin-top: 20px;
}
</style>
  