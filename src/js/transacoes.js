new Vue({
    el: '#app',
    data: {
        saldoAtual: 5000.00,
        transacoes: [
            { id: 1, data: '10/06/2024', descricao: 'Venda - Pedido #123456', valor: '50,00' },
            { id: 2, data: '09/06/2024', descricao: 'Pagamento de Taxa de Serviço', valor: '10,00' },
            { id: 3, data: '08/06/2024', descricao: 'Transferência Recebida', valor: '100,00' },
            { id: 4, data: '07/06/2024', descricao: 'Pagamento Fornecedor', valor: '300,00' }
        ]
    }
});
