<template>
  <div id="app">
    <nav-bar />
    <hearo-header />
    <srevices :sevice-list="srevicesData"/>
    <footer-feature />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HearoHeader from './components/HearoHeader.vue'
import Srevices from './components/Srevices.vue'
import FooterFeature from './components/FooterFeature.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HearoHeader,
    Srevices,
    FooterFeature,
  },
  data() {
    return {
      srevicesData: [
        {
          id: 0,
          title: 'All You Need to Start',
          content: 'Add WooCommerce plugin to any WordPress site and set up a new store in minutes.',
          image: require('@/assets/img/feature-1.png'),
          url: '#',
        },
        {
          id: 0,
          title: 'Customize and Extend',
          content: 'We offer sale of products through the Internet.',
          image: require('@/assets/img/feature-1.png'),
          url: '#',
        },
        {
          id: 0,
          title: 'Active Community',
          content: 'WooCommerce is one of the fastest-growing eCommerce communities.',
          image: require('@/assets/img/feature-1.png'),
          url: '#',
        }
      ],
    }
  }
}
</script>
