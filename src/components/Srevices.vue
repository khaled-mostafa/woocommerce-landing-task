<template>
  <section class="services section container" id="services">
    <h2 class="section__title section__services">
      Your eCommerce <br />
      made simple
    </h2>
    <div class="services__container grid">
      <div class="services__data" v-for="(service, index) in seviceList" :key="index">
        <img :src="service.image" alt="feature-IMG">
        <h3 class="services__subtitle"> {{ service.title }} </h3>
        <p class="services__description"> {{ service.content }} </p>
        <div>
          <a :href="service.url" class="button__alt">Ecommerce for Wordpress ›</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  props: {
    seviceList: {
      type: Array,
      default: () => []
    }
  }

}
</script>

<style>
</style>