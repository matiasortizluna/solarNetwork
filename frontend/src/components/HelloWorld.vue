<template>
    <div class="row">
        <br>
        <div class="col-md-12">
            <div class="box box-primary">
                <div class="box-body no-padding">

                    nhbtgvrfdcs
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios').default;

    export default {
        name: "dashboard",
        data: function () {
            return {
               values: []
            };
        },
        methods: {
            getValues: function () {
                axios.get("http://localhost:8080/values")
                    .then(response => {
                        this.values = response.data;
                    })
            },
        },
        mounted() {
            this.getValues();
        }
    }
</script>

<style scoped>

</style>
