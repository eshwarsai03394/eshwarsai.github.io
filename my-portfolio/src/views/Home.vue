<template>
  <div class="home-container">
    <nav class="navbar">
      <div class="logo">Developer</div>

      <div class="hamburger" @click="toggleMenu">
        &#9776;
      </div>

      <ul :class="['nav-links', { 'active': isMenuOpen }]">
        <li><a href="#" class="active">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact Me</a></li>
        <button class="case-studies-btn">Case Studies</button>
      </ul>
      
    </nav>

    <div class="content">
      <div class="text-section">
        <p class="intro">HI THERE 👋 I'M</p>
        <h1>Eshwar Sai Gamidi</h1>
        <p class="role">Software Engineer + Fullstack DEVELOPER 👨‍💻</p>
        <p class="description">
          I'm a professional UI/UX designer with front-end development skills based in Lagos.
        </p>
        <button class="hire-btn">Hire Me</button>
      </div>

      <div class="image-section">
        <img src="../assets/memoji.jpeg" alt="Memoji Character" class="avatar" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* General Styles */
.home-container {
  height: 100vh;
  width: 100vw;
  background-color: #3b3838;
  color: white;
  padding: 20px;

  /* max-width: 1200px; */
  margin: auto;
  overflow-x: hidden;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 10px 40px;
  position: relative;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
  align-items: center;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: 0.3s;
}

/* Mobile Dropdown */
.hamburger {
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: white;
}

.nav-links .active,
.nav-links a:hover {
  color: #00ffcc;
}

.case-studies-btn {
  padding: 10px 20px;
  background: linear-gradient(90deg, #00ffcc, #00aa88);
  border: none;
  border-radius: 20px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.case-studies-btn:hover {
  opacity: 0.8;
}

/* Content Layout */
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80vh;
  padding: 40px;
}

/* Text Section */
.text-section {
  max-width: 50%;
}

.intro {
  color: #00ffcc;
  font-size: 1.2rem;
  font-weight: bold;
}

h1 {
  font-size: 3.5rem;
  font-weight: bold;
}

.role {
  color: #00ffcc;
  font-size: 1.5rem;
  font-weight: bold;
}

.description {
  margin-top: 10px;
  font-size: 1.2rem;
  max-width: 80%;
}

.hire-btn {
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #00ffcc;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.hire-btn:hover {
  background-color: #00aa88;
}

/* Image Section */
.image-section {
  max-width: 50%;
  text-align: right;
}

.avatar {
  width: 300px;
  height: auto;
}

@media (max-width: 768px) {
  /* Navbar Adjustments */
  .navbar {
    flex-direction: column;
    align-items: center;
  }

  .hamburger {
    display: block;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    background: #333;
    width: 100%;
    position: absolute;
    top: 82px;
    left: 0;
    padding: 20px 0;
    text-align: center;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links a {
    padding: 10px 0;
    display: block;
  }

  .case-studies-btn {
    width: 80%;
    margin: 10px auto;
  }

  /* Content Adjustments */
  .content {
    flex-direction: column;
    text-align: center;
    height: auto;
  }

  .text-section {
    max-width: 100%;
    padding: 20px;
  }

  .image-section {
    max-width: 100%;
    text-align: center;
  }

  .avatar {
    width: 80%;
    max-width: 250px;
  }

  /* Button Styles */
  .hire-btn,
  .case-studies-btn {
    width: 80%;
    font-size: 1rem;
    padding: 14px;
  }

  /* Typography Adjustments */
  h1 {
    font-size: 2.5rem;
  }

  .role {
    font-size: 1.2rem;
  }

  .description {
    font-size: 1rem;
  }
}

</style>
