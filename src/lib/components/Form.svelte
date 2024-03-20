<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { timerStore } from '$lib/timerStore'

    interface FormData {
        name: string;
        phone: string;
        email: string;
    }

    let name = '';
    let phone = '';
    let email = '';

    const dispatch = createEventDispatcher();
    let showButtonSend = false;

    function handleSubmit() {
        showButtonSend = true;  

        const formData: FormData = { name, phone, email };

        localStorage.setItem('formData', JSON.stringify(formData));

        dispatch('formSubmitted');

        $timerStore.challengeStarted = true
    }

    function handleFinished() {
        dispatch('finished');
    }

</script>

<form on:submit|preventDefault={handleSubmit}>
    <label>
        Nome:
        <input type="text" bind:value={name} required>
    </label>
    <label>
        Telefone:
        <input type="tel" bind:value={phone} required>
    </label>
    <label>
        Email:
        <input type="email" bind:value={email} required>
    </label>
    {#if !$timerStore.challengeStarted}
        <button type="submit">Iniciar Desafio</button>
    {/if}
</form>

{#if $timerStore.challengeStarted}
    <button type="button" on:click={handleFinished} class="btn">Enviar</button>
{/if}
