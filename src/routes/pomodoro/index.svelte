<script lang="ts">
	import FaStopCircle from 'svelte-icons/fa/FaStopCircle.svelte';

	let onBreak = false;
	let pomodoroCount = 0;

	let timerOn = false;
	let timerPaused = false;
	let timeLabel = formatTime(25, 0);
	let timeRemaining = 0;
	let timerInterval: NodeJS.Timer;

	function toggleTimer(countDown: number) {
		timerOn = true;
		timerPaused = false;
		timeRemaining = countDown * 60;
		timer();
		timerInterval = setInterval(timer, 1000);

		function timer() {
			if (timeRemaining === 0) {
				timerFinished();
			}
			let diff = timeRemaining; // Time in seconds
			let mins = (diff / 60) | 0;
			let secs = diff % 60 | 0;
			timeRemaining -= 1;

			timeLabel = formatTime(mins, secs);
			if (diff <= 0) {
				timeRemaining = Date.now() + 1000;
			}
		}
	}

	function resetTimer() {
		let result = confirm('Are you sure you want to restart your pomodoro?');
		if (result) {
			timerOn = false;
			timerPaused = false;
			clearInterval(timerInterval);
			timeRemaining = 25;
			timeLabel = formatTime(25, 0);
			onBreak = false;
			pomodoroCount = 0;
		}
	}

	function pauseTimer() {
		timerOn = false;
		timerPaused = true;
		clearInterval(timerInterval);
	}

	function timerFinished() {
		timerOn = false;
		timerPaused = false;
		clearInterval(timerInterval);
		timeLabel = formatTime(0, 0);
		if (!onBreak) {
			pomodoroCount >= 4 ? (pomodoroCount = 0) : (pomodoroCount += 1);
		}
		onBreak = !onBreak;
	}

	function formatTime(mins: number | string, secs: number | string): string {
		mins = mins < 10 ? '0' + mins : mins;
		secs = secs < 10 ? '0' + secs : secs;

		return `${mins}:${secs}`;
	}
</script>

<div class="container">
	<h1>Pomodoro Timer</h1>
	<div class="timer-container {timerOn && 'glow'}">
		<div class="status-bar">
			<span class={!onBreak && 'active'}>Focusing</span>
			<span class={onBreak && 'active'}>Short Break</span>
		</div>
		<h2 class="timer-counter">{timeLabel}</h2>
		<hr />
		<div class="button-group">
			{#if !timerOn && !timerPaused}
				<button class="timer-toggle" on:click={() => toggleTimer(onBreak ? 5 : 25)}>Start</button>
			{:else if timerOn && !timerPaused}
				<button class="timer-toggle" on:click={pauseTimer}>Pause</button>
			{:else if timerPaused && !timerOn}
				<button class="timer-toggle" on:click={() => toggleTimer(timeRemaining / 60)}>Resume</button
				>
			{/if}
			<button class="timer-stop" on:click={resetTimer}
				><div class="icon"><FaStopCircle /></div></button
			>
		</div>
	</div>
</div>

<style>
	hr {
		margin: 1rem 0;
		width: 100%;
		height: 0px;
		border: 1px solid var(--headline);
	}
	.container {
		background-image: url('../../assets/animated-shapes.svg');
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		height: 100vh;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.timer-container {
		background-color: var(--background-secondary);
		padding: 1.5rem;
		border-radius: 3px;
		transition: 200ms;
		width: 22rem;
	}
	.glow {
		filter: drop-shadow(0 0 0.75rem var(--primary));
	}

	.timer-counter {
		text-align: center;
		margin: 0;
	}
	.button-group {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
	}
	.timer-stop {
		width: 4rem;
		margin-left: auto;
	}
	.timer-stop .icon {
		height: 1.5rem;
	}
	.status-bar {
		text-align: center;
		margin-bottom: 1rem;
	}
	.status-bar span {
		margin: 0 0.2rem;
		color: var(--headline);
	}
	.status-bar .active {
		padding: 0.4rem;
		margin: 0;
		background-color: rgba(0, 0, 0, 0.15);
		text-align: center;
		font-weight: 500;
	}
</style>
