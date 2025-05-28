<script>
    import { base } from '$app/paths';
    import { goto } from "$app/navigation";
let sessions = [];

    function loadSessions() {
        if (typeof window !== 'undefined') {
            sessions = JSON.parse(localStorage.getItem('sessions')) || [];
        }
    }

    loadSessions();
    console.log(sessions);

    function getWeeklyAverages() {
        if (typeof window === 'undefined') return { sleep: 0, nutrition: 0, feel: 0 };

        const now = new Date();
        const oneWeekAgo = new Date(now);
        oneWeekAgo.setDate(now.getDate() - 7);

        const weeklySessions = sessions.filter(session => {
            const sessionDate = new Date(session.date);
            return sessionDate >= oneWeekAgo && sessionDate <= now;
        });

        if (weeklySessions.length === 0) return { sleep: 0, nutrition: 0, feel: 0 };

        const sum = weeklySessions.reduce(
            (acc, session) => {
                acc.sleep += Number(session.sleep) || 0;
                acc.nutrition += Number(session.nutrition) || 0;
                acc.feel += Number(session.feel) || 0;
                return acc;
            },
            { sleep: 0, nutrition: 0, feel: 0 }
        );

        return {
            sleep: +(sum.sleep / weeklySessions.length).toFixed(2),
            nutrition: +(sum.nutrition / weeklySessions.length).toFixed(2),
            feel: +(sum.feel / weeklySessions.length).toFixed(2)
        };
    }

    let weeklyAverages = getWeeklyAverages();
    let generalScore = Math.round(
        (weeklyAverages.sleep + weeklyAverages.nutrition + weeklyAverages.feel) / 3
    );
    let sessionsCount = sessions.length;
</script>

<main>
    <section class="recent">
        <h2>Recent sessions</h2>
        <a href="{base}/journal/new"><button class="add" >+</button></a>
        <div class="sessions">
            {#each sessions.slice(-5).reverse() as session}
            <div on:click={() => goto(base+"/journal/sessions/" + session.id)} class="square">
                <img class="swimmer" alt="swimmer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujAgmFQCaOtgfzwGzDDRcOonOJ7C2m-hqlQ&s">
                <p class="date">{session.date}</p>
            </div>
            {/each}
        </div>
        <a class="link show" href="{base}/journal/sessions">Show all</a>
    </section>
    <section class="stats-main">
        <h2>Weekly Statistics </h2>
        <div class="stats">

            <div class="stats_square">
                <p>Sleep</p>
                <div class="stars">
                            {#each Array(5).fill(0).map((_, i) => i) as i}
                                <span class="star {i < weeklyAverages.sleep ? 'filled' : ''}">★</span>
                            {/each}
                </div>
            </div>
            <div class="stats_square">
                <p>Nutrition</p>
                <div class="stars">
                            {#each Array(5).fill(0).map((_, i) => i) as i}
                                <span class="star {i < weeklyAverages.nutrition ? 'filled' : ''}">★</span>
                            {/each}
                </div>
            </div>
          
            <div class="stats_square">
                <p>Feel</p>
                <div class="stars">
                            {#each Array(5).fill(0).map((_, i) => i) as i}
                                <span class="star {i < weeklyAverages.feel ? 'filled' : ''}">★</span>
                            {/each}
                </div>
            </div>
              <div class="stats_square">
                <p>Sessions</p>
                <p class="bold">{sessionsCount}</p>
            </div>
            <div class="stats_square">
                <p>General score</p>
                <div class="stars">
                            {#each Array(5).fill(0).map((_, i) => i) as i}
                                <span class="star {i < generalScore ? 'filled' : ''}">★</span>
                            {/each}
                </div>
            </div>
        </div>
    </section>
</main>

<style>

    .bold {
        font-weight: bold;
    }
    .swimmer {
        max-height: 90px;
        max-width: 100%; 
        margin-bottom: 5px;
        border: 2px solid #000;
        border-radius: 5px;
        padding:5px;
    }
    .date {
        font-size:1.1em;
        text-align: center;
    }
    .link {
        color:blue;
        font-size: 0.9em;
        text-decoration: underline;
    }

    .more {
        position: absolute;
        right: 10%;
        font-size: 0.9em;
        text-decoration: underline;
    }
    h2 {
        color:black;
        font-size: 1.3em;
        display: inline;
    }
    p {
        color: black;
        font-size: 1.5em;
        
    }
    main {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
    }

    .recent {
        margin-top: 50px;
        margin-left: 20px;
        height: 30%;
        width: 100%;
    }   

    .stats-main {
        margin-top: 30px;
        margin-left: 20px;
        height: 60%;
        width: 100%;
    }

    .stats {
        margin-top: 15px;
        height: 65%;
        width: 90%;
        border: 2px solid #75BCFF;
        border-radius: 10px;
        display:flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .add {
        color: black;
        position: absolute;
        font-size: 20px;
        font-style: bold;
        right: 10%;
        border: 2px solid black;
        width: 20px;
        height: 20px;
        line-height: 10px;
        text-align: center;
        font-weight: bold;
    }
    .sessions {
        margin-top: 15px;
        height: 65%;
        width: 90%;
        border: 2px solid #75BCFF;
        border-radius: 10px;
        gap: 30px;
        display: flex; 
        align-items: center; 
        padding: 10px; 
        box-sizing: border-box; 
    }

    .square {
        cursor: pointer;
        margin-top: 15px;
        width: 20%;
        height: 100%;
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        justify-content: center; 
        text-align: center; 
    }

    .show {
        position: absolute;
        margin-top: 10px;
        
    }
    .stats_square {
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 10px;
        align-items: center;
        border: 2px solid black;
        text-align: center;
        margin: 15px;
        width: 25%; 
        aspect-ratio: 1;
        height: 35%;
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