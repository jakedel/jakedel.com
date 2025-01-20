<script lang="ts">
  import { base } from '$app/paths'

	export let text = ''
	export let img = ''
	export let href = ''
	export let square = false
	export let year: string
</script>

<a class="GalleryItem" class:square {href}>
	<figure>
		<!-- <img class="img" src={img} alt="" /> -->
		<div class="img" />
		<!-- <figcaption>
			<p>{text}</p>
			{#if year}
				<p class="year">{year}</p>
			{/if}
		</figcaption> -->
	</figure>
</a>

<style lang="scss">
	.GalleryItem {
		display: contents;
		color: #2f2f2f;
	}
	figure {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 10px 10px 20px 10px;
		margin: 0;
		background-color: white;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.37);

		flex-grow: 1;
	}
	.GalleryItem.square figure {
		flex-grow: initial;
		flex-shrink: 0;
	}
	figcaption {
		display: flex;
		justify-content: space-between;
	}
	
	p {
		font-family: "Champagne & Limousines";
		letter-spacing: -0.04em;
		text-transform: uppercase;
		font-size: 21px;
		margin: 0;
	}
	.img {
		flex-grow: 1;
		align-self: center;
		aspect-ratio: 16 / 9;
		background-color: #f5f5f5;
	}
	// div.img {
	// 	align-self: stretch;
	// }
	.GalleryItem.square figure .img {
		aspect-ratio: 1 / 1;
	}
	p.year {
		font-family: "Caviar Dreams";
		font-size: 19px;
		opacity: 0.5;
		position: relative;
		top: 1px;
		letter-spacing: -0.075em;
	}
</style>
