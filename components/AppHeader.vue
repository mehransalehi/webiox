<template>
  <header class="header_section" :class="isScrolled ? 'sticky-navbar': ''">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <a class="navbar-brand text-primary" href="index.html">
          <span> WEBIOX </span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Why Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Team</a>
            </li>
          </ul>
        </div>
      </nav>
  </header>
</template>


<script setup lang="ts">
const isScrolled = ref(false);
const tick = ref(false);
const lastScrollPos = ref(0);

onMounted(() => {
  document.addEventListener("scroll", () => {
    lastScrollPos.value = window.scrollY;

    if (!tick.value) {
      window.requestAnimationFrame(() => {
        isScrolled.value = lastScrollPos.value > 120 ? true : false;
        tick.value = false;
      });

      tick.value = true;
    }
  });
});
</script>