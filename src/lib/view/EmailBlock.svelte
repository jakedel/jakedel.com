<script lang="ts">
  import { base } from '$app/paths'

	import NavButton from "./NavButton.svelte"
	import drop from "$lib/res/drop14.png"
	import icon_mail from "$lib/res/icon_mail.svg"
	import deco_wave from '$lib/res/deco_wave.svg'
	import { ripple } from "svelte-ripple-action"
	import icon_flower from "$lib/res/icon_flower.svg"
	import icon_diamond from "$lib/res/icon_diamond.png"

	export let triangleColor: string | null = null;
	export let onRoot = false;
	let drip = false;
	let hovered = false;
</script>

{#if onRoot}
	<div class="blooms">
		<img src={icon_diamond} height={64} alt="" />
	</div>
{/if}

<div class="EmailBlock" class:notRoot={!onRoot} class:hovered use:ripple={{ color: '#FFF2', disabled: !hovered }} >
	<div class="triangle" style:background-color={triangleColor} />
	<NavButton bind:hovered bind:clicked={drip} large icon={icon_mail} text="thejakedel@gmail.com" href="mailto:thejakedel@gmail.com" />
	<!-- <a href="mailto:thejakedel@gmail.com">thejakedel@gmail.com</a> -->
	<div class="drop">
		<!-- <img class:drip src={drop} height={64} alt="" /> -->
	</div>
	<!-- <div class="drop2">
		<img src={drop} height={64} alt="" />
	</div> -->
	<!-- <img class="wave" src={deco_wave} alt="" draggable="false" /> -->
</div>

<style lang="scss">	
	.wave {
		position: absolute;
		width: 100%;
		bottom: -1px;
		left: 0px;
		z-index: 999;
		height: 18px;
		pointer-events: none;
	}
	.blooms {
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.EmailBlock.notRoot {
		margin-top: 80px;
	}
	.EmailBlock {
		position: relative;
		// background-color: #0a0a0a;
		background-color: #131313;
		// background-image: url('$lib/res/tangram_below.png'), linear-gradient(#0088AA11, #0088AA00), url('$lib/res/bg_footer3.jpg');
		// background-size: 80px 80px, 100% 8px, 100% 100%;
		// background-position: top right, top left, top right;
		// background-blend-mode: hard-light, normal, normal;
		background-image: linear-gradient(#0088AA11, #0088AA00), url('$lib/res/bg_footer3.jpg');
		background-size: 100% 8px, 100% 100%;
		background-position: top left, top right;
		background-repeat: no-repeat;
		height: 268px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;

		.triangle {
			position: absolute;
			top: 0;
			margin: 0 auto;
			background-color: #FFF;
			clip-path: polygon(0 0, 100% 0, 50% 100%);
			width: 22px;
			height: 7px;
			z-index: 1;
		}

		a {
			// color: #FF5BAD;
			color: #FFFA;
			font-family: 'lato';
			font-weight: 300;
			text-decoration: none;

			line-height: 32px !important;
			padding: 10px 0 !important;
			z-index: 2;
			font-size: 28px;
			letter-spacing: -2.5px;
			text-transform: lowercase;
		}

		a:hover {
			color: #FFF;
		}
	}

	.EmailBlock::after {
		@include fill-pseudo;
		// background-image: linear-gradient(to top, #FF5BAD5F, #FF5BAD11, #FF5BAD11), linear-gradient(to bottom right, #FFA0EF, #FFBF0000, #FFBF0000), linear-gradient(190deg, #FFF0D2FF, #FF0F0000, #FFBF0000), linear-gradient(to bottom left, #FFA50000, #FFBF0000, #FFBF0000);
		// mix-blend-mode: lighten;
		background-image: url('$lib/res/bg_nav_fluid_scent.jpg');
		background-position: top right;
		background-size: 100% 100%;
		mix-blend-mode: hue;
		pointer-events: none;
		opacity: 0.001;
		transition: opacity 0.5s cubic-bezier(0.25, 0.45, 0.46, 0.94);
		background-position: center center;
	}

	.EmailBlock.hovered::after {
		opacity: 0.68;
	}
	.EmailBlock.hovered:active::after {
		opacity: 1;
		transition: opacity 0.3s cubic-bezier(0.25, 0.45, 0.46, 0.94);
	}
	.drop {
		display: flex;
		// top: auto;
		top: 77px;
		right: 570px;
		// bottom: 0;
		margin: 0 auto;
		position: absolute;
		align-items: flex-end;
		justify-content: center;
		// padding-bottom: 1px;
		transform-origin: top center;
		transition: transform 0.475s cubic-bezier(0.25, 0.45, 0.46, 0.94), filter 1.375s ease;
		animation: wavera 1.3s ease-in infinite;
		transform: rotate(0deg);
	}
	.drop2 {
		display: flex;
		top: 0;
		bottom: 1px;
		opacity: 0.78;
		// bottom: 18px;
		left: 0;
		right: 0;
		position: absolute;
		align-items: center;
		justify-content: center;
		transform-origin: top center;
		transition: transform 0.475s cubic-bezier(0.25, 0.45, 0.46, 0.94), filter 1.375s ease;
	}
	.drop img {
		transform-origin: top center;
		transition: transform 0.275s ease, opacity 0.5s ease;
		animation: fadeIn 1s cubic-bezier(0.25, 0.45, 0.46, 0.94);
		// mix-blend-mode: difference;
		// transform: scaleX(0.99) scaleY(0.95);
		// transform: scaleX(0.99) scaleY(0.95);
		// transform: scaleX(0.9) scaleY(0.9);
		transform: rotate(3deg);
	}
	.EmailBlock.hovered:not(:active) .drop img {
		transform: scale(1);
		opacity: 1;
	}
	.drop img.drip {
		transform: scale(1);
		animation: fall 0.5s cubic-bezier(0.25, 0.45, 0.46, 0.94), hide 1s infinite 0.5s;
		opacity: 0;
	}
	.EmailBlock.hovered .drop {
		animation: waver 0.83s ease-in infinite;
		filter: drop-shadow(0 0 8px rgba(255,255,255,1));
		transform: rotate(3deg);
	}
	// .EmailBlock:active .drop img {
	// 	// animation: fall 0.3s cubic-bezier(0.25, 0.45, 0.46, 0.94), fadeIn 3.3s cubic-bezier(0.25, 0.45, 0.46, 0.94) 0.3s;
	// 	animation: fall 0.3s cubic-bezier(0.25, 0.45, 0.46, 0.94) 0.5s;
	// 	animation: none;
	// }
	.EmailBlock::before {
		@include fill-pseudo;
		background-image: url('$lib/res/sensory_bloom_quiver.png');
		background-size: auto 100%;
		background-position: top left;
		opacity: 0.48;
		pointer-events: none;
		transition: opacity 2.5s cubic-bezier(0.25, 0.45, 0.46, 0.94);
	}

	.EmailBlock.hovered::before {
		opacity: 0.90;
	}
	// .EmailBlock:active::before {
	// 	opacity: 1;
	// 	transition: opacity 0.3s cubic-bezier(0.25, 0.45, 0.46, 0.94);
	// }
	.EmailBlock :global(.NavButton) {
		z-index: 2;
	}
	@keyframes wavera {
		0% {
			transform: rotate(2deg);
			opacity: 1;
		}
		25% {
			transform: rotate(2.0deg) scaleX(1.00);
			opacity: 1;
		}
		50% {
			transform: rotate(2deg) scaleX(1.00);
			opacity: 1;
		}
		75% {
			transform: rotate(2.0deg) scaleX(1.00);
			opacity: 1;
		}
		100% {
			transform: rotate(2deg);
			opacity: 1;
		}
	}
	@keyframes waver {
		0% {
			transform: rotate(2deg);
			opacity: 1;
		}
		25% {
			transform: rotate(3deg) scaleX(1.02);
			opacity: 1;
		}
		50% {
			transform: rotate(2deg) scaleX(1.05);
			opacity: 1;
		}
		75% {
			transform: rotate(1deg) scaleX(1.02);
			opacity: 1;
		}
		100% {
			transform: rotate(2deg);
			opacity: 1;
		}
	}

	@keyframes fall {
		0% {
			transform: translateY(0);
			opacity: 1;
		}
		100% {
			transform: rotate(2deg) translateY(100px) scaleY(1.3);
			// transform: translateY(100px);
			opacity: 0;
		}
	}


</style>
