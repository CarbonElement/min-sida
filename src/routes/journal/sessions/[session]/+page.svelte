<script>
    import {base} from '$app/paths';
    import {goto} from '$app/navigation';
    export let data;
    let sessionId = data.params.session;
    function getSession() {
        if (typeof window !== 'undefined') {
            let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
            let index = sessions.findIndex(session => session.id === sessionId);
            if (index === -1) {
                console.error('Session not found:', sessionId);
                return;
            }
            return sessions[index];
        }
    }

    let session = getSession();

    function goBack() {
        goto(base+'/journal/');
    }
</script>

<main>
    <div class="sessions-container">
        <button class="back-btn" on:click={goBack}>← Back to Home</button>
        <h1>Session</h1>
        {#if session}
            <div class="session">
                <p><strong>Date:</strong> {session.date}</p>
                <p><strong>Time:</strong> {session.time}</p>

                <div class="rating-row">
                    <p><strong>Sleep:</strong></p>
                    <div class="stars">
                        {#each Array(5).fill(0).map((_, i) => i) as i}
                            <span class="star {i < session.sleep ? 'filled' : ''}">★</span>
                        {/each}
                    </div>
                </div>

                <div class="rating-row">
                    <p><strong>Nutrition:</strong></p>
                    <div class="stars">
                        {#each Array(5).fill(0).map((_, i) => i) as i}
                            <span class="star {i < session.nutrition ? 'filled' : ''}">★</span>
                        {/each}
                    </div>
                </div>

                <div class="rating-row">
                    <p><strong>Feel:</strong></p>
                    <div class="stars">
                        {#each Array(5).fill(0).map((_, i) => i) as i}
                            <span class="star {i < session.feel ? 'filled' : ''}">★</span>
                        {/each}
                    </div>
                </div>

                <p><strong>Notes:</strong> {session.notes}</p>
                {#if session.image}
                    <img src={session.image} alt="Uploaded Image" class="session-image" />
                {/if}
            </div>
        {:else}
            <p>Session not found</p>
        {/if}
    </div>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        background-color: #f9f9f9;
        min-height: 100vh;
    }

    .sessions-container {
        max-width: 600px;
        width: 100%;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .back-btn {
        background: none;
        border: none;
        color: #0070f3;
        font-size: 1rem;
        cursor: pointer;
        margin-bottom: 16px;
        padding: 0;
        text-align: left;
        transition: color 0.2s;
    }
    .back-btn:hover {
        color: #005bb5;
        text-decoration: underline;
    }

    .session {
        margin-bottom: 20px;
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }

    .session:last-child {
        border-bottom: none;
    }

    .session-image {
        max-width: 100%;
        height: auto;
        margin-top: 10px;
    }

    h1 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 1.8rem;
        color: #333;
    }

    p {
        margin: 5px 0;
        font-size: 1rem;
        color: #555;
    }

    .rating-row {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
    }

    .rating-row p {
        margin: 0;
        margin-right: 10px;
        font-size: 1rem;
        color: #555;
    }

    .stars {
        display: flex;
    }

    .star {
        font-size: 1.5rem;
        color: #ccc;
        transition: color 0.3s ease;
    }

    .star.filled {
        color: #FFD700;
    }
</style>