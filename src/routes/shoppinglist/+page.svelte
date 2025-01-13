<script>
import { fade } from 'svelte/transition'
let varor = [{name: "Ägg", bought: true}, {name: "Mjölk", bought: false}]
let item = ""
const handleSubmit = () => {
    if (item == "") return;
    varor.push({name: item, bought: false})
    varor = varor
}
const buyItem = (vara) => {
    vara.bought = true
    varor = varor
}

const removeItem = (vara) => {
    varor = varor.filter(i => i !== vara)
}
const tobuyItem = (vara) => {
    vara.bought = false 
    varor = varor
}
</script>

<main class="container">
<h1>Shoppinglist</h1>
<div class="categories_container">
    <section>
        <h2>Varor att köpa</h2> 
        <ol>
            {#each varor.filter(i => i.bought == false) as vara}
            <li transition:fade>{vara.name} <button on:click={buyItem(vara)}>Köp</button> <button class="remove" on:click={removeItem(vara)}>Ta bort</button></li>
            {/each}
        </ol>
    </section>

    <section>
        <h2>Köpta varor</h2> 
        <ul>
            {#each varor.filter(i => i.bought == true) as vara}
            <li transition:fade>{vara.name} <button on:click={tobuyItem(vara)}>Slut</button> <button class="remove" on:click={removeItem(vara)}>Ta bort</button></li>
            {/each}
        </ul>
        
    </section>
</div>
<form on:submit|preventDefault={handleSubmit}>
    <label for="vara">Vara: </label>
    <input id="vara" type="text" style="width:70%; height:50%" bind:value={item}>
    <input type="submit" value="Lägg till">
</form>

</main>

<style>

label {
    display: inline
}
    
.container{
    background-color: gray;
    width: 60vw;
    height: 70vh;
    border-radius: 20px;
    display: grid;
    grid-template-rows: 1fr 9fr 1fr;  
}

.categories_container {
    display: grid;
    grid-gap:10px;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    background-color: darkblue;
}  

.container h1 {
    background-color: darkblue;
    padding: 5px;
    border-radius: 3px;
    justify-self: center;
    align-self: center;
}

section {
    height: 100%;
    width: 100%;
}

.categories_container section:first-child{  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.1) /* svart bakgrund med 10% opacitet */
  }
 
  .categories_container section:last-child{  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.3) /* svart bakgrund med 30% opacitet */
  }

li {
    list-style-type: square;
    list-style-position:inside;
    margin: 5px;
    padding: 5px;
    border-bottom: 1px solid white;
}
form {
    align-self: center;
    padding: 5px;
}
input {
    color: black;
}

button {
    background-color: darkgreen;
    padding: 4px;
    border-radius: 5px;
}
.remove {
    background-color: darkred;
}

section h2 {
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 16px;
    text-align: center;
    padding: 3px;
    margin: 5px;
    margin-bottom: 10px;
}

input[type=submit] {
    background-color: lightgreen;
    padding: 5px;
    border-radius: 5px;
}
</style>