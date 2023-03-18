<template>
  <div>{{ title }}</div>
  <teleport to = ".modals" v-if="showModal">
    <Modal theme="" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Signup for the great giveaway</h1>
      <p>Grap your gift</p>
    </Modal>
  </teleport>

  <teleport to = ".modals" v-if="showModalTwo">
    <Modal theme="sale" @close="toggleModalTwo">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Another modal</h1>
      <p>Grap your other gift too</p>
    </Modal>
  </teleport>
  <button @click="toggleModal"> Show Modal</button>
  <button @click="toggleModalTwo"> Show Another Modal</button>
</template>

<script>
import Modal from "./components/Modal.vue"

export default {
  name: 'app',
  components: { Modal },
  data() {
    return {
      title: "Welcome",
      showModal: false,
      showModalTwo: false,
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add("active")
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, .modals{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
button {
  background: #bbb;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin: 10px;
  font-size: 16px;
  color: #333;
}
</style>
