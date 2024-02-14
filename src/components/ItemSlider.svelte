<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { fly } from "svelte/transition";
    import Icon from "$components/Icon.svelte";

    export let items: string[] = [];

    let activeIndex = 0;

    let interval;
    onMount(() => {
        interval = setInterval(() => {
            activeIndex = (activeIndex + 1) % items.length;
        }, 4000);
    });

    onDestroy(() => clearInterval(interval));

    function getRandomPosition() {
        return {
            x: Math.floor(Math.random() * 300) + 100, // Random x from 500 to 1000
            y: 0, // Random y from -200 to 200
            duration: 3000
        };
    }
</script>

<ul>
    {#each items as item, i}
        {#if activeIndex === i}
            <li id={i.toString()} in:fly={{...getRandomPosition()}} out:fly={{ x: 0, y:0, duration: 1000 }}>
                {item}

                <!-- {#if withIcon} -->
                <span><Icon name={item.toLowerCase()}  /></span>
                <!-- {/if} -->
            </li>
        {/if}
    {/each}
</ul>

<style>
    li {
        display: inline-block;
        position: absolute;
        color: var(--color-primary);
    }

    ul {
        display: inline;
        list-style: none;
    }

    span {
        display: inline-block;
        position: absolute;
        right: -30px;
    }
</style>
