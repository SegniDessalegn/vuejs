<template>
  <div>{{ title }}</div>
  <div v-if = "showModal">
  <Modal :header = "header" :text = "text" theme = "sale" @close = "toggleModal"/></div>
  <button @click.alt = "toggleModal" > Show Modal</button>
</template>

<script>
import Modal from "./components/Modal.vue"

export default {
  name: 'app',
  components: { Modal },
  data() {
    return {
      title: "Welcome",
      header: "Signup for the great giveaway",
      text: "Grap your gift",
      showModal: false
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add("active")
      this.$refs.name.focus()
    },
    toggleModal(){
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
