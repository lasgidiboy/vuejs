Vue.component("product-review", {
  template: `<div>
   <form class="review-form" @submit.prevent="onSubmit">
   <p>
   <label>name:</label><input type="text" v-model="name">
   </p>
        
        <p>
        <label>review:</label>
        <textarea v-model="review"></textarea>
        </p>
        
        <label for="">rating</label>
        <select name="" id="rating" v-model.number="rating">
          <option value="3">5</option>
          <option value="3">4</option>
          <option value="3">3</option>
          <option value="3">2</option>
          <option value="3">1</option>
        </select>
        </p>
        
        <p><input type="submit" value="submit"></p>
      </form>
    </div>`,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
    };
  },
  methods: {
    onSubmit() {
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
        };

        this.$emit("review-submitted", productReview);
        this.name = null;
        this.rating - null;
        this.review = null;
      } else {
        if (!this.name) this.error.push("Name Required");
        if (!this.review) this.error.push("Review Required");
        if (!this.rating) this.error.push("Rating Required");
      }
    },
  },
}),
  Vue.component("product", {
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
          <button @click="removeCart">remove</button>
          
        </div>
      </div>
            
  </div>`,
    props: {
      premium: {
        type: Boolean,
        required: true,
      },
    },
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
      };
    },
    methods: {
      addCart() {
        this.$emit(
          "add-to-cart",
          this.variants[this.selectedVariant].variantId
        );
      },
      removeCart() {
        this.$emit("remove-cart");
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
          return "free";
        }
        return 2.99;
      },
    },
  });
let app1 = new Vue({
  el: "#app",
  data: {
    premium: false,
    cart: [],
    reviews:[]
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeCart() {
      this.cart--;
    },
    addReview(productReview) {
      this.reviews.push(productReview)
    }
  },
});
