<template>
  <div class="home-container">
    <!-- <nav class="navbar">
      <div class="logo">Developer</div>

      <div class="hamburger" @click="toggleMenu">&#9776;</div>

      <ul :class="['nav-links', { active: isMenuOpen }]">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about" class="active">About</router-link></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact Me</a></li>
        <button class="case-studies-btn">Tech Blogs</button>
      </ul>
    </nav> -->

    <div class="about-container">
      <h1>About Me</h1>
      <p class="professional_description">
        I'm <strong>Eshwar Sai Gamidi</strong>, A Proactive Java Full Stack
        Developer skilled in designing and delivering responsive user interfaces
        and robust server-side applications. Proficient in Java, Spring Boot,
        and Microservices architecture, adept at building scalable solutions to
        meet business needs. Strong problem-solving abilities with a
        collaborative approach to teamwork, complemented by excellent
        communication skills. Committed to staying updated with emerging
        technologies and industry trends to drive continuous improvement.
        Demonstrated track record of delivering high-quality solutions that
        exceed expectations
      </p>
      <button class="resume-btn" @click="downloadResume">
        Download Resume
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
  methods: {
    downloadResume() {
      const link = document.createElement("a");
      link.href = "../public/Eshwar_new_resume_format.pdf"; // The public folder file path
      link.download = "Eshwar_sai_Resume.pdf"; // The filename for the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<style scoped>
.resume-btn {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.resume-btn:hover {
  background-color: #0056b3;
}
</style>