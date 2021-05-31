<template>
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
                            <br/>
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
                            <br/>
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
                            <br/>
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
                                    <div v-show="values.consumptionCurrent != 0"
                                         class="col">
                                        <button type="button" class="btn btn-success">
                                            Active
                                        </button>
                                    </div>
                                    <div v-show="values.consumptionCurrent == 0"
                                         class="col">
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
                                <img src="/produciongCurrent.png"
                                     alt="Consumption Current"
                                     class="rounded-circle"
                                     height=200px widht=180px/>
                            </div>
                            <br>
                            <p class="card-text">
                                {{values.produciongCurrent}}
                            </p>
                        </div>
                        <div class="card-footer text-muted">
                            <div>
                                <p>State</p>
                            </div>
                            <div>
                                <div class="row">
                                    <div
                                        v-show="values.produciongCurrent != 0"
                                        class="col">
                                        <button type="button"
                                                class="btn btn-success">
                                            Active
                                        </button>
                                    </div>
                                    <div
                                        v-show="values.produciongCurrent == 0"
                                        class="col">
                                        <button type="button"
                                                class="btn btn-danger">
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
                    <div class="col-md-3" style="padding-right: 5%;">
                        <br>
                        <br>
                        <label class="h3 mr-3 text-gray-800">Show statics</label>

                        <select v-model="opcao">
                            <option disabled value=" ">Select a option</option>
                            <option value="dia">For day</option>
                            <option value="mes">For month</option>
                            <option value="ano">For year</option>
                        </select>
                    </div>
                    <div class="col-md-9">

                    </div>
                </div>
            <div v-if="opcao == 'dia'">
                <div class="row">
                    <div class="col-md-2">
                        <br>
                        <br>
                        <label class="h3 mr-3 text-gray-800">Date</label>
                        <input v-model="data.dia" id="date" type="date"
                               min='1899-01-01' max='2030-12-12'
                               v-on:change="getDataByValue">
                    </div>
                    <div class="col-md-10">

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <LineChart :data="dados" :labels="labelsDay"/>
                    </div>
                </div>
            </div>
            <div v-if="opcao == 'mes'">
                <div class="row">
                    <div class="col-md-2">
                        <br>
                        <br>
                        <label class="h3 mr-3 text-gray-800">Month</label>
                        <select v-model="data.mes"
                                style="background: transparent;padding-left: 10px;border: 1px solid black;">
                            <option value="" disabled selected>Month</option>
                            <option v-for="mes in meses" :value="mes">{{mes}}</option>
                        </select>
                    </div>
                    <div class="col-md-10">

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <LineChart :data="dados" :labels="labelsMonth"/>
                    </div>
                </div>
            </div>
            <div v-if="opcao == 'ano'">
                <div class="row">
                    <div class="col-md-2">
                        <br>
                        <br>
                        <label class="h3 mr-3 text-gray-800">Year</label>
                        <select v-model="data.ano"
                                style="background: transparent;padding-left: 10px;border: 1px solid black;">
                            <option value="" disabled selected>Year</option>
                            <option v-for="ano in anos" :value="ano" :key="ano">{{ano}}</option>
                        </select>
                    </div>
                    <div class="col-md-10">

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <LineChart :data="dados" :labels="labelsYear"/>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import Calendar from 'v-calendar/lib/components/calendar.umd'
    import DatePicker from 'v-calendar/lib/components/date-picker.umd'
    import LineChart from "./LineChart.vue"

    const axios = require('axios').default;

    export default {
        name: "dashboard",
        components: {
            LineChart,
            Calendar,
            DatePicker
        },
        data: function () {
            return {
                values: [],
                dados: {
                    consumed: [2, 5, 8, 4, 9, 6, 1, 9, 5.22, 6.33, 15, .15, 0.6, 8, 4, 6, 3, 7, 6, 2.33, 5, 1.22, 1.02, 3],
                    produced: [2, 5, 8, 4, 9, 6, 1, 9, 5.22, 6.33, 15, .15, 0.6, 8, 4, 6, 3, 7, 6, 2.33, 8, 4.22, 4.02, 1]
                },
                labelsDay: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00",
                    "19:00", "20:00", "21:00", "22:00", "23:00"],
                labelsMonth: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                labelsYear: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Set", "Oct", "Nov", "Dec"],
                data: {
                    dia: null,
                    mes: null,
                    ano: null
                },
                opcao: " ",
                meses: [],
                anos: []
            };
        },
        methods: {
            getValues: function () {
                axios.get("http://localhost:8080/values")
                    .then(response => {
                        this.values = response.data;
                    })
            },
            getAllValues: function () {
                axios.get("http://localhost:8080/payload/all").then((response) => {
                    //this.values = response.data;
                    console.log(response);
                });
            },
            getDataByValue: function () {
                axios.get("http://localhost:8080/values?" + '&dia=' + this.data.dia + '&mes=' + this.data.mes + '&ano=' + this.data.ano)
                    .then(response => {
                        this.dados.consumed = response.data.consumed;
                        this.dados.produced = response.data.produced;
                    })
            },
            getAllMonths: function () {
                axios.get("http://localhost:8080/months")
                    .then(response => {
                        this.meses = response.data.data;
                    })
            },
            getAllYears: function () {
                axios.get("http://localhost:8080/years")
                    .then(response => {
                        this.anos = response.data.data;
                    })
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
            this.getAllYears();
            this.getAllMonths();
        }
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
