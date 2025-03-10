<main>
    <div class="container">
        <h1>Login</h1>
        <div class="content">
        <div class="buttons"><button class="cancel" on:click={()=>window.location.href= "https://google.com"}>Exit</button><button class="login" id="login" on:click={()=>doLogin()}>Login</button></div>
        <div>
            <input type="text" placeholder="john@gmail.com" bind:value={password}>Password:
            <input type="password" placeholder="********" bind:value={email}>Email:
        </div>
        <div class="age">Age: 
        <select bind:value={ageValue}>
            {#each age as number}
            <option>{number}</option>
            {/each}
        </select>
    </div>
    </div>
    </div>
</main>

<style>
    .login {
       width:30%;
    }
    .content {
        padding:0;
        margin-left: auto;
        margin-right: auto;
        margin-top: 80px;;
    }
 main {
        width: 100%;
        height: 100%;
        padding: 5%;
    }

    input, select{
        color: black;
        margin: 5px;
    }
h1 {
    margin:20px;
}

.age {
margin: 10px;
}
input {
    width: 60%;}

.buttons {
    width:100%;
}
h1{
    text-align: center;
}
div {
    margin: auto;
}
.container{

        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        border: solid 5px rosybrown;
        border-radius: 10px;
        width: 30%;
        height: 80%;
        background-color: #3a2e3b;
        margin: auto;
}
.cancel {
    background-color:green;
    padding: 10px;
    width: 50%;
    margin:20px;
    color: white;
} 

button {
    color: gray;
}
        
</style>

<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    let email;
    let password;
    let ageValue;

    onMount(() => {
    let login = document.getElementById("login");

    setInterval(() => {
        if (browser && login) {
            login.hidden = !login.hidden;
        }
    }, 5000);
});
    
        
  const age = [];
  for(let i=0; i<=100; i++) {
    age.push(i)
  }
  const shuffledAge = age.sort((a, b) => 0.5 - Math.random());
  function doLogin() {
    alert("Email: " + email + " Password: " + password + " Age: " + ageValue)
  }
</script>
