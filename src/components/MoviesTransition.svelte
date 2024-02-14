<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { crossfade, fly } from "svelte/transition";
    import { movies } from "$lib/config";

    export let items: string[][] = movies.map(movie => [movie.title, movie.url, movie.href]);

    let activeIndex = 0;

    let interval;
    onMount(() => {
        interval = setInterval(() => {
            activeIndex = (activeIndex + 1) % items.length;
        }, 5000);
    });

    onDestroy(() => clearInterval(interval));

    function getRandomPosition() {
        return {
            x: Math.floor(Math.random() * 50) - 50, // Random x from 50 - 50
            y: 0, 
            duration: 5000
        };
    }
</script>

<ul>
    {#each items as item, i}
        {#if activeIndex === i}
            <li id={i.toString()} in:fly={{...getRandomPosition()}} out:fly={{ x: 0, y:0, duration: 500 }}>
                <a target="_blank" href={item.at(2)}>
                    <img src={item.at(1)}  alt={item.at(0)}/>
                </a>
            </li>
        {/if}
    {/each}
</ul>

<style>
    li {
        display: inline-block;
        position: absolute;
        
        color: var(--color-secondary);
        display: grid;
        text-align: center;
		transition: var(--transition);
    }

    ul  {
        display: inline;
        list-style: none;
        min-height: 40vh;
		transition: var(--transition);
    }

    a img {
		padding: 5px;
		max-width: 150%;
		border: 0.5px var(--color-primary) solid;
		border-radius: 10%;
	}
    img {
		grid-area: about-image;
	}
    @media only screen and (max-width: 1200px) {
		ul {
			display: block;
            grid-template-areas: "about-image about-content";
			grid-template-columns: 1fr;
			grid-template-rows: auto 1fr;
		}
		ul::after {
			width: 70%;
		}

		.about a img {
			display: block;
			max-width: 50%;
			margin: 50px auto;
		}
    }
</style>
