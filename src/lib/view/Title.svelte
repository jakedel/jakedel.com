<script lang="ts">
  import { base } from '$app/paths'

	export let icon: string|null = null;
	export let subtitle: string|null = null;
	export let scent = false;
	export let alt = false;
	export let white = false;
	export let center = false;
	import fluid_divider from '$lib/res/fluid_divider.svg'
</script>

<div class="Title" class:scent class:alt class:white class:center>
	<div class="row">
		{#if subtitle}<h3>{subtitle}</h3>{/if}
		<h1><slot /></h1>
		<slot name="accessory" />

		{#if icon}
			<img src={icon} alt="" />
		{/if}
	</div>
	<!-- <hr /> -->
	<img class="divider" src={fluid_divider} alt="" />
</div>


<style lang="scss">
	.Title {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		@include vgap(3px);
	}

	.Title.center {
		align-items: center;
	}

	.row {
		display: flex;
		align-items: center;
		height: 77px;
		@include hgap(-6.38px);
	}

	h1 {
		@include scent;
		font-family: "Poiret One";
		font-size: 67px;
		font-weight: 200;
		letter-spacing: -6.365px;
		// letter-spacing: -6.385px;
		padding-right: 3px;
		display: flex;
		gap: 30px;
	}

	h1 :global(img) {
		margin-left: -28px;
	}

	// h2 {
	// 	// text-transform: uppercase;
	// 	font-size: 24px;
	// 	position: absolute;
	// 	top: -44px;
	// 	font-family: "Champagne & Limousines";
	// 	color: white;
	// 	padding-left: 3px;
	// 	font-weight: 300;
	// 	padding-right: 6px;
	// 	letter-spacing: -0.0655em;
	// }

	// h2 {
	// 	text-transform: uppercase;
	// 	font-size: 24px;
	// 	position: absolute;
	// 	top: -24px;
	// 	margin: 0;
	// 	font-family: "Champagne & Limousines";
	// 	color: white;
	// 	opacity: 0;
	// 	padding-left: 3px;
	// 	font-weight: 300;
	// 	padding-right: 6px;
	// 	letter-spacing: -0.0555em;
	// }

	h3 {
		text-transform: uppercase;
		font-size: 21.5px;
		position: absolute;
		top: -23px;
		margin: 0;
		font-family: "Caviar Dreams";
		color: white;
		padding-left: 3px;
		font-weight: 300;
		padding-right: 6px;
		letter-spacing: -0.0855em;
	}

	.Title.scent h1 {
		@include stargazing-dreamer-scent;
	}

	.Title.alt h1 {
		font-family: "Champagne & Limousines";
		padding-right: 6px;
		letter-spacing: -0.0855em;
	}

	.Title.white h1 {
		color: white;
	}

	.Title :global(.Date) {
		align-self: flex-end;
		position: relative;
		top: -14px;
		margin-left: 36px;
	}

	.Title.alt :global(.Date) {
		top: -17px;
		margin-left: 34px;
	}

	hr {
		border: none;
		background-color: #d8d8d8;
		width: 16px;
		height: 1px;
		margin: 0;
	}

	.divider {
		opacity: 0.115;
		opacity: 0.25;
		margin-bottom: -0px;
		margin-top: -0px;
	}

	.Title.white .divider {
		// opacity: 0.5;
		opacity: 0.9;
		filter: invert(100%);
	}
</style>
