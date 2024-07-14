new Vue({
    // ...
    data: {
        // ...
        historicoComandas: [],
    },
    methods: {
        
        // ...
        async carregarHistoricoComandas() {
            try {
                const snapshot = await db.collection('comandas').orderBy('data', 'desc').get();
                this.historicoComandas = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
            } catch (error) {
                console.error('Erro ao carregar histórico de comandas:', error);
            }
        },
        formatarData(timestamp) {
            const data = new Date(timestamp.seconds * 1000);
            return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;
        }
    },
    created() {
        this.carregarHistoricoComandas();
    }
});

