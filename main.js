


 var app = new Vue({

    el:'#app',
    data: {
        project : "socks",
        description : "product description",
        image: "assets/socks.png",
        image1: "assets/blue_socks.png",
        inStock: true,
        numval : 5,
        details : ["80% Cottons","20 Polyester","Gender Neutral"],
        variants :[{id:01,color:"red"},{id:02,color:"blue"},{id:03,color:"green"},{id:04,color:"yellow"}]

    }
    
});



/*

conditions
---------------
v-if
v-else-if
v-else
v-show

*/