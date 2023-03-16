const app = Vue.createApp({
    data() {
        return {
            showbooks: true,
            x: 0,
            y: 0,
            books : [
                {title:"name of the wind", author:"patrick rothfuss"},
                {title:"the way of kings", author:"brandon sanderson"},
                {title:"the final empire", author:"brandon sanderson"},
            ]
        };
    },

    methods: {
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