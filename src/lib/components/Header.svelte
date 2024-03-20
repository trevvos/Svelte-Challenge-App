<script lang="ts">
    import { page } from '$app/stores'

    $: current = $page.route.id
</script>

<header class="header">
    <div class="header__wrapper">
        <h1>Svelte Challenge App</h1>
        {#if current === '/candidate'}
            <a href="/">Voltar</a>
        {:else}
            <a href="/candidate">Ver detalhes do candidato</a>
        {/if}
    </div>
</header>

<style>
.header{
    background-color: var(--subtle);
    padding: 20px;
}

.header__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 500px;
    justify-content: space-between;
}

    h1{
        font-size: 1.5rem;
    }
    a {
        cursor: pointer;
        background-color: var(--input);
        padding: 20px;
        border-radius: 6px;
        transition: 250ms;
    }
    a:hover {
        background-color: var(--subtle);
    }
</style>