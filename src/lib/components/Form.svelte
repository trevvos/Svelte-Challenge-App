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
  
        <input type="text" bind:value={name} required placeholder="Nome">
        <input type="tel" bind:value={phone} required placeholder="Telefone">
        <input type="email" bind:value={email} required placeholder="E-mail">

    {#if !$timerStore.challengeStarted}
        <button type="submit">Iniciar Desafio</button>
    {/if}
    {#if $timerStore.challengeStarted}
    <button type="button" on:click={handleFinished} >Tik Tak Envie Agora</button>
{/if}
</form>



<style>
    form {
        border: 1px solid var(--subtle);
        padding: 50px;
        width: 500px;
        border-radius: 30px
    }

    button[type=submit]{
        background-color: var(--brown);
        height: 50px;
        width: 100%;
        border-radius: 6px;
        transition: 250ms;
        margin-top: 20px;
    }

    button[type=submit]:hover {
        background-color: var(--button);
    }

    button{
        background-color: var(--brown);
        height: 50px;
        width: 100%;
        border-radius: 6px;
        transition: 250ms;
        margin-top: 20px;
    }

    button:hover{
        background-color: var(--button);
        height: 50px;
        width: 100%;
        border-radius: 6px;
        transition: 250ms;
        margin-top: 20px;
    }


</style>