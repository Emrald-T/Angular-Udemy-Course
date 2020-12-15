export class Ingredient {
    public editMode: boolean;

    constructor(public name: string, public amount: number) {
        this.name = name;
        this.amount = amount;
        this.editMode = false;
    }
}
