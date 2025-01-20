<script lang="ts">
  import { base } from '$app/paths'

	import logo from '$lib/res/logo_aqua_wonder.png'
	import icon_github from '$lib/res/icon_github.svg'
	import icon_soundcloud from '$lib/res/icon_soundcloud.svg'
	import icon_linkedin from '$lib/res/icon_linkedin.svg'
	import icon_github_colors from '$lib/res/ic_github_colors.png'
	import icon_soundcloud_colors from '$lib/res/ic_soundcloud_colors.png'
	import icon_linkedin_colors from '$lib/res/ic_linkedin_colors.png'
	// import deco_wave from '$lib/res/deco_wave.svg'
	import NavButton from './NavButton.svelte'
	import Ribbon from "./Ribbon.svelte"
	import ic_mail from '$lib/res/ic_mail_w.svg'
	import ic_mail_colors from '$lib/res/icon_mail.svg'

	export let animated = true;
	export let hasEmail = false;
	export let white = false;
</script>

<nav class:animated class:white class:color={!white}>
	<!-- <img class="wave" src={deco_wave} alt="" draggable="false" /> -->

	<div class="wrapper">
		{#if white}
			<a class="home" href="{base}/">
				<div class="logo">
					<img src={logo} alt="" width={108} height={108} />
					<h1>Jake Delgado</h1>
				</div>
			</a>
		{:else}
			<div class="logo">
				<img src={logo} alt="" width={108} height={108} />
				<h1>Jake Delgado</h1>
			</div>
		{/if}

		<ul>
			<NavButton
				text="github"
				href="https://github.com/jakedel/"
				icon={white ? icon_github_colors : icon_github}
				color={white}
				{animated}
			/>
			<NavButton
				text="soundcloud"
				href="https://soundcloud.com/TC64X/"
				icon={white ? icon_soundcloud_colors : icon_soundcloud}
				color={white}
				{animated}
			/>
			<NavButton
				text="linkedin"
				href="https://www.linkedin.com/in/jake-delgado/"
				icon={white ? icon_linkedin_colors : icon_linkedin}
				color={white}
				{animated}
			/>
		</ul>

		{#if hasEmail}
			<div class="email">
				<Ribbon white={!white} icon={white ? ic_mail_colors : ic_mail} href="mailto:thejakedel@gmail.com">thejakedel@gmail.com</Ribbon>
			</div>
		{/if}
	</div>
</nav>



<style lang="scss">
	nav {
		position: relative;
		background-color: #25C5DA;
		background-image: url("$lib/res/bg_nav_fluid_scent.jpg");
		background-size: 100% 100%;
		color: white;
	}

	nav.animated {
		opacity: 0;
		background-image: url("$lib/res/bg_nav.jpg");
		background-size: 100% 100%;
		animation: fadeIn 0.8s cubic-bezier(0.25, 0.45, 0.46, 0.94) 0.5s, stay 1s infinite 1.3s;
	}

	nav.white {
		background-image: none;
		background-color: #fff;
		color: #888;
		// box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
		z-index: 2;
		// box-shadow: 0px 1px 4px rgba(0,0,0,0.09);
	}

	.wrapper {
		@include wrapper;
		position: relative;
		display: flex;
		align-items: center;
		padding-top: 10px;
		padding-bottom: 17px;
		@include hgap(45px);
	}


	a.home {
		text-decoration: none;
		color: inherit;
	}

	
	.logo {
		display: flex;
		align-items: center;
		@include hgap(21px);

		img {
			border-radius: 999px;
		}
		h1 {
			font-family: 'Open Sans';
			font-size: 22.5px;
			font-weight: 300;
			letter-spacing: 6.525px;
			text-transform: lowercase;
			margin: 0;
		}
	}

	nav.white .logo img {
		box-shadow: 0 0 0 1px rgba(0,0,0,0.09);
		width: 88px;
		height: 88px;
	}

	nav.animated .logo {
		opacity: 0;
		animation: slideBackUp 0.5s cubic-bezier(0.25, 0.45, 0.46, 0.94) 0.8s, stay 1s infinite 1.3s;
	}

	nav.animated .logo img {
		opacity: 0;
		// filter: drop-shadow(0 0 4px rgba(255, 255, 255, 1));
		animation: fadeBubbleIn 0.5s cubic-bezier(0.25, 0.45, 0.46, 0.94) 0.8s, stay 1s infinite 1.3s;
	}

	nav.animated .logo h1 {
		opacity: 0;
		animation: slideBackUp 0.6s cubic-bezier(0.25, 0.45, 0.46, 0.94) 0.9s, stay 1s infinite 1.4s;
	}


	ul {
		display: flex;
		align-items: center;
		@include hgap(40px);

		list-style: none;
		margin: 0;
		padding: 0;
	}
	li {
		padding: 0;
	}

	nav.animated ul {
		opacity: 0;
		animation: slideBackUp 0.5s cubic-bezier(0.25, 0.45, 0.46, 0.94) 1.1s, stay 1s infinite 1.6s;
	}


	// .wave {
	// 	position: absolute;
	// 	width: 100%;
	// 	bottom: -1px;
	// 	left: 0px;
	// 	height: 18px;
	// 	pointer-events: none;
	// }



	nav.color::after {
		@include fill-pseudo;
		// background-image: linear-gradient(to top, #FF5BAD5F, #FF5BAD11, #FF5BAD11), linear-gradient(to bottom right, #FFA0EF, #FFBF0000, #FFBF0000), linear-gradient(190deg, #FFF0D2FF, #FF0F0000, #FFBF0000), linear-gradient(to bottom left, #FFA50000, #FFBF0000, #FFBF0000);
		// mix-blend-mode: lighten;
		background-image: url('$lib/res/bg_nav_fluid_scent.jpg');
		background-size: 100% 100%;
		opacity: 1;
		z-index: -1;
		pointer-events: none;
		opacity: 0.01;
		transition: opacity 0.5s cubic-bezier(0.25, 0.45, 0.46, 0.94);
		background-position: center center;
	}

	nav.color:hover::after {
		opacity: 0.68;
	}

	nav.color::before {
		@include fill-pseudo;
		background-image: url('$lib/res/sensory_bloom_quiver.png');
		background-size: auto 100%;
		background-position: top left;
		background-repeat: no-repeat;
		opacity: 0.48;
		pointer-events: none;
		transition: opacity 1.5s cubic-bezier(0.25, 0.45, 0.46, 0.94);
	}

	nav.color.animated::before {
		animation: hide 0.0s, fadeIn38 6s cubic-bezier(0.25, 0.45, 0.46, 0.94) 0.0s, fadeIn382 4s cubic-bezier(0.25, 0.45, 0.46, 0.94) 6s;
	}

	nav.color:hover::before {
		opacity: 0.72;
	}

	.email {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		display: flex;
		align-items: center;
		padding-right: 53px;
		padding-bottom: 18px;
		transform-origin: bottom;
		// transform: rotate(-0.5deg);
	}
</style>
