<script>
	import { base } from "$app/paths";
    import  { goto } from "$app/navigation";

    let sessions = [];

    
    function loadSessions() {
        if (typeof window !== 'undefined') {
            sessions = JSON.parse(localStorage.getItem('sessions')) || [];
        }
    }

    
    loadSessions();

    function goBack() {
        goto(base + '/journal/');
    }

    function removeSession(id) {
        sessions = sessions.filter(session => session.id !== id);
        localStorage.setItem('sessions', JSON.stringify(sessions));
    }

    $: sortedSessions = [...sessions].sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time || '00:00'}`);
        const dateB = new Date(`${b.date}T${b.time || '00:00'}`);
        return dateB - dateA;
    });
</script>

<main>
    <div class="sessions-container">
        <button class="back-btn" on:click={goBack}>← Back to Home</button>
        <h1>All Sessions</h1>
        {#if sessions.length > 0}
            {#each sortedSessions as session (session.id)}
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
                    <button class="remove-btn" on:click={() => removeSession(session.id)}>Delete</button>
                </div>
            {/each}
        {:else}
            <p>No sessions saved yet.</p>
        {/if}
    </div>
</main>

<style>

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

    .remove-btn {
        background: #ff4d4f;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 6px 14px;
        margin-top: 8px;
        cursor: pointer;
        font-size: 0.95rem;
        transition: background 0.2s;
    }
    .remove-btn:hover {
        background: #d9363e;
    }
</style>