<script lang="ts">
	import { ripple } from "svelte-ripple-action"

	export let animated = false;
	export let large = false;
	export let color = false;
	export let text = "";
	export let href = "";
	export let icon: string|null = null;
	export let hovered = false;
	export let clicked = false;
	export let sameTab = false;

	function handleMouseOver() {
		hovered = true;
	}

	function handleMouseDown() {
		clicked = true;
	}

	function handleMouseUp() {
		if (clicked) setTimeout(() => { clicked = false }, 500);
		hovered = false;
	}

	function handleClick(e: Event) {
		clicked = true;
		if (large) {
			e.preventDefault();
			setTimeout(() => { window.location.href = href }, 500);
		}
		if (clicked) setTimeout(() => { clicked = false }, 500);
	}
</script>

<li class="NavButton" class:large class:color class:animated>
	<a {href} target={sameTab ? undefined : "_blank"} draggable="false" on:focus={handleMouseOver} on:mouseover={handleMouseOver} on:mouseout={handleMouseUp} on:blur={handleMouseUp} on:mousedown={handleMouseDown} on:mouseup={handleMouseUp} on:click={handleClick}>
		<div class="box">
			<img src={icon} alt="" draggable="false" height={color ? 26 : undefined} />
			<div class="ripple" use:ripple={{ color: large ? '#30afff15' : 'rgba(255, 255, 255, 0.25)' }} />
		</div>

		<p>{text}</p>
	</a>
</li>

<style lang="scss">
	.NavButton {
		filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0));
		transition: filter 0.45s cubic-bezier(0.25, 0.45, 0.46, 0.94);
		list-style: none;
	}


	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		@include vgap(10px);
		
		width: 47px;
		text-decoration: none;

		user-select: none;
		-webkit-user-select: none;
		-webkit-user-drag: none;
	}

	.box {
		position: relative;
		width: 47px;
		height: 47px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.NavButton.large .box::after {
	// .NavButton.color .box::after {
		@include fill-pseudo;
		background: linear-gradient(#FFFF, #FFFf, #FFFf);
		border-radius: 999px;
		inset: 2px;
		z-index: -2;
	}

	.NavButton.color .box::after {
		inset: 1px;
	}

	.box::before {
		@include fill-pseudo;
		pointer-events: none;
		border-radius: 999px;
		box-shadow: 0 0 0 1px rgba(255,255,255,1.0);
		opacity: 0.5;
		transition: opacity 0.475s cubic-bezier(0.25, 0.45, 0.46, 0.94);
	}

	.NavButton.color .box::before {
		box-shadow: none;
		background: linear-gradient(160deg, #AAEFDE 0%, #7FE1DF 25%, #6ED3DF 50%, #74B6DB 75%, #928FC9 100%);
		z-index: -3;
		mask: linear-gradient(#000 0 0) exclude, linear-gradient(#000 0 0) content-box;
		padding: 1px;
		opacity: 0.68;
	}
	.NavButton.color p {
		color: #aaa;
		// background: linear-gradient(#ccc, #888);
		// margin: -5px;
		// padding: 5px;
		// background-clip: text;
	}
	.NavButton.color:hover .box::before {
		opacity: 1 !important;
	}

	.ripples {
		@include fill;
		border-radius: 999px;
	}

	.NavButton:hover {
		filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.63));
	}

	.NavButton:hover .box::before {
		opacity: 0.8;
		transition: opacity 0.1s cubic-bezier(0.25, 0.45, 0.46, 0.94);
	}

	.NavButton.animated .box img {
		opacity: 0;
	}

	:global(.NavButton.animated:nth-child(1) .box::before) {
		animation: hide 1.2s, bubbleInHalf 0.5s cubic-bezier(0.25, 0.45, 0.46, 0.94) 1.2s;
	}
	:global(.NavButton.animated:nth-child(2) .box::before) {
		animation: hide 1.3s, bubbleInHalf 0.5s cubic-bezier(0.25, 0.45, 0.46, 0.94) 1.3s;
	}
	:global(.NavButton.animated:nth-child(3) .box::before) {
		animation: hide 1.4s, bubbleInHalf 0.5s cubic-bezier(0.25, 0.45, 0.46, 0.94) 1.4s;
	}

	:global(.NavButton.animated:nth-child(1) .box img) {
		animation: bubbleInMore 0.5s cubic-bezier(0.25, 0.45, 0.46, 0.94) 1.2s, stay 1s infinite 1.7s;
	}
	:global(.NavButton.animated:nth-child(2) .box img) {
		animation: bubbleInMore 0.5s cubic-bezier(0.25, 0.45, 0.46, 0.94) 1.3s, stay 1s infinite 1.8s;
	}
	:global(.NavButton.animated:nth-child(3) .box img) {
		animation: bubbleInMore 0.5s cubic-bezier(0.25, 0.45, 0.46, 0.94) 1.4s, stay 1s infinite 1.9s;
	}

	:global(.NavButton.animated:nth-child(1) p) {
		animation: unexpanded 1.0s, expand 1.0s cubic-bezier(0.25, 0.45, 0.46, 0.94) 1.0s;
	}
	:global(.NavButton.animated:nth-child(2) p) {
		animation: unexpanded 1.0s, expand 1.0s cubic-bezier(0.25, 0.45, 0.46, 0.94) 1.1s;
	}
	:global(.NavButton.animated:nth-child(3) p) {
		animation: unexpanded 1.0s, expand 1.0s cubic-bezier(0.25, 0.45, 0.46, 0.94) 1.2s;
	}

	p {
		font-family: "Open Sans";
		font-size: 10.2px;
		font-weight: 400;
		letter-spacing:2.142px;
		transition: letter-spacing 0.75s cubic-bezier(0.25, 0.45, 0.46, 0.94);

		color: white;

		margin: 0;
		padding: 0;
		white-space: nowrap;
	}

	@keyframes expand {
		0% {
			letter-spacing: 1.142px;
			opacity: 0;
		}
		100% {
			letter-spacing: 2.142px;
			opacity: 1;
		}
	}

	@keyframes stayExpanded {
		0% {
			letter-spacing: 1.142px;
			opacity: 0;
		}
		100% {
			letter-spacing: 1.142px;
			opacity: 0;
		}
	}

	.NavButton:hover p {
		transition: letter-spacing 0.475s cubic-bezier(0.25, 0.45, 0.46, 0.94);
		letter-spacing: 2.542px !important;
	}

	.NavButton.large {
		list-style: none;
		transition: none;
		.box {
		// scale: 1.4;
		transform: scale(1.4);
		transition: transform 0.575s cubic-bezier(0.175, 0.885, 0.32, 1.2125), filter 0.375s ease;

		// margin-bottom: 19px;
		margin-bottom: 13px;
		// margin-bottom: 0;
		// margin-bottom: 5px;
		&:hover {
			filter: drop-shadow(0 0 8px rgba(255,255,255,0.80));
			transition: transform 0.575s cubic-bezier(0.175, 0.885, 0.32, 1.2125), filter 3.375s ease;
		}
		&:active {
			filter: none;
			transition: transform 0.575s cubic-bezier(0.175, 0.885, 0.32, 1.2125); 
		}
		// &::after {
		// 	transition: background 3.375s ease;
		// }
		// &:hover::after {
		// 	background: linear-gradient(#ffff, #fffa);
		// }
		&:hover::after {
			transition: none;
			background: linear-gradient(#ffff, #fffe, #fffc);
		}
		}
		p {
			// scale: 1.3;
			font-weight: 300;
			font-size: 28px;
			color: #FFFC;
			font-family: "lato";
			letter-spacing: -2.6px; //-2.78
			animation: none;
			// order: -1;
		// margin-bottom: 13px;
		}
		&:hover p {
			letter-spacing: -3.28px !important;
			transition: letter-spacing 3s cubic-bezier(0.25, 0.45, 0.46, 0.94);
		}
		// &:active p {
		// 	letter-spacing: -2.78px !important;
		// }

		// p {
		// 	// scale: 1.3;
		// 	font-weight: 300;
		// 	font-size: 18px;
		// 	color: #FFFC;
		// 	font-family: "lato";
		// 	letter-spacing: 2.5px;
		// }
		// &:hover p {
		// 	letter-spacing: 3px !important;
		// }
	}

	.NavButton.large:active .box {
		transform: scale(1.3);
	}
</style>
