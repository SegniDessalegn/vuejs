const app = Vue.createApp({
    data() {
        return {
            url: "https://www.google.com",
            showbooks: true,
            x: 0,
            y: 0,
            books : [
                {title:"name of the wind", author:"patrick rothfuss", url: "assets/1.jpg", isFav : true},
                {title:"the way of kings", author:"brandon sanderson", url: "assets/2.jpg", isFav : true},
                {title:"the final empire", author:"brandon sanderson", url: "assets/3.jpg", isFav : true},
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
        },
    }
})

app.mount("#app")