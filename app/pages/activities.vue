<script setup>
  const {data: activities, refresh} = await useFetch('/api/activities')

  const newActivitie = ref({
    title:'',
    duration:''
  })

  const addActivitie = async() => {
    const backNewAvtivitie = await $fetch("/api/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: newActivitie.value
    })
    console.log(backNewAvtivitie)
    await refresh()
  }
</script>

<template>
  <h1>Activité</h1>
  <form @submit.prevent="addActivitie">
    <input type="text" placeholder="nom activité">
    <input type="text" placeholder=" durée">
    <button>Ajouter</button>
  </form>
  <ul>
    <li v-for="(activities, key) in activities" :key="key">{{ activities.title }}</li>
  </ul>
</template>