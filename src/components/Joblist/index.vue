<template>
 <div class="col-md-2">
              <a href="job-single.html"><img src="../assets/images/featured-listing-1.jpg" alt="Image" class="img-fluid"></a>
            </div>
            <div class="col-md-4">
              <span class="badge badge-primary px-2 py-1 mb-3">Freelancer</span>
              <h2><a href="job-single.html">Dropbox Product Designer</a> </h2>
              <p class="meta">Publisher: <strong>John Stewart</strong> In: <strong>Design</strong></p>
            </div>
            <div class="col-md-3 text-left">
              <h3>Melbourn</h3>
              <span class="meta">Australia</span>
            </div>
            <div class="col-md-3 text-md-right">
              <strong class="text-black">$60k &mdash; $100k</strong>
            </div>
</template>

<script>
import axios from "axios"
import vue from "vue"

vue.use(axios)

export default {
    name:"job",
    methods:{
        getJobs(){
            response = axios.get("https://jobs.github.com/positions?description=python&location=us").then
            
        }
    }
}
</script>