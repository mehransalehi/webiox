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
                      Crypto <br>
                      Currency
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta
                      aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis
                      delectus repellat modi impedit sequi.
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
                    <img src="/images/slider-img.png" alt="">
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
                      Crypto <br>
                      Currency
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta
                      aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis
                      delectus repellat modi impedit sequi.
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
                    <img src="/images/slider-img.png" alt="">
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
                      Crypto <br>
                      Currency
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta
                      aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis
                      delectus repellat modi impedit sequi.
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
                    <img src="/images/slider-img.png" alt="">
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
                      Crypto <br>
                      Currency
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta
                      aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis
                      delectus repellat modi impedit sequi.
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
                    <img src="/images/slider-img.png" alt="">
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