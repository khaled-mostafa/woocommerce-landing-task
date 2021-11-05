<template>
  <footer class="footer section">
    <section class="feature section container">
      <div class="feature__container grid">
        <img src="@/assets/img/service.png" alt="">
        <div class="feature__data">
          <h2 class="section__title-center">
            Develop <br />
            Without Limits
          </h2>
          <p class="feature__description">
            WooCommerce is developer friendly, too. Built with a REST API,
            WooCommerce is scalable and can integrate with virtually any
            service. Design a complex store from scratch, extend a store for a
            client, or simply add a single product to a WordPress site—your
            store, your way.
          </p>
          <div>
            <a href="#" class="button button__service"
              >Read the Documentation</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="feature section container">
      <div class="feature__container grid">
        <div class="feature__data">
          <h2 class="section__title-center">
            Know our <br />
            Global Community
          </h2>
          <p class="feature__description">
            WooCommerce is developer friendly, too. Built with a REST API,
            WooCommerce is scalable and can integrate with virtually any
            service. Design a complex store from scratch, extend a store for a
            client, or simply add a single product to a WordPress site—your
            store, your way.
          </p>
          <div>
            <a href="#" class="button button__service"
              >Read the Documentation</a
            >
          </div>
        </div>
        <img src="@/assets/img/service.png" alt="">
      </div>
    </section>
    <svg-decoration class="footer__svgdecorations"/>
  </footer>
</template>

<script>
import SvgDecoration from './SvgDecoration.vue'
export default {
  components: { SvgDecoration },
  name: 'Footer'
}
</script>

<style>
</style>