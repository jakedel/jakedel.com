<script lang="ts">
  import { base } from '$app/paths'

	import Title from "../Title.svelte";
	import Tag from "../Tag.svelte";
	import ic_soundcloud from '$lib/res/ic_soundcloud_colors.png'
	import ic_github from '$lib/res/ic_github_colors.png'
	import ic_globe from '$lib/res/ic_globe_colors.png'
	import ic_palette from '$lib/res/ic_palette_sm.png'
	import LinkButton from "../LinkButton.svelte";
	import Date from "../Date.svelte";
	import Back from "../Back.svelte"
	
	export let logo: string|null = null
	
	export let name: string
	export let desc: string|null = null
	export let tools: string|null = null
	export let icon: string|null = null

	export let tags: string[] = []
	export let linkText: string|null = null
	export let linkHref: string|null = null
	export let date: string|null = null
	export let altFont = false;

	let linkIcon = ic_globe
	$: {
		if (linkHref?.includes("soundcloud")) linkIcon = ic_soundcloud
		if (linkHref?.includes("github")) linkIcon = ic_github
	}
</script>

<article>
	<header>
		<div class="wrapper">
			<div class="left">
				<Title scent alt={!altFont}>{name} <svelte:fragment slot="accessory">{#if date}<Date><span>{date}</span><slot name="dateExtra" /></Date>{/if}</svelte:fragment></Title>

				{#if desc}
					<div class="desc-row">
						<span class="icon" class:bold={icon === '♪'}>{icon}</span>
						<p class="desc">{desc}</p>
					</div>
				{/if}
				

				{#if tags}
					<div class="tags">
						{#each tags as tag}
							<Tag>{tag}</Tag>
						{/each}
					</div>
				{/if}

				{#if linkHref}
					<div class="link">
						<LinkButton text={linkText ?? linkHref} href={linkHref} icon={linkIcon} color />
					</div>
				{/if}

				{#if tools}
			<p class="tools"><img src={ic_palette} alt="" /><span class="highlight">Tools:</span> {tools}</p>
		{/if}
			</div>

			<div class="right">
				<div class="logo">
					<img src={logo} alt="" />
					<img src={logo} alt="" class="scent" />
				</div>
			</div>
		</div>


		<!-- {#if tools}
		<div class="wrapper">
			<p class="tools"><img src={ic_palette} /><span class="highlight">Tools:</span> {tools}</p>
		</div>
		{/if} -->
	</header>

	<slot />
</article>

{#if linkHref}
	<div class="link">
		<LinkButton text={linkText ?? linkHref} href={linkHref} icon={linkIcon} color />
	</div>
{/if}

<Back text="back to index" href="{base}/" />




<style lang="scss">
	header::before {
		@include fill-pseudo;
		top: -17px;
		bottom: auto;
		height: 18px;
		// background-image: url('$lib/res/deco_wave.svg');
		background-size: 100% 100%;
	}

	article > :global(img) {
		width: 100%;
		max-width: 1512px;
		margin: 0 auto;
		display: block;
	}

	article > :global(img.bg) {
		object-fit: scale-down;
		object-position: top center;
		// margin-top: 26px;
		height: 720px;
		max-width: 100%;
		background-image: url('$lib/res/bg_nav_fluid_scent.jpg');
		background-size: 100% 100%;
	}

	article > :global(section) {
		margin: 0 auto;
		max-width: 790px;
		padding: 20px 0 0 0;

		> :global(img) {
			width: 100%;
			margin-top: 16px;
			border-radius: 24px;
		}

		@include contentStyles;
	}

	.wrapper {
		@include wrapper-pad;
	}
	
	header {
		position: relative;
		padding: 26px 0 33px 0;
		// background: linear-gradient(#ffffff, #ffffff, #fafafa);

		background-color: #FFF;
		// background-image: url('$lib/res/tangram_below.png'), linear-gradient(#0088AA11, #0088AA00), linear-gradient(#25C5DA1A, #25C5DA00);
		// background-image: linear-gradient(#0088AA09, #0088AA00), linear-gradient(#25C5DA0d, #25C5DA00);
		background-image: linear-gradient(#fffd, #fffc), url('$lib/res/bg_japanese_pattern.png');
		// background-size: 80px 80px, 100% 8px, 100% 153px; 
		box-shadow: 0px 1px 4px rgba(0,0,0,0.09);
		// background-size: 100% 8px, 100% 153px; 
		// background-position: top right, top left, top left;
		background-position: top left, bottom right;
		background-size: 100% 100%, auto 115%;
		background-repeat: no-repeat;
	}

	header .wrapper {
		// height: 266px;
		display: flex;
		gap: 40px;
	}

	.left {
		align-self: stretch;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		flex-grow: 1;
	}

	.right {
		align-self: flex-start;
		display: flex;
		flex-shrink: 0;
		// order: -1;
	}


	header .logo {
		position: relative;
		width: 290px;
		height: 290px;
		margin-bottom: 40px;
		// box-shadow: 0px 10px 20px 0px rgba(160, 160, 160, 0.20);
		// box-shadow: 0 2px 36px #ff5bad12, 0px 1px 4px 0px rgba(0, 0, 0, 0.17);
		// box-shadow: 0 2px 36px #ad5bff22, 0px 1px 4px 0px #ad5bff33;
		// box-shadow: 0 2px 16px #ff5bad12, 0px 1px 4px 1px #ff5bad18;
		box-shadow: 0 2px 24px #ad5bff22, 0px 1px 4px 1px #88888812;
		border-radius: 999px;
		background-color: #fff;
		background: linear-gradient(#fff, #fff, #fffaff);
		// background: linear-gradient(#fff, #fff, #fdfdfd);
		// background: linear-gradient(#fff, #fff, #fafffc);
		overflow: hidden;
	}

	header .logo img {
		position: absolute;
		width: 100%;
		height: 100%;
		padding: 8px;
		border-radius: 999px;
	}

	header .logo img.scent {
		filter: blur(8px);
		opacity: 0.5;
		mix-blend-mode: lighten;
	}

	header .logo::after {
		@include fill-pseudo;
		inset: 7px;
		background-image: linear-gradient(to bottom, #FFffFdaF, #FFFFFF15, #FFFFFF0f), linear-gradient(to bottom right, #FFFFFFE5, #FFFFFF35, #FFF1);
		// background-image: linear-gradient(to bottom, #FFFFFFaF, #FFFFFF35, #FFFFFF00);
		mix-blend-mode: normal;
		z-index: 2;
		border-radius: 999px;
		pointer-events: none;
	}

	.desc-row {
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.desc {
		color: #2f2e2e;
		color: #4d4d4d;
		font-weight: 300;
		font-size: 22.5px;
		opacity: 0.75;
		letter-spacing: -0.080em;
	}

	.tools {
		color: #2f2e2e;
		color: rgba(77, 77, 77, 0.75);
		font-weight: 300;
		font-size: 16.5px;
		opacity: 1;
		letter-spacing: -0.050em;
		display: flex;
		align-items: center;
	}

	.tools img {
		width: 26px;
		height: 26px;
		margin-left: -3px;
		margin-right: -2px;
	}

	.tools .highlight {
		font-weight: 500;
		color: #ff5bad;
		@include stargazing-dreamer-scent-pyuu;
		padding: 1px;
		margin: -1px;
		margin-right: 3px;
	}

	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 16px;
		font-size: 22.5px;
		color: #FF5BAD;
		font-family: 'Osaka', 'MS Gothic', sans-serif;
		flex-shrink: 0;
		position: relative;
		top: 2px;
	}

	.icon.bold {
		@include sakura-scent;
		// font-weight: bold;
		font-size: 22.75px;
		top: 0px;
		width: 11px;
		box-sizing: content-box;
		padding: 6px;
		margin: -6px;
	}

	// .desc span {
	// 	font-family: "Open Sans";
	// 	font-weight: 200;
	// }

	.tags {
		display: flex;
		gap: 9px;
	}

	.link {
		display: flex;
		justify-content: center;
		margin: 26px auto 6px auto;
	}

	header .link {
		display: block;
		margin: auto 0 4px 0;
	}
</style>
