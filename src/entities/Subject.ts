import JusticeItem from "@entities/JusticeItem";

export interface ISubject {
    sigiloso: boolean;
    assuntoSecundario: boolean;
    crimeAntecedente: boolean;

}

class Subject extends JusticeItem implements ISubject {
    public assuntoSecundario: boolean;
    public sigiloso: boolean;
    public crimeAntecedente: boolean;

    constructor(values: Map<string, string>) {
        super(values);
        this.sigiloso= values.get('sigiloso') == 'S';
        this.assuntoSecundario= values.get('assunto_secundario') == 'S';
        this.crimeAntecedente= values.get('crime_antecedente') == 'S';
    }
 
}

export default Subject;
