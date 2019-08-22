<template>

    <div class="row align-items-center justify-content-center">
          <div class="col-md-12">
            <div class="mb-5 text-center">
              <h1 class="text-white font-weight-bold">Python Jobs</h1>
              <p>Find your dream job</p>
            </div>
            <form method="post" class="search-jobs-form">
              <div class="row mb-5">
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <input v-model="jobSearch" type="text" class="form-control form-control-lg" placeholder="Job title, keywords...">
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <input v-model="jobSearch" class="form-control" id="location" placeholder="Job location"/>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <button type="submit" class="btn btn-primary btn-lg btn-block text-white btn-search"><span class="icon-search icon mr-2"></span>Search Job</button>
                </div>
              </div>
            </form>
          </div>
        </div>
</template>

<script>

import axios from "axios";
import vue from "vue"
import {mapState, mapActions} from "vuex"

vue.use(axios)

export default{

    data(){
        return {
            params:{
                jobTitle:"",
                jobLocation:""
            }

        }
    },
    methods:{
        ...mapState(["jobs"]),
        ...mapActions(["addJobs"])
    },
    watch:{
        jobTitle:function(value) {
            axios.get(`https://jobs.github.com/positions.json?description=${value.params.jobTitle}&location=${value.params.jobLocation}`).then((data)=>{
              this.addJobs(data.data)
              console.log(this.params)
            }).catch((error)=>{console.log("unable to reach server::"+error)})
        }
        

    }



}
</script>