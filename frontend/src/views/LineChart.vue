<script>
    import {Line} from "vue-chartjs";

    export default {
        extends: Line,
        props: ['data'],
        mounted() {
            this.renderChart(
                {
                    labels: [
                        "00:00",
                        "01:00",
                        "02:00",
                        "03:00",
                        "04:00",
                        "05:00",
                        "06:00",
                        "07:00",
                        "08:00",
                        "09:00",
                        "10:00",
                        "11:00",
                        "12:00",
                        "13:00",
                        "14:00",
                        "15:00",
                        "16:00",
                        "17:00",
                        "18:00",
                        "19:00",
                        "20:00",
                        "21:00",
                        "22:00",
                        "23:00",
                    ],
                    datasets: [
                        {
                            label: "Power Consumed",
                            data: this.data.consumed,
                            backgroundColor: "rgba(255, 0, 0, 0.50)",
                            borderColor: "rgba(255, 0, 0, 0.50)",
                            pointBackgroundColor: "rgba(171, 71, 188, 1)"
                        },
                        {
                            label: "Power Produced",
                            data: this.data.produced,
                            backgroundColor: "rgba(1, 116, 188, 0.50)",
                            borderColor: "rgba(1, 116, 188, 0.50)",
                            pointBackgroundColor: "rgba(171, 71, 188, 1)"
                        }
                    ]
                },
                {
                    responsive: true,
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: "Values for day"
                    }
                }
            );
        }
    };
</script>
