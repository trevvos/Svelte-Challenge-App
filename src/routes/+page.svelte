<script lang="ts">
    import Form from '$lib/components/Form.svelte';
    import { timerStore } from '$lib/timerStore';

    let isChallengeStarted = false;

    const startTimer = () => {
        let timer = $timerStore.timeLeft
        const interval = setInterval(() => {
            timerStore.update((state) => ({ ...state, timeLeft: state.timeLeft - 1 }));

            timer--;

            if (timer <= 0) {
                $timerStore.showModalFail = true
                $timerStore.timeLeft = 0
                clearInterval(interval);
                stopTimer();
            }
        }, 1000);

        timerStore.update((state) => ({ ...state, timer: interval }));
    };

    function onFinished() {
        stopTimer();
        $timerStore.showModalSuccess = true;
    }

    function stopTimer() {
        clearInterval($timerStore.timer);
        timerStore.update((state) => ({ ...state, timer: undefined }));
    }

    function handleSubmit() {
        startTimer();
        isChallengeStarted = true;
    }


</script>


<section class="home">
    <div class="home__wrapper wrap">
        <Form on:formSubmitted={handleSubmit} on:finished={onFinished} />
        <div class="temporizador">
           
            <span class="title__temporizador">Tempo restante</span>
            <br /> 
            <span class="counter__temporizador">{$timerStore.timeLeft}</span>
        </div>
    </div>
</section>


{#if $timerStore.showModalSuccess}
    <dialog id="my_modal_1" class="modal" open>
        <div class="modal-box">
            <h3 class="font-bold text-lg">Parabéns !</h3>
            <p class="py-4">Desafio finalizado com sucesso!</p>
            <div class="modal-action">
                <form method="dialog">
                    <button class="btn">Fechar</button>
                </form>
            </div>
        </div>
    </dialog>
{/if}

{#if $timerStore.showModalFail}
    <dialog id="timeout_modal" class="modal" open>
        <div class="modal-box">
            <h3 class="font-bold text-lg">Desafio finalizado com falha!</h3>
            <p class="py-4">Você não enviou o formulário dentro do tempo limite.</p>
            <div class="modal-action">
                <form method="dialog">
                    <button class="btn">Fechar</button>
                </form>
            </div>
        </div>
    </dialog>
{/if}

<style>
    .home__wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    .temporizador {
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        border: 15px solid var(--subtle);
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .title__temporizador {
        font-size: 1.5rem;
    }

    .counter__temporizador {
        font-size: 3.5rem;
    }

    .modal {
        color: var(--black);
    }
</style>