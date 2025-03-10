<script>
    let stringLetters = "QWERTYUIOP"
    let letters = []
    let username = ""
    for (let letter of stringLetters) {
        let top = Math.random() * 80
        let left = Math.random() * 80
        letters.push({letter: letter, top: top, left: left})
    }

    function addLetter(index) {
        let letter = letters[index]
        username += letter.letter
        letter.top = Math.random() * 80
        letter.left = Math.random() * 80
    }

</script>
<section>
{#each letters as {letter,top,left},i}
<button on:click={() => addLetter(i)} style="top: {top}vh; left: {left}vw;">{letter}</button>
{/each}
</section>
<p>username: {username}</p>
<style>
    button {
        position: fixed;
        padding: 1em;
        background-color: aqua;
    }
    section {

    }
</style>