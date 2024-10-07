// Créer une classe nommée "VendorMachine". Cette classe possède les propriétés suivantes :
//      isOn (peut être true ou false)
//      snacksQty (contient le nombre de snacks dans la machine)
//      money (contient l'argent contenu dans la machine)
// Cette classe contient les méthodes suivantes :
//      buySnack (permet d'acheter un snack. Tous les snacks sont à 2e)
//      reset (permet de vider la machine de sa monnaie et de la remplir de snack (50 snack) mais il faut que la machine soit off)
//      shootWithFoot (fait tomber 5 snack et 20e. Et eteint la machine)

class VendorMachine {
    private isOn;

    private snacksQty;

    private money;

    public function buySnack() {
        this.money += 2;
        this.snacksQty -= 1;
    };

    public function reset() {
        this.isOn=false;
        this.money=0;
        this.snacksQty=50;
    };

    public function shootWithFoot() {
        this.money -= 20;
        this.snacksQty -= 5;
        this.isOn=false;
    };
}