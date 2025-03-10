<script>
    let items = [
        {name: "Björk Löv", price: 299, qty: 0, img: "https://media.istockphoto.com/id/160058328/sv/foto/birch-leaf.jpg?s=612x612&w=0&k=20&c=ScPiwCErMJ5WlYk3D9VvtxfG4XTyXkxxuBNyG4s_nYw="},
        {name: "Tall barr", price: 99, qty: 0, img: "https://media1.aromashopen.nu/2020/09/tallbarr.jpg"},
        {name: "Gran barr", price: 349, qty: 0, img: "https://www.skogssallskapet.se/images/18.5c8e1004165c292cf3fe2693/1537347019302/Granbarr%20770x373px.jpg"},
        {name: "Lärk löv", price: 229, qty: 0, img: "https://www.floristik24.se/media/images/popup/Tannenzweig_29cm_gruen_Zapfen-Eis_01016-01.jpg"},
        {name: "Lönn löv", price: 129, qty: 0, img: "https://static.vecteezy.com/ti/gratis-foton/p1/10633718-lonn-lov-pa-vit-bakgrund-fotona.jpg"},
        {name: "Ek löv", price: 499, qty: 0, img: "https://preview.free3d.com/img/2016/07/2174868822689842451/7637hj3b.jpg"}
    ];
    let cart = []
    function toggleMenu() {
        document.getElementById("cart").classList.toggle("open");
        console.log(cart)
    }
    function addToCart(item) {
        cart.push(item)
        cart = cart;
        console.log(cart)
    }

    function getTotal(list){
      let total = 0;
      for(let i = 0; i<list.length; i++) {
        total += list[i].qty * list[i].price
      }
      return total;
    }
</script>

<style>

  nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }

  .cart-button {
    background: white;
    color: black;
    padding: 10px 15px;
    border: none;
    font-size: 16px;
    font-weight: bold;
  }

  .cart {
    position: fixed;
    top: 0;
    right: -300px; 
    width: 300px;
    height: 100vh;
    background: white;
    box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.2);
    transition: right 0.3s ease-in-out;
    padding: 20px;
    overflow-y: auto;
  }

  .open {
    right: 0 !important;
  }

  .close-button {
    margin-bottom:3px;
    background: red;
    color: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 16px;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding-top: 50px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 30px;
    width: 90vw;
    height: 90vh;
  }

  .grid-item {
    background-color: white;
    width: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    margin: auto;
    text-align: center;
  }

  img {
    height: 70%;
    width: 100%;
    max-width: 100%;
    margin: 10px;
  }

  .info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 8px;
    border-top: 2px solid black;
    background: white;
  }

  p {
    color: black;
    font-size: 18px;
    margin: 0;
    white-space: nowrap;
  }

  .button-container {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .button-container button {
    color: black;
    background-color: lightgray;
    font-size: 16px;
    width: 30px;
    height: 30px;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: bold;
  }

  .qt {
    border: 2px solid black;
    padding: 2px 5px;
    font-size: 18px;
    font-weight: bold;
    min-width: 30px;
    text-align: center;
    height: 30px;
  }

  .add{
    height: 30px;
    width: 38px !important;
  }
  .checkout {
    background-color:rgb(8, 168, 255);
    margin-top: 5px;
    padding: 6px;
    border: 3px solid black;
  }
  .cartItem {
    height:10%;
    width:100%;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .cartImage {
    width:20%;
  }

  @media (max-width: 768px) {
  
  nav {
    padding: 10px;
  }

  .cart-button {
    font-size: 14px;
    padding: 8px 12px;
  }


  .cart {
    width: 80%;
    right: -80%;
  }

  .grid-container {
    margin-top:1100px;
    grid-template-columns: 1fr;
    gap: 15px; 
    height: auto;
  }

  .grid-item {
    width: 90%;
    height: auto;
  }

  img {
    height: auto;
    max-height: 200px; 
  }

  .info-container {
    font-size:5px;
    flex-direction: column; 
    align-items: center;
    text-align: center;
  }

  .button-container {
    gap: 10px;
  }

  .button-container button {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }

  .qt {
    font-size: 18px;
    min-width: 35px;
  }

}

</style>

<nav>
  <h1>Shop</h1>
  <button class="cart-button" on:click={()=>toggleMenu()}>Cart</button>
</nav>

<div id="cart" class="cart">
  <button class="close-button" on:click={()=>toggleMenu()}>✖ Close</button>
  <p>{cart.length==0 ? "Cart is empty" : ""}</p>
    {#each cart as cartItem}
   <div class="cartItem">
    <img class="cartImage" alt={cartItem.name} src={cartItem.img}>
    <div>
      <p>{cartItem.name}</p>
      <p>{cartItem.price}kr</p>
    </div>
    <div class="button-container">
      <button on:click={() => cartItem.qty !== 0 ? cartItem.qty-- : cartItem.qty = 0}>-</button>
      <p class="qt">{cartItem.qty}</p>
      <button on:click={() => cartItem.qty++}>+</button>
    </div>

   </div>
    {/each}
    <br>
    <p>Total: {getTotal(cart)}kr</p>
    <button class="checkout" on:click={() => alert("Purchase complete")}>Checkout</button>
  <div class="open"></div>
</div>

<main>
  <div class="grid-container">
    {#each items as item}
      <div class="grid-item">
        <img src={item.img} alt="{item.name}">
        <div class="info-container">
          <p>{item.name} ({item.price}kr)</p>
          <div class="button-container">
            <button on:click={() => item.qty !== 0 ? item.qty-- : item.qty = 0}>-</button>
            <p class="qt">{item.qty}</p>
            <button on:click={() => item.qty++}>+</button>
            <button class="add" on:click={()=>addToCart(item)}>Add</button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</main>
