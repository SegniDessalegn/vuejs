<template>
  <div>{{ title }}</div>
  <Modal />
</template>

<script>
import Modal from "./components/Modal.vue"

export default {
  name: 'app',
  components: { Modal },
  data() {
    return {
      title: "this the title now"
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add("active")
      this.$refs.name.focus()
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
