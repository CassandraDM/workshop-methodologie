// Créer une classe nommée "VendorMachine". Cette classe possède les propriétés suivantes :
//      isOn (peut être true ou false)
//      snacksQty (contient le nombre de snacks dans la machine)
//      money (contient l'argent contenu dans la machine)
// Cette classe contient les méthodes suivantes :
//      buySnack (permet d'acheter un snack. Tous les snacks sont à 2e)
//      reset (permet de vider la machine de sa monnaie et de la remplir de snack (50 snack) mais il faut que la machine soit off)
//      shootWithFoot (fait tomber 5 snack et 20e. Et eteint la machine)

class VendorMachine {
  private isOn: boolean;

  private snacksQty: number;

  private money: number;

  public constructor() {
    this.isOn = false;
    this.snacksQty = 50;
    this.money = 0;
  }

  public buySnack(): void {
    this.isOn = true;
    if (this.snacksQty === 0) {
      throw new Error("No snacks for you :(");
    }
    this.money += 2;
    this.snacksQty -= 1;
  }

  public reset(): void {
    this.isOn = false;
    this.money = 0;
    this.snacksQty = 50;
    this.isOn = true;
  }

  public shootWithFoot(): void {
    if (this.snacksQty < 5) {
      throw new Error("No snacks for you, you thief ! >:(");
    }
    this.snacksQty -= 5;
    if (this.money < 20) {
      throw new Error("Good try, but can't steal money if none :)");
    }
    this.money -= 20;
    this.isOn = false;
  }
}

const vendorMachine = new VendorMachine();
