<template>
  <div>
    <div class="hero_area">
      <div class="hero_bg_box">
        <div class="bg_img_box">
          <img src="/images/hero-bg.png" alt="" />
        </div>
      </div>
      <!-- slider section -->
      <section class="slider_section text-primary">
        <swiper ::spaceBetween="30" :centeredSlides="true" :autoplay="{
          delay: 8500,
          disableOnInteraction: false,
        }" :pagination="{
          clickable: true,
        }" :navigation="true" :modules="[Autoplay, Pagination, Navigation]" @autoplayTimeLeft="onAutoplayTimeLeft"
          class="mySwiper">
          <swiper-slide>
            <div class="container ">
              <div class="row">
                <div class="col-md-6 ">
                  <div class="detail-box">
                    <h1>
                      Websites That Work Wonders
                    </h1>
                    <p>
                      Your website is your digital storefront, and we ensure it’s open 24/7 with stunning designs and
                      seamless functionality. At <span class="text-success fw-bold">WEBIOX</span>, we craft <span
                        class="text-primary fw-bold">websites</span> using cutting-edge technologies like <span
                        class="text-primary fw-bold">Next.js</span>, <span class="text-primary fw-bold">Nuxt</span>, and
                      <span class="text-primary fw-bold">Laravel</span> to deliver fast, responsive, and scalable
                      solutions. Whether you’re starting from scratch or upgrading an existing site, we’ve got you
                      covered with robust frameworks and modern aesthetics.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="/images/website.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="container ">
              <div class="row">
                <div class="col-md-6 ">
                  <div class="detail-box">
                    <h1>
                      Apps That Engage and Inspire
                    </h1>
                    <p>
                      In today’s mobile-first world, having an <span class="text-primary fw-bold">app</span> isn’t just
                      an option—it’s a necessity. We design sleek, user-friendly <span
                        class="text-primary fw-bold">apps</span> with frameworks like <span
                        class="text-primary fw-bold">React Native</span>, <span class="text-primary fw-bold">Vue</span>,
                      and <span class="text-primary fw-bold">Node.js</span> for both iOS and Android platforms. Whether
                      it’s an e-commerce <span class="text-primary fw-bold">app</span>, a service platform, or something
                      entirely unique, <span class="text-success fw-bold">WEBIOX</span> ensures your <span
                        class="text-primary fw-bold">app</span> looks great and performs flawlessly.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="/images/mobile.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="container ">
              <div class="row">
                <div class="col-md-6 ">
                  <div class="detail-box">
                    <h1>
                      Tailored Solutions for Unique Needs
                    </h1>
                    <p>
                      No two businesses are the same, and your solutions shouldn’t be either. <span
                        class="text-success fw-bold">WEBIOX</span> specializes in custom robot development, tailored
                      automation tools, and unique web-based applications. Utilizing the power of <span
                        class="text-primary fw-bold">Node.js</span>, <span class="text-primary fw-bold">Python</span>,
                      and modern APIs, we create software that perfectly aligns with your vision and goals.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="/images/code.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="container ">
              <div class="row">
                <div class="col-md-6 ">
                  <div class="detail-box">
                    <h1>
                      Reliable Systems, Seamless Operations
                    </h1>
                    <p>
                      Behind every successful business is a strong backbone of operations. Our <span
                        class="text-primary fw-bold">DevOps</span> and system administration services ensure your
                      servers, cloud systems, and deployment pipelines run smoothly. We use powerful tools like <span
                        class="text-primary fw-bold">Docker</span>, <span
                        class="text-primary fw-bold">Kubernetes</span>, and <span
                        class="text-primary fw-bold">AWS</span> to automate processes, manage infrastructure, and
                      deliver reliable, scalable solutions. Trust <span class="text-success fw-bold">WEBIOX</span> to
                      streamline your operations.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="/images/server.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="container ">
              <div class="row">
                <div class="col-md-6 ">
                  <div class="detail-box">
                    <h1>
                      Smarter Bots for Smarter Trading
                    </h1>
                    <p>
                      Take your crypto game to the next level with intelligent bots built by <span
                        class="text-success fw-bold">WEBIOX</span>. From data tracking to automated trading, we develop
                      bots using <span class="text-primary fw-bold">Node.js</span>, <span
                        class="text-primary fw-bold">Python</span>, and <span class="text-primary fw-bold">machine
                        learning algorithms</span> that adapt to market trends. Whether you’re a trader or an investor,
                      our solutions help you stay ahead of the curve in the dynamic world of <span
                        class="text-primary fw-bold">cryptocurrency</span>.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="/images/crypto.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <template #container-end>
            <div class="autoplay-progress">
              <svg viewBox="0 0 48 48" ref="progressCircle">
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref="progressContent"></span>
            </div>
          </template>
        </swiper>
      </section>
      <!-- end slider section -->
    </div>
    <!-- service section -->

    <section class="service_section layout_padding p-100">
      <div class="service_container">
        <div class="container">
          <div class="heading_container heading_center">
            <h2>Our <span>Services</span></h2>
            <p>
              Empowering Your Business with Expert IT Solutions
            </p>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="box">
                <div class="img-box">
                  <img src="/images/web-app.svg" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Web application<br>development</h5>
                  <p>
                    our reliable workforce build your web applications with cutting-edge technologies to scale your
                    business
                    and customer needs.
                  </p>
                  <a href=""> Read More </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box">
                <div class="img-box">
                  <img src="/images/mobile-app.svg" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Mobile application<br>development</h5>
                  <p>
                    Our highly experience fullstack and mobile app developers turn your ideas from scratch into high
                    performance applications in various platforms including Android and IOS
                  </p>
                  <a href=""> Read More </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box">
                <div class="img-box">
                  <img src="/images/custom-code.svg" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Custom software<br>development</h5>
                  <p>
                    Exceptional custom software development for crafting your business ideas into software products and
                    make
                    dreams come true.
                  </p>
                  <a href=""> Read More </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box">
                <div class="img-box">
                  <img src="/images/network.svg" alt="" />
                </div>
                <div class="detail-box">
                  <h5>DevOps & system<br>administration</h5>
                  <p>
                    Make your business development process more productive and agile by implementing our DevOps
                    solutions.
                  </p>
                  <a href=""> Read More </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box">
                <div class="img-box">
                  <img src="/images/server-s.svg" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Network administration<br>and Security</h5>
                  <p>
                    Exceptional custom software development for crafting your business ideas into software products and
                    make
                    dreams come true.
                  </p>
                  <a href=""> Read More </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box">
                <div class="img-box">
                  <img src="/images/cms.svg" alt="" />
                </div>
                <div class="detail-box">
                  <h5>CMS development<br>and Web design</h5>
                  <p>
                    We provide all conceivable WordPress services. That includes creating custom themes & plugins and
                    enhancing the performance of the platform.
                  </p>
                  <a href=""> Read More </a>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <a href=""> View All </a>
          </div>
        </div>
      </div>
    </section>

    <!-- end service section -->

    <!-- about section -->

    <section class="about_section layout_padding p-100">
      <div class="container">
        <div class="heading_container heading_center">
          <h2>About <span>Us</span></h2>
          <p>
            More Than Just a Company: Our Purpose and Commitment
          </p>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="img-box">
              <img src="/images/about-img.png" alt="" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="detail-box">
              <h3>We Are Webiox</h3>
              <p>
                Webiox is a group of professionals in information technology field resident in europe working to
                deliver
                efficient and creative business solutions focusing on various technologies including:<br>
              <ul>
                <li>Web application development</li>
                <li>Mobile application development</li>
                <li>Custom software development</li>
                <li>DevOps & system administration</li>
                <li>CMS development and Web design</li>
                <li>Network administration and Security</li>
              </ul>
              </p>
              <p>
                The world needs remote and cost efficient web and software solutions more than ever. Covid hasn’t only
                changed the way we live but the way we work, adaptability is the key here.
                If you’re looking to adapt swiftly by not missing opportunities around you then let us help and manifest
                the
                great achievements of your dreams right before your eyes!
              </p>
              <a href=""> Read More </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- end about section -->

    <!-- why section -->

    <section class="why_section layout_padding p-100">
      <div class="container">
        <div class="heading_container heading_center">
          <h2>Why Choose <span>Us</span></h2>
        </div>
        <div class="why_container d-flex justify ">
          <div class="box col-md-3">
            <div class="img-box">
              <img src="/images/years.svg" alt="" />
            </div>
            <div class="detail-box">
              <h5>10+ | years of experience</h5>
              <p>
                Benefit from our 10+ years of experience. We put our expertise to work, focusing on your specific needs
                and
                goals.
              </p>
            </div>
          </div>
          <div class="box col-md-3">
            <div class="img-box">
              <img src="/images/achivment.svg" alt="" />
            </div>
            <div class="detail-box">
              <h5>800+ | projects delivered</h5>
              <p>
                We bring the experience of 800+ delivered projects, ensuring reliable solutions for your needs.
              </p>
            </div>
          </div>
          <div class="box col-md-3">
            <div class="img-box">
              <img src="/images/earth.svg" alt="" />
            </div>
            <div class="detail-box">
              <h5>50+ | countries served</h5>
              <p>
                We're proud to have served clients in 50+ countries, building a global network and making a positive
                impact
                across borders.
              </p>
            </div>
          </div>
          <div class="box col-md-3">
            <div class="img-box">
              <img src="/images/handshake.svg" alt="" />
            </div>
            <div class="detail-box">
              <h5>98% | Client satisfaction</h5>
              <p>
                With a 98% client satisfaction rate, our results speak for themselves. We're committed to providing
                solutions that not only meet but surpass your goals.
              </p>
            </div>
          </div>
        </div>
        <div class="btn-box">
          <a href=""> Read More </a>
        </div>
      </div>
    </section>

    <!-- end why section -->

    <!-- team section -->
    <section class="team_section layout_padding p-100">
      <div class="container-fluid">
        <div class="heading_container heading_center">
          <h2 class="">Our <span> Team</span></h2>
        </div>

        <div class="team_container">
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="box">
                <div class="img-box">
                  <img src="/images/team/saied-salehi.jpg" class="img1" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Saeid Salehi</h5>
                  <p>Linux System Administrator</p>
                </div>

                <div class="social_box">
                  <a href="linkedin.com/in/saeid-salehi/">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="box">
                <div class="img-box">
                  <img src="/images/team/mehran-salehi.png" class="img1" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Mehran Salehi</h5>
                  <p>Full Stack Developer</p>
                </div>

                <div class="social_box">
                  <a href="https://github.com/mehransalehi">
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="https://www.instagram.com/_webiox/">
                    <i class="fa-brands fa-square-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/mehran--salehi/">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="box">
                <div class="img-box">
                  <img src="/images/team/sina-salehi.jpg" class="img1" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Sina Salehi</h5>
                  <p>Project Managment</p>
                </div>

                <div class="social_box">
                  <a href="https://www.linkedin.com/in/sina-salehi-461ba2174/">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="box">
                <div class="img-box">
                  <img src="/images/team/pooya-azarpour.jpg" class="img1" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Pooya Azarpour</h5>
                  <p>Software Engineer</p>
                </div>
                <div class="social_box">
                  <a href="https://github.com/poyaz">
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="https://stackoverflow.com/users/6759368/pooya">
                    <i class="fa-brands fa-stack-overflow"></i>
                  </a>
                  <a href="https://linkedin.com/in/pooya-azarpour">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="box">
                <div class="img-box">
                  <img src="/images/team/mohammad-serafat.jpg" class="img1" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Mohammad Sherafat</h5>
                  <p>Software Engineer</p>
                </div>
                <div class="social_box">
                  <a href="https://www.linkedin.com/in/mohammad-sherafat/">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="box">
                <div class="img-box">
                  <img src="/images/team/naser-yousefi.jpg" class="img1" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Naser Yousefi</h5>
                  <p>Full Stack Developer</p>
                </div>
                <div class="social_box">
                  <a href="#">
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-square-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end team section -->

    <!-- client section -->

    <section class="client_section layout_padding p-100">
      <div class="container">
        <div class="heading_container heading_center psudo_white_primary mb_45">
          <h2>What says our <span>Customers</span></h2>
        </div>
        <swiper ref="{swiperRef}" :slidesPerView="2" :centeredSlides="true" :spaceBetween="30" :pagination="{
          type: 'fraction',
        }" :navigation="true" :modules="[Pagination, Navigation]" class="mySwiper pb-5">
          <swiper-slide>
            <div class="box">
              <div class="img-box">
                <img src="/images/clients/client1.jpg" alt="" class="box-img" />
              </div>
              <div class="detail-box">
                <div class="client_id">
                  <div class="client_info">
                    <h6>Rashid K. Italy</h6>
                    <p>CTO - PrismaSofts</p>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  The best and quality work done by the <span class="text-primary fw-bold">WEBIOX</span>, super dedicated, awesome communications and
                  professional
                  approach. They have real technical skills, and they have the ability to find the right and best way to
                  get
                  your work done.
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box">
              <div class="img-box">
                <img src="/images/clients/client2.jpg" alt="" class="box-img" />
              </div>
              <div class="detail-box">
                <div class="client_id">
                  <div class="client_info">
                    <h6>Jan D. Germany</h6>
                    <p>CEO - Venomsupply</p>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  I appreciate the results, Amin from <span class="text-primary fw-bold">WEBIOX</span> did a great job and supported all aspects of project,
                  their
                  solution design was something i've been really looking for and i'm amazed on the deliverables.Thank
                  you so
                  far and this association would be continued :)
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box">
              <div class="img-box">
                <img src="/images/clients/client3.jpg" alt="" class="box-img" />
              </div>
              <div class="detail-box">
                <div class="client_id">
                  <div class="client_info">
                    <h6>Karolis T. Germany</h6>
                    <p>CEO – IProyal</p>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  We been working with <span class="text-primary fw-bold">WEBIOX</span> on providing several business solutions for our clients and quite
                  satisfied
                  on the results so far.
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <!-- end client section -->
  </div>
</template>


<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const progressCircle = ref(null);
const progressContent = ref(null);
const onAutoplayTimeLeft = (s, time, progress) => {
  progressCircle.value.style.setProperty('--progress', 1 - progress);
  progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
};

</script>


<style>
.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}
</style>
