<script lang="ts">
  import { base } from '$app/paths'

	export let icon: string|null = null;
	export let href = ""
	export let white = false
</script>

<a
	class="Ribbon"
	class:white
	{href}
>
	{#if icon}
		<img src={icon} alt="" />
	{/if}
	<span><slot /></span>
</a>

<style lang="scss">
	.Ribbon {
		position: relative;
		display: flex;
		align-items: center;
		height: 40px;
		gap: 6px;
		text-decoration: none;

		background-image: url('$lib/res/ribbon_center.svg');
		background-size: auto 40px;
		background-repeat: repeat-x;
	}

	span {
		display: flex;
		margin: 0;
		background: linear-gradient(#ccc, #777);
		background-clip: text;
		color: transparent;
		font-family: 'Open Sans Condensed';
		font-weight: 300;
		// font-size: 16px;
		// letter-spacing: 1.1px !important;
		// font-size: 18.5px;
		// letter-spacing: 1.295px;
		font-size: 18px;
		letter-spacing: 1.26px;
		letter-spacing: 1.28px;
		text-transform: uppercase;
		line-height: 100%;
	}

	.Ribbon::before {
		@include fill-pseudo;
		right: auto;
		bottom: auto;
		left: -53px;
		width: 54px;
		height: 47px;
		background-image: url('$lib/res/ribbon_left.svg');
	}

	.Ribbon::after {
		@include fill-pseudo;
		right: -53px;
		bottom: auto;
		left: auto;
		width: 54px;
		height: 47px;
		background-image: url('$lib/res/ribbon_right.svg');
	}

	.Ribbon.white {
		background-image: url('$lib/res/ribbon_center_w.svg');
	}
	.Ribbon.white::before {
		background-image: url('$lib/res/ribbon_left_w.svg');
	}
	.Ribbon.white::after {
		background-image: url('$lib/res/ribbon_right_w.svg');
	}
	.Ribbon.white span {
		background-clip: initial;
		color: white;
		background: none;
	}
</style>
