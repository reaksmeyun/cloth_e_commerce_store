const { createApp } = Vue;

createApp({
  data() {
    return {
      currentPage: 'home', // Default page
      email: "", // For login form
      password: "", // For login form
      error: "", // For login form error messages
      searchQuery: "", // Search query
      featuredProducts: [
        {
          id: 1,
          name: "T-Shirt",
          price: 25.99,
          image: "https://mackweldon.com/cdn/shop/files/M01T12-TNBH.Front_1280x.png?v=1703268466",
        },
        {
          id: 2,
          name: "T-shirt",
          price: 49.99,
          image: "https://shop.vogue.com/cdn/shop/files/Vogue_T-Shirt_black_2.png?v=1686347297&width=1000",
        },
        {
          id: 3,
          name: "Sneakers",
          price: 79.99,
          image: "https://cdn.media.amplience.net/i/tom_ford/J1511-LCL456N_5W023_OS_APPENDGRID_HOVER",
        },
        {
          id: 4,
          name: "Backpack",
          price: 39.99,
          image: "https://july.com/static/71b6d233de1b969bda8c4e4a4dd3e09d/50ec7/0_2b94937bd7.png",
        },
        {
          id: 5,
          name: "Jean",
          price: 25.00,
          image: "https://images.jackjones.com/12202489/3796886/001/jackjones-jjieddiejjoriginalsbd911noos-blue.png?v=041e540c72459e17f9a1691223841b74",
        },
        {
          id: 6,
          name: "Skirt",
          price: 15.00,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGJlruH0BLtB2CbUxv8yLcJW7FDMmqG8U-w&s",
        },
        {
          id: 7,
          name: "Dress",
          price: 12.50,
          image: "https://www.meshki.us/cdn/shop/files/B1212024.09.27MESHKIURGENT_8419.png?v=1738056939&width=533",
        },
        {
          id: 8,
          name: "Suit",
          price: 50.00,
          image: "https://hespokestyle.com/wp-content/uploads/2023/08/royal-blue-twill-suit-jacket-he-spoke-style-shop.png",
        },
        {
          id: 9,
          name: "Long Shirt",
          price: 30.99,
          image: "https://images.squarespace-cdn.com/content/v1/5c98f38a348cd971aa29db73/1653315392396-EQK0PFUTVFFRLUNQQYH1/The+Lydia+-+Black.png?format=1000w",
        },
        {
          id: 10,
          name: "Heel",
          price: 40.00,
          image: "https://assets.superhivemarket.com/store/productimage/698782/image/e04d148a9ffcaab4d1b11a7c5309017a.png",
        },
        {
          id: 11,
          name: "Polo Shirt",
          price: 10.00,
          image: "https://www.schoffelcountry.com/cdn/shop/files/schoffel-mens-st-ives-jersey-polo-shirt-navy-cutout-front-01_grande.png?v=1718983393",
        },
        {
          id: 12,
          name: "Hat",
          price: 15.70,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL61exSPlLmm1tyn-nFeWGNsIyHCZWzAudqg&s",
        },
        {
          id: 13,
          name: "Polo Shirt",
          price: 10.00,
          image: "https://www.schoffelcountry.com/cdn/shop/files/schoffel-mens-st-ives-jersey-polo-shirt-navy-cutout-front-01_grande.png?v=1718983393",
        },
        {
          id: 14,
          name: "Hat",
          price: 15.70,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL61exSPlLmm1tyn-nFeWGNsIyHCZWzAudqg&s",
        },
        {
          id: 15,
          name: "Polo Shirt",
          price: 10.00,
          image: "https://www.schoffelcountry.com/cdn/shop/files/schoffel-mens-st-ives-jersey-polo-shirt-navy-cutout-front-01_grande.png?v=1718983393",
        },
        {
          id: 16,
          name: "Hat",
          price: 15.70,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL61exSPlLmm1tyn-nFeWGNsIyHCZWzAudqg&s",
        }
      ],
      cart: [], // Stores items added to the cart
      isLoading: false // For loading state
    };
  },
  computed: {
    // Filter products based on search query
    filteredProducts() {
      return this.featuredProducts.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    // Calculate cart total
    cartTotal() {
      return this.cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    },
    // Check if user is logged in
    isLoggedIn() {
      return this.email === "user@example.com" && this.password === "password123";
    }
  },
  methods: {
    // Add a product to the cart
    addToCart(product) {
      if (!this.isLoggedIn) {
        this.currentPage = 'login';
        this.error = "Please login to add items to cart";
        return;
      }
      this.cart.push({...product});
      alert(`Added ${product.name} to cart!`);
    },
    
    // Checkout
    checkout() {
      if (!this.isLoggedIn) {
        this.currentPage = 'login';
        this.error = "Please login to checkout";
        return;
      }
      if (this.cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }
      this.isLoading = true;
      // Simulate API call
      setTimeout(() => {
        alert(`Checkout successful! Total: $${this.cartTotal}`);
        this.cart = [];
        this.isLoading = false;
        this.currentPage = 'home';
      }, 1000);
    },
    
    // Handle login form submission
    async handleLogin() {
      if (!this.email || !this.password) {
        this.error = "Please fill in all fields.";
        return;
      }
      
      this.isLoading = true;
      this.error = "";
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (this.email === "user@example.com" && this.password === "password123") {
        alert("Login successful!");
        this.error = "";
        this.currentPage = 'home';
      } else {
        this.error = "Invalid email or password.";
      }
      
      this.isLoading = false;
    },
    
    // Remove item from cart
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    
    // Navigation methods
    goToHome() {
      this.currentPage = 'home';
      this.error = "";
    },
    
    goToLogin() {
      this.currentPage = 'login';
      this.error = "";
    },
    
    goToCart() {
      if (!this.isLoggedIn) {
        this.currentPage = 'login';
        this.error = "Please login to view your cart";
        return;
      }
      this.currentPage = 'cart';
    },
    
    // Logout user
    logout() {
      this.email = "";
      this.password = "";
      this.currentPage = 'home';
      this.cart = [];
      alert("Logged out successfully!");
    }
  }
}).mount("#app");