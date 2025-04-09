<main>
    <div class="container">
        <h1>Inloggning</h1>
        <form on:submit|preventDefault={handleSubmit}>

            <label for="email">Email:</label>
            <input type="email" id="email" bind:value={email}>

            <label for="password">Password:</label>
            <input type="password" id="password" bind:value={password}>
            <input id="submit" type="submit" value="Logga in">
        </form>
        <p>Har du inte ett konto? <a href={base+'/register'}>Registrera här</a></p>
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
}    
.container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        border: solid 5px rosybrown;
        border-radius: 10px;
        width: 35%;
        height: 20%;
        background-color: #3a2e3b;
        margin: auto;
        min-width: 325px;
        min-height: 300px;
}

a {
    color: rosybrown;
    text-decoration: underline;
}

#submit {
    background-color: gray;
    padding: 5px;
    border: 2px solid black;
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
        alert("Välkommen tillbaks" + name + " med email: " + email + " och lösenord: " + password)
    }
</script>
