<template>
      <div class="site-wrap">

    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div> <!-- .site-mobile-menu -->


    <!-- NAVBAR -->
    <NavBar/>

    <!-- HOME -->
    <section class="section-hero overlay inner-page bg-image" style="background-image: url('../assets/images/hero_1.jpg');"
      id="home-section">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h1 class="text-white font-weight-bold">{{details().title}}</h1>
          </div>
        </div>
      </div>
    </section>
    
    
    <section class="site-section">
      <div class="container">
        <div class="row align-items-center mb-5">
          <div class="col-lg-8 mb-4 mb-lg-0">
            <div class="d-flex align-items-center">
              <div class="border p-2 d-inline-block mr-3 rounded">
                <img src="../assets/images/featured-listing-1.jpg" alt="Free Website Template By Free-Template.co">
              </div>
              <div>
                <h2>{{details().title}}</h2>
                <div>
                  <span class="ml-0 mr-2 mb-2"><span class="icon-briefcase mr-2"></span>{{details().company}}</span>
                  <span class="m-2"><span class="icon-room mr-2"></span>{{details().location}}</span>
                  <span class="m-2"><span class="icon-clock-o mr-2"></span><span class="text-primary">{{details().type}}</span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="row">
              <div class="col-6">
                <a href="#" class="btn btn-block btn-light btn-md"><span class="icon-heart-o mr-2 text-danger"></span>Save
                  Job</a>
              </div>
              <div class="col-6">
                <router-link to="#how-to-apply" class="btn btn-block btn-primary btn-md">Apply Now</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="mb-5">
              <figure class="mb-5"><img src="../assets/images/sq_img_1.jpg" alt="Free Website Template by Free-Template.co"
                  class="img-fluid rounded"></figure>
              <h3 class="h5 d-flex align-items-center mb-4 text-primary"><span class="icon-align-left mr-3"></span>Job
                Description</h3>
                <div v-html="details().description"></div>
              
              
            </div>
    
            <div v-html="details().how_to_apply" id="how-to-apply" class="mb-5">How to Apply</h3>
            </div>
    
            
          </div>
          <div class="col-lg-4">
            <div class="bg-light p-3 border rounded mb-4">
              <h3 class="text-primary  mt-3 h5 pl-3 mb-3 ">Job Summary</h3>
              <ul class="list-unstyled pl-3 mb-0">
                <li class="mb-2"><strong class="text-black">Published on:</strong> {{details().created_at}}</li>
                <!-- <li class="mb-2"><strong class="text-black">Vacancy:</strong> 20</li> -->
                <li class="mb-2"><strong class="text-black">Employment Status:</strong> {{details().type}}</li>
                <li class="mb-2"><strong class="text-black">Role:</strong> {{details().title}} </li>
                <li class="mb-2"><strong class="text-black">Job Location:</strong> {{details().location}}</li>
                <!-- <li class="mb-2"><strong class="text-black">Salary:</strong> $60k - $100k</li> -->

              </ul>
            </div>
    
            <div class="bg-light p-3 border rounded">
              <h3 class="text-primary  mt-3 h5 pl-3 mb-3 ">Share</h3>
              <div class="px-3">
                <a href="#" class="pt-3 pb-3 pr-3 pl-0"><span class="icon-facebook"></span></a>
                <a href="#" class="pt-3 pb-3 pr-3 pl-0"><span class="icon-twitter"></span></a>
                <a href="#" class="pt-3 pb-3 pr-3 pl-0"><span class="icon-linkedin"></span></a>
                <a href="#" class="pt-3 pb-3 pr-3 pl-0"><span class="icon-pinterest"></span></a>
              </div>
            </div>
    
          </div>
        </div>
      </div>
    </section>

    <footer class="site-footer">


      <div class="container">
        <div class="row mb-5">
          <div class="col-6 col-md-3 mb-4 mb-md-0">
            <h3>Search Trending</h3>
            <ul class="list-unstyled">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Graphic Design</a></li>
              <li><a href="#">Web Developers</a></li>
              <li><a href="#">Python</a></li>
              <li><a href="#">HTML5</a></li>
              <li><a href="#">CSS3</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-3 mb-4 mb-md-0">
            <h3>Company</h3>
            <ul class="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-3 mb-4 mb-md-0">
            <h3>Support</h3>
            <ul class="list-unstyled">
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-3 mb-4 mb-md-0">
            <h3>Contact Us</h3>
            <div class="footer-social">
              <a href="#"><span class="icon-facebook"></span></a>
              <a href="#"><span class="icon-twitter"></span></a>
              <a href="#"><span class="icon-instagram"></span></a>
              <a href="#"><span class="icon-linkedin"></span></a>
            </div>
          </div>
        </div>

        <div class="row text-center">
          <div class="col-12">
            <p>
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              <!-- Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made
              with <i class="icon-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com"
                target="_blank">Colorlib</a> -->
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            </p>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios"
import vue from "vue"
import NavBar from "@/views/NavBar.vue"

vue.use(axios)

export default {
  components:{
    NavBar
  },
  computed:{
    
  },
  methods:{
    ...mapState(["details"]),
    ...mapActions(["addDetail"]),
  },
      // },
  created(){

        axios.get(`https://jobs.github.com/positions/${this.$route.params.id}.json`).then((data)=>{
              this.addDetail(data.data)
            }).catch((error)=>{console.error("unable to reach server::"+error)})
        // retrieveJob($route.params.id)
        
      },
    
}
</script>
