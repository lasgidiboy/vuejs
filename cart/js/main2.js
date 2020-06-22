Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `<div>
  <div class="product">
        <div class="product-image">
          <img :src="image" alt="" />
        </div>
        <div class="product-info">
          <h1>{{title}}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>
          <p>shipping: {{shipping}}</p>
          <ul>
            <li v-for="detail in details">{{detail}}</li>
          </ul>
          <div
            v-for="(variant, index) in variants"
            :key="variant.variantId"
            class="color-box"
            :style="{backgroundColor: variant.variantColor}"
            @mouseover="updateProduct(index)"
          ></div>
          <button
            @click="addCart"
            :disabled="!inStock"
            :class="{disabledButton: !inStock}"
          >
            Add Cart
          </button>
          <div class="cart">Cart({{cart}})</div>
        </div>
      </div>
  </div>`,
  data() {
    return {
      product: "sucks",
      brand: "papper",
      selectedVariant: 0,

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
    };
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
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if (this.premium) {
        return "free"
      }
      return 2.99
    },
  },
});
let app1 = new Vue({
  el: "#app",
  data: {
    premium: false
  }
});
