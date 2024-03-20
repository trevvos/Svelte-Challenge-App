<!-- Index.svelte -->
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

<h1>Página do Desafio</h1>

<a href="/candidate">Ver Detalhes do Candidato</a>

<Form on:formSubmitted={handleSubmit} on:finished={onFinished} />

<div class="text-center">
    <p>Tempo restante: {$timerStore.timeLeft}</p>
</div>

{#if $timerStore.showModalSuccess}
    <dialog id="my_modal_1" class="modal" open>
        <div class="modal-box">
            <h3 class="font-bold text-lg">Hello!</h3>
            <p class="py-4">Press ESC key or click the button below to close</p>
            <div class="modal-action">
                <form method="dialog">
                    <button class="btn">Close</button>
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
                    <button class="btn">Close</button>
                </form>
            </div>
        </div>
    </dialog>
{/if}
