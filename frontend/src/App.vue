<template>
  <div id="app">
    <div>
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
              ManRenewables Platform
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <div class="row">
              <div class="col">
                <button type="button" class="btn btn-outline-warning">
                  <router-link to="/">Home</router-link>
                </button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-outline-warning">
                  <router-link to="/about">About</router-link>
                </button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-outline-warning">
                  <router-link to="/dashboard">Dashboard</router-link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <br />
    <div>
      <router-view />
    </div>
<!--    <LineChart/>-->
        </div>

</template>


<script>
    import LineChart from "./views/LineChart.vue"

    export default {
        name: "App",
        components: {
            LineChart
        },
    };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
