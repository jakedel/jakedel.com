<script lang="ts">
  import { base } from '$app/paths'

	import { ripple } from "svelte-ripple-action"

	export let img = ''
	export let text = ''
	export let year: string

	export let href = ''
	export let square = false
	export let expand = false
</script>

<a
	class="GalleryItem"
	{href}
	class:square
	class:expand
	class:wide={!square}
>
	<figure use:ripple={{color: "#00000013"}}>
		<img class="img" src={img} alt="" />
	</figure>

	<div class="caption">
		<p>{text}</p>
		{#if year}
			<!-- <p class="year">&nbsp;<span style:font-size="12px" style:position="relative" style:top="-4px">◇</span>&nbsp;{year}</p> -->
			<!-- <p class="year">&nbsp;&nbsp;•&nbsp;&nbsp;{year}</p> -->
			<p class="year">{year}</p>
		{/if}
	</div>
</a>

<style lang="scss">
	.GalleryItem {
		display: flex;

		flex-direction: column;
		text-decoration: none;
		color: #2f2f2f;
	}

	figure {
		margin: 0;
		background-color: white;
		padding: 15px;
		box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);

		display: flex;
		flex-direction: column;
	}

	div.caption {
		display: flex;
		padding: 18px 0 40px 0;
		gap: 12px;
		justify-content: space-between;
	}




	// ASPECT RATIO
	.GalleryItem.square, .GalleryItem.square figure {
		flex-shrink: 0;
	}
	.GalleryItem.wide, .GalleryItem.square figure {
		flex-grow: 1;
	}
	.img {
		flex-grow: 1;
		align-self: center;
	}
	.GalleryItem.expand .img {
		align-self: stretch;
	}





	// TITLES
	p {
		font-family: "Champagne & Limousines";
		letter-spacing: -0.055em;
		text-transform: uppercase;
		font-size: 25px;
		margin: 0;


		background: linear-gradient(#aaa, #222);
		background-clip: text;
		color: transparent;
	}

	p.year {
		font-family: "Caviar Dreams";
		font-size: 22.39px;
		opacity: 0.0;
		position: relative;
		top: 1px;
		letter-spacing: -0.11em;
	}
</style>
