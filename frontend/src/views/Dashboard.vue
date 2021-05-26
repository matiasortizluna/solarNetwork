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
      <div class="row">
        <div class="col-md-2">
          <br />
          <br />
          <label class="h3 mr-3 text-gray-800">Data</label>
          <input
            v-model="data"
            id="date"
            type="date"
            min="1899-01-01"
            max="2030-12-12"
            v-on:change="getDataByDay"
          />
        </div>
        <div class="col-md-10"></div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <LineChart :data="dados" />
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
                  <button type="button" class="btn btn-success">Active</button>
                </div>
                <div v-show="values.produciongCurrent == 0" class="col">
                  <button type="button" class="btn btn-danger">Disabled</button>
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
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import LineChart from "./LineChart.vue";

const axios = require("axios").default;

export default {
  name: "dashboard",
  components: {
    LineChart,
    Calendar,
    DatePicker,
  },
  data: function () {
    return {
      values: [],
      dados: {
        consumed: [
          2,
          5,
          8,
          4,
          9,
          6,
          1,
          9,
          5.22,
          6.33,
          15,
          0.15,
          0.6,
          8,
          4,
          6,
          3,
          7,
          6,
          2.33,
          5,
          1.22,
          1.02,
          3,
        ],
        produced: [
          2,
          5,
          8,
          4,
          9,
          6,
          1,
          9,
          5.22,
          6.33,
          15,
          0.15,
          0.6,
          8,
          4,
          6,
          3,
          7,
          6,
          2.33,
          8,
          4.22,
          4.02,
          1,
        ],
      },
      data: null,
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
    getDataByDay: function () {
      axios
        .get("http://localhost:8080/valuesDay?" + "&data=" + this.data)
        .then((response) => {
          this.dados.consumed = response.data.consumed;
          this.dados.produced = response.data.produced;
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
