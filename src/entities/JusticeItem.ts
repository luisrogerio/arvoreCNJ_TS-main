export interface IJusticeItem {
    codItem: number;
    codItemPai: number;
    nome: string;
    situacao: string;
    dispositivoLegal: string;
    artigo: string;
    justES1grauMilitar: boolean;
    justES2grauMilitar: boolean;
    justESJuizadoEspFazendaPublica: boolean;
    justTurmaEstadualUniform: boolean;
    justES1grau: boolean;
    justES2grau: boolean;
    justESJuizadoEspecial: boolean;
    justESTurmasRecursais: boolean;
    justFed1grau: boolean;
    justFed2grau: boolean;
    justFedJuizadoEspecial: boolean;
    justFedTurmasRecursais: boolean;
    justFedNacionalUniform: boolean;
    justFedRegionalUniform: boolean;
    justFedCFJ: boolean;
    justTrab1grau: boolean;
    justTrab2grau: boolean;
    justTrabTST: boolean;
    justTrabCSJT: boolean;
    stf: boolean;
    stj: boolean;
    cnj: boolean;
    justMilUniao1grau: boolean;
    justMilUniaoSTM: boolean;
    justMilEst1grau: boolean;
    justMilEstTJM: boolean;
    justEleitoral1grau: boolean;
    justEleitoral2grau: boolean;
    justEleitoralTSE: boolean;
}


class JusticeItem implements IJusticeItem {

    public codItem: number;
    public codItemPai: number;
    public nome: string;
    public situacao: string;
    public dispositivoLegal: string;
    public artigo: string;
    public justES1grauMilitar: boolean;
    public justES2grauMilitar: boolean;
    public justESJuizadoEspFazendaPublica: boolean;
    public justTurmaEstadualUniform: boolean;
    public justES1grau: boolean;
    public justES2grau: boolean;
    public justESJuizadoEspecial: boolean;
    public justESTurmasRecursais: boolean;
    public justFed1grau: boolean;
    public justFed2grau: boolean;
    public justFedJuizadoEspecial: boolean;
    public justFedTurmasRecursais: boolean;
    public justFedNacionalUniform: boolean;
    public justFedRegionalUniform: boolean;
    public justFedCFJ: boolean;
    public justTrab1grau: boolean;
    public justTrab2grau: boolean;
    public justTrabTST: boolean;
    public justTrabCSJT: boolean;
    public stf: boolean;
    public stj: boolean;
    public cnj: boolean;
    public justMilUniao1grau: boolean;
    public justMilUniaoSTM: boolean;
    public justMilEst1grau: boolean;
    public justMilEstTJM: boolean;
    public justEleitoral1grau: boolean;
    public justEleitoral2grau: boolean;
    public justEleitoralTSE: boolean;

    constructor(values: Map<string, string>) {
        this.codItem= Number(values.get('cod_item'));
        this.codItemPai= Number(values.get('cod_item_pai'));
        this.nome= values.get('nome') ?? "";
        this.situacao= ((values.get('situacao') == 'A') ? "Ativo" : "Inativo");
        this.dispositivoLegal= values.get('dispositivo_legal') ?? "";
        this.artigo= values.get('artigo') ?? "";
        this.justES1grauMilitar= values.get('just_es_1grau_mil') == 'S';
        this.justES2grauMilitar= values.get('just_es_2grau_mil') == 'S';
        this.justESJuizadoEspFazendaPublica= values.get('just_es_juizado_es_fp') == 'S';
        this.justTurmaEstadualUniform= values.get('just_tu_es_un') == 'S';
        this.justES1grau= values.get('just_es_1grau') == 'S';
        this.justES2grau= values.get('just_es_2grau') == 'S';
        this.justESJuizadoEspecial= values.get('just_es_juizado_es') == 'S';
        this.justESTurmasRecursais= values.get('just_es_turmas') == 'S';
        this.justFed1grau= values.get('just_fed_1grau') == 'S';
        this.justFed2grau= values.get('just_fed_2grau') == 'S';
        this.justFedJuizadoEspecial= values.get('just_fed_juizado_es') == 'S';
        this.justFedTurmasRecursais= values.get('just_fed_turmas') == 'S';
        this.justFedNacionalUniform= values.get('just_fed_nacional') == 'S';
        this.justFedRegionalUniform= values.get('just_fed_regional') == 'S';
        this.justFedCFJ= values.get('cjf') == 'S';
        this.justTrab1grau= values.get('just_trab_1grau') == 'S';
        this.justTrab2grau= values.get('just_trab_2grau') == 'S';
        this.justTrabTST= values.get('just_trab_tst') == 'S';
        this.justTrabCSJT= values.get('just_trab_csjt') == 'S';
        this.stf= values.get('stf') == 'S';
        this.stj= values.get('stj') == 'S';
        this.cnj= values.get('cnj') == 'S';
        this.justMilUniao1grau= values.get('just_mil_uniao_1grau') == 'S';
        this.justMilUniaoSTM= values.get('just_mil_uniao_stm') == 'S';
        this.justMilEst1grau= values.get('just_mil_est_1grau') == 'S';
        this.justMilEstTJM= values.get('just_mil_est_tjm') == 'S';
        this.justEleitoral1grau= values.get('just_elei_1grau') == 'S';
        this.justEleitoral2grau= values.get('just_elei_2grau') == 'S';
        this.justEleitoralTSE= values.get('just_elei_tse') == 'S';
    }
 
}

export default JusticeItem;