<script lang="ts">
	import Title from "./Title.svelte";
	import Tag from "./Tag.svelte";
	import ic_soundcloud from '$lib/res/ic_soundcloud_colors.png'
	import ic_github from '$lib/res/ic_github_colors.png'
	import ic_globe from '$lib/res/ic_globe_colors.png'
	import LinkButton from "./LinkButton.svelte";
	import Date from "./Date.svelte";
	
	export let logo: string|null = null
	
	export let name: string
	export let desc: string|null = null
	export let icon: string|null = null

	export let tags: string[] = []
	export let linkText: string|null = null
	export let linkHref: string|null = null
	export let date: string|null = null

	let linkIcon = ic_globe
	$: {
		if (linkHref?.includes("soundcloud")) linkIcon = ic_soundcloud
		if (linkHref?.includes("github")) linkIcon = ic_github
	}
</script>

<header>
	<div class="wrapper">
		<div class="left">
			<Title scent>{name} <svelte:fragment slot="accessory">{#if date}<Date><span>{date}</span><slot /></Date>{/if}</svelte:fragment></Title>

			{#if desc}
				<p class="desc">{desc}</p>
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
		</div>

		<div class="right">
			<div class="logo">
				<img src={logo} alt="" />
				<img src={logo} alt="" class="scent" />
			</div>
		</div>
	</div>
</header>

<style lang="scss">
	header::before {
		@include fill-pseudo;
		top: -17px;
		bottom: auto;
		height: 18px;
		// background-image: url('$lib/res/deco_wave.svg');
		background-size: 100% 100%;
	}

	.wrapper {
		@include wrapper-pad;
	}
	
	header {
		position: relative;
		padding: 40px 0 0 0;
		// background: linear-gradient(#ffffff, #ffffff, #fafafa);

		background-color: #FFF;
		// background-image: url('$lib/res/tangram_below.png'), linear-gradient(#0088AA11, #0088AA00), linear-gradient(#25C5DA1A, #25C5DA00);
		// background-image: linear-gradient(#0088AA09, #0088AA00), linear-gradient(#25C5DA0d, #25C5DA00);
		// background-size: 80px 80px, 100% 8px, 100% 153px; 
		background-size: 100% 8px, 100% 153px; 
		background-position: top right, top left, top left;
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
		width: 270px;
		height: 270px;
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

	.desc {
		color: #2f2e2e;
		color: #4d4d4d;
		font-weight: 300;
		font-size: 21px;
		opacity: 0.75;
		letter-spacing: -0.081em;
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
		margin-top: auto;
		margin-bottom: 4px;
	}
</style>
