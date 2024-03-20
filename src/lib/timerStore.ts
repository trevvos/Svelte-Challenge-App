// timerStore.ts
import { writable } from 'svelte/store';

interface TimerState {
    timeLeft: number;
    timer: number | undefined;
    challengeStarted: boolean;
    showModalSuccess: boolean;
    showModalFail: boolean;
}

export const timerStore = writable<TimerState>({
    timeLeft: 15,
    timer: undefined,
    challengeStarted: false,
    showModalSuccess: false,
    showModalFail: false
});
