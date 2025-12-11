
export class Inventory
{
  constructor()
  {
    this.maxSlots = 50;
    this.slots = new Array(this.maxSlots).fill(null);
  }

  getItem(position)
  {
    return this.slots[position];
  }

  removeItemByName(name, quantity)
  {
    for (let i = 0; i < this.slots.length; i++)
    {
      let item = this.slots[i];
      if ( item != null && item.name == name)
      {
        this.slots[i] = null;
        quantity --;
      }

      if( quantity == 0 )
        return;
    }

    console.warn("quantity bigger than items in inventory")
  }

  removeItemById(itemId)
  {
    for(let i = 0; i < this.slots.length; i++ )
    {
      let item = this.slots[i];

      if ( item != null && item.id == itemId )
      {
        this.slots[i] = null;
        return;
      }
    }
    
    throw new Error(`Item ${itemId} not found`);
  }

  addItem(item)
  {
    for (let index in this.slots)
    {
      let slot = this.slots[index];

      if (slot == null )
      {
        this.slots[index] = item;
        return;
      }
    }

    throw new Error(`Inventory full`);
  }
}

export class Item
{
  constructor(id, name)
  {
    this.id = id;
    this.name = name;
  }
}

