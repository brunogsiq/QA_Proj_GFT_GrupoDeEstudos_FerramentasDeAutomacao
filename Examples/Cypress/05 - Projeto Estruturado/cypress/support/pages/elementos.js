export class nomeTela01
{
    get nomeElemento() {
        return cypress.get('...')
    };
};

export class nomeTela02
{
    get nomeElemento() {
        return cypress.get('...')
    };
};

// OU

export function elementosPainel ()
{ 
    return{
        opcaoWilly: ".bMhSbf",
        divModalWilly: ".dPDpQd",
        modalWilly:
        {
            textoSuperior: ".cJooTS",
            opcaoFecharX: ".eUMUoz",
            textoInferior: ".kMaBsW",
            opcaoIniciarTour: ".cHxqWR > button > .hlWvYw",
            modalTour:".introjs-tooltiptext",
            opcaoTourProximo: ".introjs-nextbutton",
            opcaoTutorial: ".fOKjbe > div> .cXbPmo"
        },
        menuLateral: {
            menuPainel: 
            {
                titleProximasSessoes: ".lkPDjw > .hhiszc",
                opcaoConfiguracao: ".czsZQA",
                modalConfiguracao: ".customModal",
                titleConfiguracao: ".cjPUmC",
                opcoesDoModal: ".container",         //são 4: 
                    /*
                    0 Próximas sessões
                    1 Relatório financeiro
                    2 Pendências, atividade de clientes e aniversariantes do mês 
                    3 Tarefas
                    */
                opcaoFecharModal: ".react-responsive-modal-closeButton",
                opcaoCancelar: ".cXbPmo",
                opcaoSalvar: ".hlWvYw"
            },
            opcaoClientes: '.wizard2 > a > .sc-17389bb3-3',
            opcaoAgenda: '.wizard3 > a > .sc-17389bb3-3',
            menuAgenda:
            {
                opcaoAgendaGeral: ".iFEAHl",
                opcaoSituacao: ".dCleXL",
                opcaoDuvidas: ".dewTgd",
                modalDuvidas: ".cjPUmC",
                md_VisuPerson: ".lXCBj",
                md_OutrasOpcoes: ".ciKjyF", //são 04
                md_Explicacao: ".jUIdCU",
                md_OpcaoFechar: ".cXbPmo"
            },
            opcaoAgenda_SubMenus: '.frsWDT',
            opcapAgenda_subMenus_AgendaGeral: '.gcElxe' //eq(0)
        },
    };
};