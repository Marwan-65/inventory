import InventoryItem from './InventoryItem.js'

class MechanicalPart extends InventoryItem{
    constructor(id, name, quantity,material, dimension, weight) {
      super(id, name, quantity);
      this.material = material;
      this.dimension = dimension;
      this.weight=weight;
    }
    GetDescription() {
        return { "ID":this.id, "Name": this.name, "Quantity": this.quantity, "Material": this.material, "Dimension": this.dimension, "Weight": this.weight };
     }

  }


  export default MechanicalPart