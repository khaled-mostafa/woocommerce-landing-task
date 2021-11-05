<template>
  <header class="header" id="header">
    <nav class="nav container">
      <a href="#" class="nav__logo">
        <img src="@/assets/img/logo-woocommerce.svg" alt="" />
      </a>

      <div class="nav__menu" :class="{ showmenu: showMenu }" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#home" class="nav__link">sell</a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link">Marketplace</a>
          </li>
          <li class="nav__item">
            <a href="#services" class="nav__link">community</a>
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link">Develop</a>
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link">Resources</a>
          </li>
        </ul>
      </div>

      <div class="nav__toggle" id="nav-toggle">
        <a @click="showMenu = !showMenu"> <img src="https://img.icons8.com/ios/50/000000/menu--v2.png"/> </a>
      </div>

      <div class="right">
        <a href="#" class="login">Log In</a>
        <a href="#" class="button button__header">Get Started</a>
        <a href="#" class="search-icon">
          <img src="@/assets/img/icon-search.svg" alt="">
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      showMenu: false,
    }
  },
}
</script>

<style>
</style>