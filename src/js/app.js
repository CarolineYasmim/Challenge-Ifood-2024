new Vue({
    el: '#app',
    data: {
        recebiveis: [
            { id: 1, data: '10/06/2024', descricao: 'Venda - Pedido #123456', valor: '50,00', status: 'Pendente' },
            { id: 2, data: '09/06/2024', descricao: 'Taxa de Serviço', valor: '10,00', status: 'Recebido' },
            { id: 3, data: '08/06/2024', descricao: 'Transferência Recebida', valor: '100,00', status: 'Recebido' }
        ]
    }
});
