const ctx = document.getElementById('receitasDespesasChart').getContext('2d');
        const receitasDespesasChart = new Chart(ctx, {
            type: 'bar', 
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'], // Eixo X (meses)
                datasets: [
                    {
                        label: 'Receita',
                        data: [3000, 2800, 3500, 4200, 3900, 4600, 1200, 2300, 1400, 3500, 2000, 3000], // Dados de receitas
                        backgroundColor: 'rgba(54, 162, 235, 0.7)', 
                        borderColor: 'rgba(54, 162, 235, 1)', 
                        borderWidth: 1
                    },
                    {
                        label: 'Despesa',
                        data: [2500, 3000, 3300, 4000, 3700, 4200, 700, 3900, 1250, 1500, 3800, 2800], // Dados de despesas
                        backgroundColor: 'rgba(255, 99, 132, 0.7)', 
                        borderColor: 'rgba(255, 99, 132, 1)', 
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true, 
                        ticks: {
                            stepSize: 500 
                        }
                    }
                }
            }
        });