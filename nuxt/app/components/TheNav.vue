<template>
  <nav class="navbar bg-body-tertiary fixed-top p-3 border-bottom" :class="{ 'nav-hidden': !isVisible }">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand fw-bold" to="/">
        <img src="/images/logos/oakham_logo.png" class="" style="width: 150px" alt="">
      </NuxtLink>
      <!-- nav ul -->
      <ul class="nav justify-content-end d-none d-lg-flex">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#news">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#spaces">Spaces</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#events">Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#location">Location</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#booking">Booking</a>
        </li>
      </ul>

      <!-- offcanvas nav -->
      <button class="navbar-toggler d-lg-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-justify-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#news" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasNavbar">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#spaces">Spaces</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#events">Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#location">Location</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#booking">Booking</a>
        </li>
          </ul>
        </div>
      </div>

    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isVisible = ref(true);
let lastScrollY = 0; // initialize here, we'll set in onMounted

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Scrolling down
    isVisible.value = false;
  } else {
    // Scrolling up
    isVisible.value = true;
  }

  lastScrollY = currentScrollY;
};


onMounted(() => {
  lastScrollY = window.scrollY; // set initial value safely
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
nav {
  transition: transform 0.3s ease-in-out;
}
a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    &:hover {
      color: grey;
    }
}

.nav-hidden {
    transform: translateY(-100%);
  }
</style>