<script lang="ts">
  import { base } from '$app/paths'

	import icon_soundcloud from '$lib/res/icon_soundcloud.svg'
	import ic_spotify from '$lib/res/ic_spotify.svg'
	import ic_applemusic from '$lib/res/ic_applemusic.svg'
	import ic_palette from '$lib/res/ic_palette.svg'
	import ic_back_color from '$lib/res/ic_back_color.png'

	import Title from '$lib/view/Title.svelte'
	import Date from '$lib/view/Date.svelte';
	import LinkButton from '$lib/view/LinkButton.svelte'
	import TitleHeader from '$lib/view/TitleHeader.svelte'
	import NavButton from '$lib/view/NavButton.svelte'
	import Back from '$lib/view/Back.svelte'

	export let title: string
	export let subtitle = 'TC64'
	export let date: string|null = null
	export let img: string
	export let icon: string|null = null
	export let source = 'TC64'
	export let sourceUrl = `${base}/tc64`
	export let center = false

	export let soundcloud: string | null = null;
	export let spotify: string | null = null;
	export let appleMusic: string | null = null;

	export let galleryTitle = "ART ITERATIONS.";
	export let galleryImg: string[][] = []
</script>

<div class="body">
	<!--TITLE-->
	<header>
		<div class="wrapper">
			<Title {subtitle} white {icon}>
				{title}
			</Title>
			{#if date}
				<div class="date">
					<Date white>
						<span class="stylish">{date}</span>
					</Date>
				</div>
			{/if}
		</div>
	</header>

	<!--DETAIL-->
	<section class="detail" class:center>
		<div class="wrapper">
			<figure>
				<img src={img} alt={source == 'TC64' ? `${title} cover art` : ''} />
				<slot name="images" />
			</figure>

			<aside>
				{#if soundcloud || spotify || appleMusic}
					<ul class="links">
						{#if soundcloud && !spotify && !appleMusic} 
							<LinkButton icon={icon_soundcloud} text="soundcloud" href={soundcloud} />
						{:else}
							{#if soundcloud}<NavButton icon={icon_soundcloud} href={soundcloud} />{/if}
							{#if spotify}<NavButton icon={ic_spotify} href={spotify} />{/if}
							{#if appleMusic}<NavButton icon={ic_applemusic} href={appleMusic} />{/if}
						{/if}
					</ul>
				{/if}

				<div class="embed">
					<slot name="embed"/>
				</div>
				
				<slot />
			</aside>
		</div>
	</section>

	<!--GALLERY-->
	{#if $$slots.gallery || galleryImg.length >= 1}
		<section class="gallery">
			<TitleHeader tangram icon={ic_palette}>{galleryTitle}</TitleHeader>

			<div class="wrapper">
				{#if galleryImg}
					{#each galleryImg as row}
						<div class="row">
							{#each row as img}
								<!-- svelte-ignore a11y-missing-attribute -->
								<img src={img} />
							{/each}
						</div>
					{/each}
				{/if}

				<slot name="gallery" />
			</div>
		</section>
	{/if}

	<Back text="back to {source}" href={sourceUrl} />
</div>

<style lang="scss">
	.wrapper {
		@include wrapper;
	}

	.body::before {
		@include fill-pseudo;
		top: -21px;
		bottom: auto;
		height: 22px;
		// background-image: url('$lib/res/deco_wave_aqueous.png');
		background-size: 100% 100%;
	}

	.body {
		position: relative;
		background-color: #01BBD4;
		background-image: linear-gradient(#00000003, #0001), url("$lib/res/bg_nav.jpg");
		background-size: 100% 100%;
	}

	header {
		padding-top: 45px;
		padding-bottom: 36px;
	}

	header .wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
	}

	.date {
		margin-bottom: 20px;
	}

	section.detail {
		color: white;
		background-image: url('$lib/res/tangram_above.png');
		background-position: bottom right;
		background-repeat: no-repeat;
		background-size: 40px 40px;
		padding-bottom: 80px;
	}

	section.gallery {
		background-color: white;
	}

	section.gallery .wrapper {
		display: flex;
		flex-direction: column;
		gap: 15px;
		align-items: center;
	}

	.gallery .row {
		display: flex;
		gap: 15px;
	}

	.gallery img {
		width: 256px;
		height: 256px;
		box-shadow: 0 0 0 1px rgba(0,0,0,0.08);
	}

	.gallery :global(img) {
		max-width: 100%;
	}

	figure {
		margin: 0;
		flex-grow: 1;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 15px;
	}

	figure :global(img) {
		max-width: 100%;
	}

	section.detail.center {
		:global(img) { max-width: 750px; border: 32px solid white; }
		aside { display: none; }
	}

	section.detail .wrapper {
		display: flex;
		gap: 40px;
	}

	section.detail aside {
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		width: 452px;
	}

	aside > :global(div:not(:first-child)) {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-bottom: 40px;
	}

	aside > :global(div:last-child) {
		margin-bottom: 22px;
	}

	section.detail :global(h2), section.detail :global(p) {
		margin: 0;
	}

	section.detail :global(h2) {
		font-weight: 300;
		font-size: 28px;
		letter-spacing: -0.08em;
	}

	section.detail :global(p) {
		font-size: 17px;
		font-weight: 300;
	}

	section.detail aside :global(p) {
		font-weight: 400;
	}

	section.detail :global(a) {
		color: white;
	}

	.links {
		display: flex;
		margin: 0;
		padding: 0;
		gap: 24px;
		margin-bottom: 8px;
	}

	.embed {
		// margin-top: 15px;
		margin-bottom: 30px;
	}
</style>
