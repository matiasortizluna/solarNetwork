<template>
  <div class="main">
    <br />
    <br />
    <br />
    <section>
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 style="font-size: 100px">The Big Picture</h1>
            <br /><br />
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              voluptates rerum eveniet sapiente repellat esse, doloremque quod
            </h2>
          </div>
        </div>
        <br /><br /><br />
        <div class="authors row" style="text-align: left">
          <div class="col">
            <h1>Fabio Henriques</h1>
            <p>CEO</p>
          </div>
        </div>
        <br />
        <div class="row" style="text-align: left">
          <div class="col">
            <h1>Matias Luna</h1>
            <p>CEO</p>
          </div>
        </div>
        <br />
        <div class="row" style="text-align: left">
          <div class="col">
            <h1>Gonçalo Vicente</h1>
            <p>CEO</p>
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