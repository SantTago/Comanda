new Vue({
    el: '#app',
    data: {
        mesas: [
            { id: 1, itens: [], total: 0 },
            { id: 2, itens: [], total: 0 },
            { id: 3, itens: [], total: 0 },
        ],
        produtos: [
            { nome: 'Coca Cola', preco: 5.00 },
            { nome: 'Batata Frita', preco: 10.00 },
            { nome: 'Hambúrguer', preco: 15.00 },
        ],
        mesaSelecionada: null,
        exibirProdutos: false,
        mostrarRecibo: false,
        pagamentoDinheiro: false,
        valorRecebido: 0,
        troco: 0,
        historicoComandas: [], // Se necessário
    },
    methods: {
        selecionarMesa(mesa) {
            this.mesaSelecionada = mesa;
        },
        mostrarProdutos() {
            this.exibirProdutos = true;
        },
        fecharMesa() {
            if (this.mesaSelecionada) {
                this.mostrarRecibo = true;
                // Salvar a comanda no histórico (opcional)
                this.historicoComandas.push({
                    mesa: this.mesaSelecionada.id,
                    itens: this.mesaSelecionada.itens,
                    total: this.mesaSelecionada.total * 1.1 // Total com 10% de serviço
                });
            }
        },
        adicionarProduto(produto) {
            if (this.mesaSelecionada) {
                this.mesaSelecionada.itens.push({ nome: produto.nome, preco: produto.preco });
                this.mesaSelecionada.total += parseFloat(produto.preco);
            }
        },
        fecharProdutos() {
            this.exibirProdutos = false;
        },
        fecharRecibo() {
            this.mostrarRecibo = false;
            this.mesaSelecionada.itens = [];
            this.mesaSelecionada.total = 0;
            this.mesaSelecionada = null;
            this.pagamentoDinheiro = false;
            this.valorRecebido = 0;
            this.troco = 0;
        },
        calcularTroco() {
            if (this.valorRecebido >= this.mesaSelecionada.total * 1.1) {
                this.troco = this.valorRecebido - (this.mesaSelecionada.total * 1.1);
            } else {
                alert('O valor recebido é menor que o total a pagar.');
            }
        },
    },
    created() {
        // Inicialização e carregamento inicial, se necessário
    }
});
