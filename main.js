


 var app = new Vue({

    el:'#app',
    data: {

        product: "Socks",
        image: "assets/green_socks.png",
        inStock: true,
        details : ["80% Cottons","20 Polyester","Gender-neutral"],
        variants :[
            {variantId:2234,variantColor:"Blue",variantImage:"assets/blue_socks.png"},
            {variantId:2238,variantColor:"Green",variantImage:"assets/green_socks.png"},
                  ],
        cart:0

    },

    methods:{

        addToCart()
        {
            this.cart +=1;
        },
        updateProduct(varianImage)
        {
            this.image = varianImage
        }
    }
    
});



/*
conditions
---------------
v-if
v-else-if
v-else
v-show



 for onclick we use 
 v-on:click ="fun"
 or
 :click="call function or perform operation"

*/