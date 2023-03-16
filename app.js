const app = Vue.createApp({
    data() {
        return {
            title: "the final empire",
            author: "ME",
            age: 45,
            showbooks: true,
        };
    },

    methods: {
        changeTitle(title){
            this.title = title
        },
        toggleShowBooks(){
            this.showbooks = !this.showbooks
        }
    }
})

app.mount("#app")