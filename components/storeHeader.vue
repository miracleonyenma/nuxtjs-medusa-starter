<template>
  <header id="store-header">
    <div class="wrapper">
      <figure id="site-logo">
        <h1 class="font-header font-bold">Medusa</h1>
      </figure>

      <nav id="store-nav">
        <div class="wrapper">
          <ul>
            <li>Cart</li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
#store-header {
  @apply sticky top-0 left-0 w-full p-4 bg-white z-10;
}

#store-header > .wrapper {
  @apply flex justify-between items-center w-full max-w-6xl m-auto;
}
</style>
