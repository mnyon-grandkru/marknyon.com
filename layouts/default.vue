<script lang="ts" setup></script>

<template>
  <div class="header">
    <h1>Mark Nyon</h1>
    <nav class="navbar">
      <h3>Technologist, Educator</h3>
      <ul class="nav-menu">
        <li class="nav-item"><a href="work.html">Work</a></li>
        <li class="nav-item"><a class=link2 href="index.html">About</a></li>
      </ul>
    </nav>
  </div>
  <!-- Content -->
  <div class="Content">
    <slot></slot>
  </div>

  <div class="Contact">
    <ul>
      <li><p class="Email">For press inquiries, please contact
        <a href="mailto:info@grandkru.com ">info@grandkru.com</a></p></li>
      <li>
        <button onclick="location = 'contact.html'" class="footerbutton" id="contact-mark-nyon">Contact Me</button>
      </li>
    </ul>
  </div>

  <div class="contactmobile">
    <button onclick="location = 'contact.html'" class="footerbutton">CONTACT</button>
  </div>

  <div class="privacy-mobile">
    <ul>
      <li>
        <a href="privacy_policy.html" target="popup"
           onclick="window.open('privacy_policy.html','popup','width=735,height=600,scrollbars=yes,menubar=no,toolbar=no,location=no,status=no,top=100,left=400'); return false;">
          Privacy Policy</a>
      </li>
      <li>
        <a href="terms-and-conditions.html" target="popup"
           onclick="window.open('terms-and-conditions.html','popup','width=735,height=600,scrollbars=yes,menubar=no,toolbar=no,location=no,status=no,top=100,left=400'); return false;">
          Terms and Conditions</a>
      </li>
    </ul>
  </div>

  <div class="footermobile">
    <div class="icons" id="links-to-mark-nyon-social-media-mobile">
      <a href="https://github.com/trystant" class="githublink2"></a>
      <a href="https://www.linkedin.com/in/marknyon/" class="linkedinlink2"></a>
      <a href="https://blog.grandkru.com/" class="bloglink2"></a>
      <a href="http://grandkru.com/MarkSamuelNyon.pdf" class="resumelink2"></a>
    </div>

    <div class="footer">
      <div class="privacy">
        <a href="privacy_policy.html" target="popup"
           onclick="window.open('privacy_policy.html','popup','width=735,height=600,scrollbars=yes,menubar=no,toolbar=no,location=no,status=no,top=100,left=400'); return false;">
          Privacy Policy</a>
        <br>
        <a href="terms-and-conditions.html" target="popup"
           onclick="window.open('terms-and-conditions.html','popup','width=735,height=600,scrollbars=yes,menubar=no,toolbar=no,location=no,status=no,top=100,left=400'); return false;">
          Terms and Conditions</a>
      </div>
      <div class="icons" id="links-to-mark-nyon-social-media">
        <a href="https://twitter.com/msnyon" class="twitterlink"></a>
        <a href="https://github.com/trystant" class="githublink"></a>
        <a href="https://www.linkedin.com/in/marknyon/" class="linkedinlink"></a>
        <a href="https://blog.grandkru.com/" class="bloglink"></a>
        <a href="https://grandkru.com/MarkSamuelNyon.pdf" class="resumelink"></a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
