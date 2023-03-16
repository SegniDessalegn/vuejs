const app = Vue.createApp({
    data() {
        return {
            url: "https://www.google.com",
            showplaces: true,
            x: 0,
            y: 0,
            places : [
                {name:"the deep jungle", url: "assets/1.jpg", isFav : true},
                {name:"the air travel", url: "assets/2.jpg", isFav : true},
                {name:"the zoo", url: "assets/3.jpg", isFav : true},
            ]
        };
    },

    methods: {
        toggleShowplaces(){
            this.showplaces = !this.showplaces
        },
        handleEvent(e, other){
            console.log(e.type, other)
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
    },
    computed: {
        filteredplaces(){
            return this.places.filter((place)=>place.isFav);
        }
    }
})

app.mount("#app")