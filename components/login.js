const { createApp } = Vue;

createApp({
  data() {
    return {
      email: "", // For login form
      password: "", // For login form
      error: "", // For login form error messages
    };
  },
  methods: {
    // Handle login form submission
    handleLogin() {
      if (!this.email || !this.password) {
        this.error = "Please fill in all fields.";
        return;
      }
      // Simulate a login request
      if (this.email === "user@example.com" && this.password === "password123") {
        alert("Login successful!");
        this.error = ""; // Clear error message
        window.location.href = "../html/index.html"; // Redirect to homepage
      } else {
        this.error = "Invalid email or password.";
      }
    },
  },
}).mount("#app");