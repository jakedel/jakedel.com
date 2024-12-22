<script lang="ts">
	export let img = ''
	export let text = ''
	export let year: string

	export let href = ''
	export let square = false
</script>

<a
	class="GalleryItem"
	{href}
	class:square
	class:wide={!square}
>
	<figure>
		<img class="img" src={img} alt="" />

		<figcaption>
			<p>{text}</p>
			{#if year}
				<p class="year">{year}</p>
			{/if}
		</figcaption>
	</figure>
</a>

<style lang="scss">
	.GalleryItem {
		display: contents;
		color: #2f2f2f;
	}

	figure {
		margin: 0;
		background-color: white;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);

		display: flex;
		flex-direction: column;
	}

	figcaption {
		display: flex;
		padding: 15px 20px 15px 20px;
		justify-content: space-between;
	}




	// ASPECT RATIO
	.GalleryItem.square figure {
		flex-shrink: 0;
	}
	.GalleryItem.wide figure {
		flex-grow: 1;
	}
	.img {
		flex-grow: 1;
		align-self: center;
		opacity: 0.1;
		margin: 5px;
		margin-bottom: 0;
	}





	// TITLES
	p {
		font-family: "Champagne & Limousines";
		letter-spacing: -0.04em;
		text-transform: uppercase;
		font-size: 21px;
		margin: 0;
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
