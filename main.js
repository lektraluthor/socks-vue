var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        image: "vmSocks-green-onWhite.jpg",
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "vmSocks-green-onWhite.jpg"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "vmSocks-blue-onWhite.jpg"
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        updateProduct: function(variantImage) {
            this.image = variantImage
        }
    },
    computed: {
        title: function() {
            return this.brand + ' ' + this.product
        }
    }       
})
