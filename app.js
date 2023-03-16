const app = Vue.createApp({
    data() {
        return {
            title: "the final empire",
            author: "ME",
            age: 45
      }
    },

    methods: {
        changeTitle(title){
            this.title = title
        }
    }
})

app.mount("#app")