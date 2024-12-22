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
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </p>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="box">
                <div class="img-box">
                  <img src="/images/s1.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Currency Wallet</h5>
                  <p>
                    fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of
                    using
                  </p>
                  <a href=""> Read More </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box">
                <div class="img-box">
                  <img src="/images/s2.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Security Storage</h5>
                  <p>
                    fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of
                    using
                  </p>
                  <a href=""> Read More </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box">
                <div class="img-box">
                  <img src="/images/s3.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Expert Support</h5>
                  <p>
                    fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of
                    using
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
            Magni quod blanditiis non minus sed aut voluptatum illum quisquam
            aspernatur ullam vel beatae rerum ipsum voluptatibus
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
              <h3>We Are Finexo</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All
              </p>
              <p>
                Molestiae odio earum non qui cumque provident voluptates,
                repellendus exercitationem, possimus at iste corrupti officiis
                unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam
                ab omnis quasi expedita.
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
          <div class="box">
            <div class="img-box">
              <img src="/images/w1.png" alt="" />
            </div>
            <div class="detail-box">
              <h5>Expert Management</h5>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis
                cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                laborum dolores quod nisi vitae voluptate ipsa?
              </p>
            </div>
          </div>
          <div class="box">
            <div class="img-box">
              <img src="/images/w2.png" alt="" />
            </div>
            <div class="detail-box">
              <h5>Secure Investment</h5>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis
                cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                laborum dolores quod nisi vitae voluptate ipsa?
              </p>
            </div>
          </div>
          <div class="box">
            <div class="img-box">
              <img src="/images/w3.png" alt="" />
            </div>
            <div class="detail-box">
              <h5>Instant Trading</h5>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis
                cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                laborum dolores quod nisi vitae voluptate ipsa?
              </p>
            </div>
          </div>
          <div class="box">
            <div class="img-box">
              <img src="/images/w4.png" alt="" />
            </div>
            <div class="detail-box">
              <h5>Happy Customers</h5>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis
                cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                laborum dolores quod nisi vitae voluptate ipsa?
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
                  <img src="/images/team-1.jpg" class="img1" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Joseph Brown</h5>
                  <p>Marketing Head</p>
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
            <div class="col-lg-3 col-sm-6">
              <div class="box">
                <div class="img-box">
                  <img src="/images/team-2.jpg" class="img1" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Nancy White</h5>
                  <p>Marketing Head</p>
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
            <div class="col-lg-3 col-sm-6">
              <div class="box">
                <div class="img-box">
                  <img src="/images/team-3.jpg" class="img1" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Earl Martinez</h5>
                  <p>Marketing Head</p>
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
            <div class="col-lg-3 col-sm-6">
              <div class="box">
                <div class="img-box">
                  <img src="/images/team-4.jpg" class="img1" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Josephine Allard</h5>
                  <p>Marketing Head</p>
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
                <img src="/images/client1.jpg" alt="" class="box-img" />
              </div>
              <div class="detail-box">
                <div class="client_id">
                  <div class="client_info">
                    <h6>LusDen</h6>
                    <p>magna aliqua. Ut</p>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box">
              <div class="img-box">
                <img src="/images/client1.jpg" alt="" class="box-img" />
              </div>
              <div class="detail-box">
                <div class="client_id">
                  <div class="client_info">
                    <h6>LusDen</h6>
                    <p>magna aliqua. Ut</p>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box">
              <div class="img-box">
                <img src="/images/client1.jpg" alt="" class="box-img" />
              </div>
              <div class="detail-box">
                <div class="client_id">
                  <div class="client_info">
                    <h6>LusDen</h6>
                    <p>magna aliqua. Ut</p>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box">
              <div class="img-box">
                <img src="/images/client1.jpg" alt="" class="box-img" />
              </div>
              <div class="detail-box">
                <div class="client_id">
                  <div class="client_info">
                    <h6>LusDen</h6>
                    <p>magna aliqua. Ut</p>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis
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