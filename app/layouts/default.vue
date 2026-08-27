<template>
  <header>
    <h1>First app Nuxt</h1>
    <nav>
      <NuxtLink to="/">Home</NuxtLink> | 
      <NuxtLink to="/apropos">A propos</NuxtLink> | 
      <NuxtLink to="/fruits">Fruits</NuxtLink> | 
      <NuxtLink to="/activities">Activité</NuxtLink>
    </nav>
  </header>
  <main>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores iste soluta rem, ducimus error autem voluptatum quidem facere ex et, tenetur obcaecati vel. Delectus sunt velit voluptatibus vitae aliquid.</p>
    <slot></slot>
  </main>
</template>