<header>
    <h1>Training Journal Pro</h1>
</header>
<main>
  <slot />
</main>


<style>
    main {
        height: 100vh;
        width: 100vw;
        background-color: #f9f9f9;
    }

    header {
        border: 2px solid black;
        font-size: 1.5em;
        color: black;
        height:7%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: rgb(126, 184, 242);
    }
</style>