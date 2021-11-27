<template>
  <main>
    <section class="store-hero">
      <div class="wrapper">
        <header class="hero-header">
          <div class="wrapper">
            <h1 class="header-caption">
              Welcome to <br />
              Nuxt Medusa Starter
            </h1>
            <p class="header-text">
              Built for the next awesome ecommerce platform with Nuxt & Tailwind
            </p>
            <button class="cta">Read more</button>
          </div>
        </header>
      </div>
    </section>
    <secction class="store-body">
      <div class="wrapper">
        <aside class="store-navigation">
          <ul class="nav-list">
            <li class="nav-item active">Home</li>
            <li class="nav-item">Latest Arrivals</li>
            <li class="nav-item">Phones & Tablets</li>
            <li class="nav-item">Clothing & Fashion</li>
          </ul>
        </aside>
        <section class="store-products">
          <header class="section-header">
            <h1 class="section-caption">Coats</h1>
          </header>
        </section>
      </div>
    </secction>
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
.store-hero {
  @apply p-4 pt-16 pb-8;
}

.store-hero > .wrapper {
  @apply w-full max-w-6xl m-auto;
}

.store-hero .hero-header {
  @apply flex items-center p-16 bg-gray-600 bg-gradient-to-tl from-gray-900 to-gray-700 text-white rounded-3xl;
  /* @apply flex items-center p-16 text-center bg-gray-600 bg-gradient-to-tl from-gray-900 to-gray-700 text-white rounded-3xl; */
  min-height: 18rem;
}

.hero-header .wrapper {
  @apply w-full md:max-w-xl;
  /* @apply w-full md:max-w-xl m-auto; */
}

.hero-header .header-caption {
  @apply text-4xl md:text-5xl font-header font-extrabold mb-2;
  /* @apply text-3xl md:text-5xl font-header font-extrabold mb-2; */
}

.hero-header .header-text {
  @apply text-xl mb-4;
  /* @apply text-base mb-4; */
}

/* STORE BODY */

.store-body {
  @apply p-4;
}

.store-body > .wrapper {
  @apply grid grid-cols-6 gap-4 w-full max-w-6xl m-auto;
}

.store-navigation {
  @apply grid col-span-1;
}

.store-navigation .nav-list {
  @apply flex flex-col gap-4;
}

.nav-list .nav-item {
  @apply transition bg-gray-200 hover:bg-gray-800 hover:text-gray-50 font-header font-bold p-4 rounded-xl hover:shadow-md cursor-pointer;
}

.nav-item.active {
  @apply bg-gray-800 text-gray-50 shadow-md;
}
</style>
