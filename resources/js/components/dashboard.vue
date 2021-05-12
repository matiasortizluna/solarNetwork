<template>
    <div class="col-md-12 row">
        <div class="col-md-3">
            <div class="card card-outline card-success">
                <div class="card-header">
                    <h3 class="card-title">Currente de Produção</h3>
                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    {{this.currentProd}}
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card card-outline card-success">
                <div class="card-header">
                    <h3 class="card-title">Currente de Consumo</h3>
                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    {{this.currentConsu}}
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card card-outline card-success">
                <div class="card-header">
                    <h3 class="card-title">Voltagem Painel</h3>
                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    {{this.voltagePainel}}
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card card-outline card-success">
                <div class="card-header">
                    <h3 class="card-title">Voltagem Bateria</h3>
                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    {{this.voltageBattery}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dashboard",
        data: function () {
            return {
                currentProd: null,
                currentConsu: null,
                voltagePainel: null,
                voltageBattery: null,
            }
        },
        methods: {
            getData() {
                axios.get("tgrweddafead").then(response => {
                    this.currentProd = response.data.currentProd;
                    this.currentConsu = response.data.currentConsu;
                    this.voltagePainel = response.data.voltagePainel;
                    this.voltageBattery = response.data.voltageBattery;
                });
            },
        }
    }
</script>

<style scoped>

</style>
