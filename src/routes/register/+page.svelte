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
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="white">White</option>
            </select>
            <input id="submit" type="submit" value="Registrera">
        </form>
    </div>
</main>

<style>
 main {
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
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
        height: 80%;
        background-color: #3a2e3b;
        margin: auto;
}     
        
</style>

<script>
    let colors = [{namn: "Blue", value:"blue"}, {namn: "Red", value:"red"}, {namn: "White", value:"white"}]
    let color = "black"
    let name = ""
    let email = ""
    let password = ""
    const handleSubmit = () => {
        alert("Välkommen " + name + " med email: " + email + " och lösenord: " + password)
    }
</script>
