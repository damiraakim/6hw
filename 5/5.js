const cartitems=document.getElementById("cart-items")
const items=cartitems.querySelectorAll('.item');
items[1].remove();
const last=items[items.length-1];
const newitem=document.createElement("div");
newitem.className="item";
newitem.textContent="Canned-Fish";
const quantity=document.createElement("span");
quantity.className="qty";
quantity.textContent=" x4";
newitem.appendChild(quantity);
cartitems.replaceChild(newitem,last);
