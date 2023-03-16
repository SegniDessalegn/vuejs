const app = Vue.createApp({
    data() {
        return {
            title: "the final empire",
            author: "ME",
            age: 45,
            showbooks: true,
            x: 0,
            y: 0,
        };
    },

    methods: {
        changeTitle(title){
            this.title = title
        },
        toggleShowBooks(){
            this.showbooks = !this.showbooks
        },
        handleEvent(e, other){
            console.log(e.type, other)
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount("#app")