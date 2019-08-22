<template>
  <div class="col-md-2">
    <div v-for="job in jobs()" :key="job.id">     
            <!-- <a href="#"><img alt="Image" class="img-fluid"></a> -->
            <div class="col-md-4">
              <span class="badge badge-primary px-2 py-1 mb-3">{{job.type}}</span>
              <h2><a :href="job.url">Apply</a> </h2>
              <p class="meta"> : <strong>John Stewart</strong> In: <strong>{{job.title}}</strong></p>
            </div>
            <div class="col-md-3 text-left">
              <h4>{{job.location}}</h4>
            </div>
            <div class="col-md-3 text-md-right">
              <strong class="text-black">{{job.created_at}}</strong>
            </div>
    </div>


</div>
 
</template>

<script>
import axios from "axios"
import vue from "vue"
import { mapState, mapActions } from "vuex";

vue.use(axios)
// axios.defaults.headers.get['Content-Type'] ='application/json';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


export default {
    name:"job",
    methods:{
        ...mapState(["jobs"]),
        ...mapActions(["addJobs"])
    },
    created(){
            axios.get("https://jobs.github.com/positions.json?description=python&location=us").then((data)=>{
              this.addJobs(data.data)
              
            }).catch((error)=>{console.log("unable to reach server::"+error)})
            
        },
        mounted(){
          if (this.jobs().length>0){console.log(this.jobs().data)}
        }

}
</script>