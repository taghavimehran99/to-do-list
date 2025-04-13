Vue.createApp({
    data(){
            return{
                one:'',
                two:'',
                three:'',
                four:'',
            }
    },
    watch:{

    },
    methods:{
        btn(){
            console.log(this.one,this.two,this.three,this.four);
            
        }

    }
}).mount('#form')