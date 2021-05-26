<template>
  <div class="main">
    <br />
    <br />
    <br />
    <section>
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 style="font-size: 60px">Renowable Platform</h1>
            <br />
            <h2 style="text-align: left; width: 400px">
              The usage of Renowable energies and the most recent technology
              bring the agriculture a new better way to produce
            </h2>
          </div>
        </div>
        <br />
        <div class="authors row" style="text-align: left">
          <div class="col">
            <h1>Fabio Henriques</h1>
            <p>CEO (Chief Executive Officer)</p>
          </div>
        </div>
        <br />
        <div class="row" style="text-align: left">
          <div class="col">
            <h1>Matias Luna</h1>
            <p>COO (Chief Operating Officer)</p>
          </div>
        </div>
        <br />
        <div class="row" style="text-align: left">
          <div class="col">
            <h1>Gonçalo Vicente</h1>
            <p>CTO (Chief Technology Officer)</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      landing_img: "../frontend/assets/pictures/landing.jpeg",
    };
  },
};
</script>

<style>
#container {
  background-image: "landing_img";
}
</style>