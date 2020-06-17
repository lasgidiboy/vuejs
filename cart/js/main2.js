let app1 = new Vue({
  el: "#app",
  data: {
    product: "sucks",
    brand: "papper",
    selectedVariant: 0,
    inStock: false,
    details: ["80% cotton", "20% poly", "gender-natural"],
    variants: [
      {
        variantId: 1234,
        variantColor: "green",
        variantImage: "src/vmSocks-green-onWhite.jpg",
        variantQuantity: 10,
      },
      {
        variantId: 12345,
        variantColor: "blue",
        variantImage: "src/vmSocks-blue-onWhite.jpg",
        variantQuantity: 10,
      },
    ],
    cart: 0,
  },
  methods: {
    addCart() {
      this.cart += 1;
    },
    updateProduct(index) {
      this.image = index;
      console.log(index);
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
  },
});
