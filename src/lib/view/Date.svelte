<script lang="ts">
  import { base } from '$app/paths'

	export let white = false;
</script>

<div class="Date" class:white>
	<p><slot /></p>
</div>

<style lang="scss">
	.Date {
		position: relative;
		display: flex;
		padding: 0 13.5px 0 16.5px;
		align-items: center;
		height: 29px;
		// box-shadow: 0 0 0 1px #cdcdcd;
	}

	p {
		position: relative;
		white-space: pre;
		color: #cdcdcd;
		text-align: center;
		font-family: "Caviar Dreams";
		font-size: 22px;
		font-weight: 300;
		letter-spacing: -2.1px;
		letter-spacing: 1.25px;

		margin: 0;
		margin-left: 0px;
		margin-right: -6px;
		padding-right: 6px;
	}

	p:global(:has(span.stylish)) {
		position: relative;
		top: 1px;
	}

	p :global(span) {
		background: linear-gradient(180deg, #ddd, #c9c9c9, #a1a1a1);
		color: transparent;
		background-clip: text;
	}

	p :global(span.stylish) {
		position: relative;
		// top: -1px;
		font-family: "Champagne & Limousines" !important;
		white-space: pre;
		letter-spacing: -1.3px;
		letter-spacing: 3.3px;
		font-size: 25px;
		margin-left: 1px;
	}


	.Date::before {
		@include fill-pseudo;
		padding: 1px;
		inset: -1px;
		mask: linear-gradient(#000 0 0) exclude, linear-gradient(#000 0 0) content-box;

		background: linear-gradient(180deg, #eaeaea, #dfdfdf, #c1c1c1);
		opacity: 0.68;
		pointer-events: none;
	}




	// WHITE
	.Date.white::before {
		background: linear-gradient(#fffffffc, #ffffff90, #ffffff96);
	}

	.Date.white p :global(span) {
		background: linear-gradient(#fffffffc, #ffffff92, #ffffffa6), linear-gradient(#fffffffc, #ffffff92, #ffffff26);
		background-clip: text;
	}
</style>
