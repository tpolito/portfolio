<script lang="ts">
</script>

<form>
	<div class="input-container">
		<label for="name">First name</label>
		<input type="text" name="name" placeholder="Your name" id="name" />
	</div>
	<div class="input-container">
		<label for="email">Email address</label>
		<input type="email" name="email" placeholder="Your email" id="email" />
	</div>
	<button>Submit</button>
</form>

<style>
	form {
		display: flex;
		align-items: flex-end;
		border-radius: 3px;
		background-color: transparent;
	}
	label {
		display: block;
		color: var(--headline);
		font-weight: 700;
		font-size: 1rem;
		margin-bottom: 0.2rem;
	}
	input {
		height: 2rem;
		margin-bottom: 0px;
		padding-left: 1.2rem;
		border: 3px solid var(--background);
		border-radius: 3px;
		font-weight: 700;
		background-color: var(--background);
		border-color: var(--background);
		color: var(--headline);
		line-height: 1.4rem;
	}
	input:focus {
		outline: none;
	}
	input:invalid {
		border: 2px solid red;
	}
	button {
		transition: 0.3s;
	}
	button:hover {
		transform: translateY(-4px);
	}
	.input-container {
		margin-right: 1.2rem;
	}
</style>
