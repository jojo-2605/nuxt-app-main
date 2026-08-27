<script setup>
  const { data: fruits, refresh} = await useFetch('/api/fruits')

  const newFruit = ref({
    label:''
  })

  const addFruit = async() => {
    const backNewFruit = await $fetch("/api/fruits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: newFruit.value
    })
    console.log(backNewFruit)
    await refresh()
  }

  const delFruit = async() => {
    if(confirm('Sûr ?')){
      await $fetch(`/api/fruits/${id}`, {
        method: "DELETE"
      }),
      await refresh() 
    }
  }
</script>

<template>
  <h1>Nos fruits</h1>
  <ul>
    <li v-for="(fruits, key ) in fruits" :key="key">{{ fruits.label }}
      <div class="actions">
        <button @click="delFruit(fruits.id)">X</button>
      </div>
    </li>
  </ul>
  <hr>
  <form action="" @submit.prevent="addFruit">
    <input type="text" placeholder="nom du fruit" v-model="newFruit.label">
    <button>Ajouter</button>
  </form>
</template>