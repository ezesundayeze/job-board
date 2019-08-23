<template>
    <div class="col-md-7 text-center">
        <h2 class="section-title mb-2">{{jobs().length}} Job(s) found</h2>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default{

methods:{
    ...mapState(["jobs"])
}

}
</script>