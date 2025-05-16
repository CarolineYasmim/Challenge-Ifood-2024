const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('chart').getContext('2d');
    const data = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [
            {
                type: 'line',
                label: 'Lucro / Prejuízo',
                data: [3000, 5000, 8000, -14000, 7000, 4000, 7000, 2500, 5500, 7000, 5000, 8000],
                borderColor: '#FF524C',
                borderWidth: 2,
                fill: false,
                yAxisID: 'y'
            },

            {
                type: 'bar',
                label: 'Entradas',
                backgroundColor: '#F2FDF5',
                data: [15000, 20000, 25000, 30000, 20000, 18000, 22000, 19000, 23000, 25000, 24000, 28000],
                borderColor: '#7ADC9E',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'bar',
                label: 'Saidas',
                backgroundColor: '#FFE7E1',
                data: [-12000, -15000, -17000, -16000, -13000, -14000, -15000, -16500, -17500, -18000, -19000, -20000],
                borderColor: '#FF7752',
                borderWidth: 1,
                yAxisID: 'y'
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    stacked: true
                },
                x: {
                    stacked: true
                }
            },
            responsive: true,
            maintainAspectRatio: true,
        }
    };

    new Chart(ctx, config);
});


//Gráficos dos principais produtos

const ctx = document.getElementById('salesChart').getContext('2d');

// Dados dos produtos e vendas
const data = {
    labels: ['Produto 1', 'Produto 2', 'Produto 3', 'Produto 4', 'Produto 5'],
    datasets: [{
        label: 'Vendas',
        data: [5200, 4500, 3800, 2000, 1200], // Quantidade de vendas
        backgroundColor: '#FF2E4C', // Cor tema iFood
        borderColor: '#FF2E4C', 
        borderWidth: 1
    }]
};

// Configurações do gráfico
const config = {
    type: 'bar',
    data: data,
    options: {
        indexAxis: 'y', // Gera o gráfico horizontal
        scales: {
            x: {
                beginAtZero: true
            }
        },
        
    }
};

// Renderizando o gráfico
const salesChart = new Chart(ctx, config);

 // Gráfico Receitas vs Despesas
 const receitasDespesasCtx = document.getElementById('receitasDespesasChart').getContext('2d');
 const receitasDespesasChart = new Chart(receitasDespesasCtx, {
     type: 'doughnut',
     data: {
         labels: ['Despesas', 'Receitas'],
         datasets: [{
             data: [60, 40], // Percentagens de despesas e receitas
             backgroundColor: ['#FF6384', '#36A2EB'],
             hoverOffset: 4
         }]
     },
     options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'bottom',
             },
         }
     }
 });

 // Gráfico Despesas/Custos
 const despesasCustosCtx = document.getElementById('despesasCustosChart').getContext('2d');
 const despesasCustosChart = new Chart(despesasCustosCtx, {
     type: 'doughnut',
     data: {
         labels: ['Aluguel', 'Salários', 'Marketing', 'Infraestrutura', 'Outros'],
         datasets: [{
             data: [30, 25, 20, 15, 10], // Percentagens para cada categoria de despesa
             backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
             hoverOffset: 4
         }]
     },
     options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'bottom',
             },
         }
     }
 });


 // Dados fictícios de exemplo
const fluxoDados = [
    { data: '15/09/2024', tipo: 'Entrada', valor: 500, saldo: 500 },
    { data: '16/09/2024', tipo: 'Saída', valor: 200, saldo: 300 },
    { data: '17/09/2024', tipo: 'Entrada', valor: 400, saldo: 700 },
    { data: '18/09/2024', tipo: 'Saída', valor: 150, saldo: 550 }
];

// Função para renderizar os dados na tabela
function renderTabelaFluxo() {
    const tabela = document.getElementById('fluxoCaixa');

    fluxoDados.forEach(item => {
        const row = document.createElement('tr');

        // Coluna Data
        const dataCol = document.createElement('td');
        dataCol.textContent = item.data;

        // Coluna Tipo (Entrada/Saída com cores)
        const tipoCol = document.createElement('td');
        tipoCol.textContent = item.tipo;
        tipoCol.className = item.tipo === 'Entrada' ? 'text-success' : 'text-danger'; // Verde para entrada, vermelho para saída

        // Coluna Valor
        const valorCol = document.createElement('td');
        valorCol.textContent = `R$ ${item.valor.toFixed(2)}`;

        // Coluna Saldo
        const saldoCol = document.createElement('td');
        saldoCol.textContent = `R$ ${item.saldo.toFixed(2)}`;

        // Adicionar colunas à linha
        row.appendChild(dataCol);
        row.appendChild(tipoCol);
        row.appendChild(valorCol);
        row.appendChild(saldoCol);

        // Adicionar linha à tabela
        tabela.appendChild(row);
    });
}

// Executar função para preencher a tabela
renderTabelaFluxo();
