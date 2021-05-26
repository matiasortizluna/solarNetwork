<template>
  <div>
    <br />
    <br />
    <div class="container-fluid">
      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>

        <button type="button" class="btn btn-info" @click="createValues">
          Create
        </button>
      </div>

      <!-- Content Row -->
      <div class="row">
        <!-- Pending Requests Card Example -->
        <div class="col">
          <div class="card" style="width: 20rem">
            <div class="card-header">
              <strong>Baterry Voltage</strong>
            </div>

            <div class="card-body">
              <div>
                <img
                  src="/baterry.png"
                  alt="Battery"
                  class="rounded-circle"
                  height="200px"
                  widht="180px"
                />
              </div>
              <br />
              <p class="card-text">
                {{ values.batterVoltage }}
              </p>
            </div>
            <div class="card-footer text-muted">
              <div>
                <p>State</p>
              </div>
              <div>
                <div class="row">
                  <div v-show="values.batterVoltage != 0" class="col">
                    <button type="button" class="btn btn-success">
                      Active
                    </button>
                  </div>
                  <div v-show="values.batterVoltage == 0" class="col">
                    <button type="button" class="btn btn-danger">
                      Disabled
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 20rem">
            <div class="card-header">
              <strong>Solar Panel Voltage</strong>
            </div>

            <div class="card-body">
              <div>
                <img
                  src="/solarpanel.png"
                  alt="Solar Panel"
                  class="rounded-circle"
                  height="200px"
                  widht="180px"
                />
              </div>
              <br />
              <p class="card-text">
                {{ values.solarPanelVoltage }}
              </p>
            </div>
            <div class="card-footer text-muted">
              <div>
                <p>State</p>
              </div>
              <div>
                <div class="row">
                  <div v-show="values.solarPanelVoltage != 0" class="col">
                    <button type="button" class="btn btn-success">
                      Active
                    </button>
                  </div>
                  <div v-show="values.solarPanelVoltage == 0" class="col">
                    <button type="button" class="btn btn-danger">
                      Disabled
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 20rem">
            <div class="card-header">
              <strong>Consumption Current</strong>
            </div>

            <div class="card-body">
              <div>
                <img
                  src="/currentconsumption.png"
                  alt="Consumption Current"
                  class="rounded-circle"
                  height="200px"
                  widht="180px"
                />
              </div>
              <br />
              <p class="card-text">
                {{ values.consumptionCurrent }}
              </p>
            </div>
            <div class="card-footer text-muted">
              <div>
                <p>State</p>
              </div>
              <div>
                <div class="row">
                  <div v-show="values.consumptionCurrent != 0" class="col">
                    <button type="button" class="btn btn-success">
                      Active
                    </button>
                  </div>
                  <div v-show="values.consumptionCurrent == 0" class="col">
                    <button type="button" class="btn btn-danger">
                      Disabled
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 20rem">
            <div class="card-header">
              <strong>Produciong Current</strong>
            </div>

            <div class="card-body">
              <div>
                <img
                  src="/produciongCurrent.png"
                  alt="Consumption Current"
                  class="rounded-circle"
                  height="200px"
                  widht="180px"
                />
              </div>
              <br />
              <p class="card-text">
                {{ values.produciongCurrent }}
              </p>
            </div>
            <div class="card-footer text-muted">
              <div>
                <p>State</p>
              </div>
              <div>
                <div class="row">
                  <div v-show="values.produciongCurrent != 0" class="col">
                    <button type="button" class="btn btn-success">
                      Active
                    </button>
                  </div>
                  <div v-show="values.produciongCurrent == 0" class="col">
                    <button type="button" class="btn btn-danger">
                      Disabled
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;

export default {
  name: "dashboard",
  data: function () {
    return {
      values: [],
    };
  },
  methods: {
    getValues: function () {
      axios.get("http://localhost:8080/payload").then((response) => {
        this.values = response.data;
        console.log(response);
      });
    },
    getAllValues: function () {
      axios.get("http://localhost:8080/payload/all").then((response) => {
        //this.values = response.data;
        console.log(response);
      });
    },
    createValues: function () {
      let payload = {
        batterVoltage: "0",
        solarPanelVoltage: "1.3",
        consumptionCurrent: "13",
        produciongCurrent: "12",
      };
      axios.post("http://localhost:8080/payload", payload).then((response) => {
        console.log(response);
      });
    },
  },
  mounted() {
    this.getValues();
    //this.getAllValues();
  },
};
</script>

<style>
</style>