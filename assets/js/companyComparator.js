// Banco de dados do projeto
const dadosEmpresas = {
    "1001": {
        nome: "Viação 1001",
        grupo: "Grupo JCA",
        servicos: "Executivo, Semi-Leito, Leito e Leito-Cama (Cama Premium).",
        frota: "Majoritariamente ônibus Double Decker (DD) de 4 e 3 eixos.",
        tecnico: "Maior frequência de horários (saídas a cada 30 minutos em horários de pico).",
        infra: "Possui Salas VIP próprias nos terminais Novo Rio e Tietê.",
        preco: "R$ 145,00 (Semi-Leito) | R$ 220,00 a R$ 530,00 (Leito/Cama).",
        diferenciais: "Sistema de 'Embarque Fácil' via QR Code e pontualidade rigorosa."
    },
    "aguia": {
        nome: "Viação Águia Branca",
        grupo: "Grupo Águia Branca",
        servicos: "Semi-Leito, Leito e Leito-Cama.",
        frota: "Utiliza os modernos modelos Marcopolo G8, conhecidos pela segurança e aerodinâmica.",
        tecnico: "Serviço Águia Flex (focado em vendas 100% digitais com preços reduzidos).",
        infra: "Pontos de apoio modernos e frota com manutenção preventiva rigorosa.",
        preco: "R$ 110,00 (Semi-Leito) | R$ 200,00 a R$ 270,00 (Leito/Cama).",
        diferenciais: "Poltronas com espuma viscoelástica e cortinas de privacidade no serviço Leito."
    },
    "penha": {
        nome: "E. O. Nossa Senhora da Penha S.A.",
        grupo: "Grupo Comporte (Família Constantino)",
        servicos: "Executivo e Semi-Leito.",
        frota: "Ônibus com foco em longa distância, poltronas largas e bom espaçamento.",
        tecnico: "Integração logística com as linhas que descem para Curitiba, Florianópolis e Porto Alegre.",
        infra: "Utiliza a estrutura de apoio do Grupo Comporte.",
        preco: "R$ 75,00 (Executivo) | R$ 150,00 a R$ 190,00 (Semi-Leito/Leito).",
        diferenciais: "Tradicionalismo e robustez no mercado intermediário."
    },
    "itapemirim": {
        nome: "Viação Itapemirim",
        grupo: "Operado por Suzantur (Arrendamento)",
        servicos: "Semi-Leito e Leito.",
        frota: "Ônibus New G7 e modelos arrendados da frota Suzantur.",
        tecnico: "Foco em passagens low-cost (baixo custo) para manter a competitividade.",
        infra: "Pontos de parada tradicionais da rede Graal ao longo da Via Dutra.",
        preco: "R$ 49,90 (Semi-Leito - Promo) | R$ 155,00 (Leito).",
        diferenciais: "Preço imbatível para o viajante que prioriza economia."
    }
};

function safeSetText(id, text) {
    const el = document.getElementById(id);
    if (el) {
        el.innerText = text;
    }
}

function atualizarComparacao() {
    const selectC1 = document.getElementById('company1');
    const selectC2 = document.getElementById('company2');

    if (!selectC1 || !selectC2) return;

    const em1 = dadosEmpresas[selectC1.value];
    const em2 = dadosEmpresas[selectC2.value];

    if (!em1 || !em2) return;

    // Atualiza cabeçalhos
    safeSetText('name-col-1', em1.nome);
    safeSetText('name-col-2', em2.nome);

    // Dados da Empresa 1
    safeSetText('grupo-1', em1.grupo);
    safeSetText('servicos-1', em1.servicos);
    safeSetText('frota-1', em1.frota);
    safeSetText('tecnico-1', em1.tecnico);
    safeSetText('infra-1', em1.infra);
    safeSetText('preco-1', em1.preco);
    safeSetText('diferenciais-1', em1.diferenciais);

    // Dados da Empresa 2
    safeSetText('grupo-2', em2.grupo);
    safeSetText('servicos-2', em2.servicos);
    safeSetText('frota-2', em2.frota);
    safeSetText('tecnico-2', em2.tecnico);
    safeSetText('infra-2', em2.infra);
    safeSetText('preco-2', em2.preco);
    safeSetText('diferenciais-2', em2.diferenciais);
}

// Vincula as mudanças de seleção
document.getElementById('company1').addEventListener('change', atualizarComparacao);
document.getElementById('company2').addEventListener('change', atualizarComparacao);

// Executa a primeira carga de dados
atualizarComparacao();