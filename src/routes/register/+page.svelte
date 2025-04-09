<main>
    <div class="container">
        <h1>Registrering</h1>
        <div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};">
        </div>
        <form on:submit|preventDefault={handleSubmit}>
            <label for="name">Name:</label>
            <input type="text" id="name" bind:value={name}>

            <label for="email">Email:</label>
            <input type="email" id="email" bind:value={email}>

            <label for="password">Password:</label>
            <input type="password" id="password" bind:value={password}>

            <label for="color">Favourite Color:</label>
            <select id="color" bind:value={color}>
                {#each colors as c}
                <option value={c.value}>{c.namn}</option>
                {/each}
            </select>
            <input id="submit" type="submit" value="Registrera">
        </form>
        <p>Har du redan ett konto? <a href={base+'/login'}>Logga in</a></p>
    </div>
</main>

<style>
 main {
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
        min-height: 500px;
    }

    input, select{
        color: black;
    }

#submit {
    color: white;
    background-color: gray;
    padding: 5px;
    border: 2px solid black;
}    
.container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        border: solid 5px rosybrown;
        border-radius: 10px;
        width: 35%;
        height: 80%;
        background-color: #3a2e3b;
        margin: auto;
        min-width: 300px;
        min-height: 500px;
}   

a {
    color: rosybrown;
    text-decoration: underline;
}
        
</style>

<script>
    import {base} from '$app/paths'; 
    let colors = [{namn: "Blue", value:"blue"}, {namn: "Red", value:"red"}, {namn: "White", value:"white"},{namn: "Black", value:"black"}, {namn: "Green", value:"green"}]
    let color = "black"
    let name = ""
    let email = ""
    let password = ""
    const handleSubmit = () => {
        alert("Välkommen " + name + " med email: " + email + " och lösenord: " + password)
    }
</script>
