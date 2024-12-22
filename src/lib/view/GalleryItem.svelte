<script lang="ts">
	export let img = ''
	export let text = ''
	export let year: string
	export let isNew = false

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
	<figure>
		<img class="img" src={img} alt="" />

		<figcaption>
			<p class="title">{text}</p>
			{#if year}
				<!-- <p class="year">&nbsp;• {year}</p> -->
				<p class="year">&nbsp;<span style:font-size="10.4px" style:position="relative" style:top="-6px">✦</span>&nbsp;{year}</p>
			{/if}
			{#if isNew}
				<div class="new"><p>new</p></div>
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
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.13);

		background-image: url('$lib/res/corner.svg');
		background-position: bottom right;
		background-size: 43px;
		background-repeat: no-repeat;

		display: flex;
		flex-direction: column;
	}

	figcaption {
		position: relative;
		display: flex;
		padding: 22px 40px 110px 20px;
		// justify-content: space-between;
	}

	.new {
		width: 78px;
		height: 78px;
		border: 1px solid #d8d8d8;
		border-radius: 999px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		right: 20px;
		bottom: 20px;

	}
	.new p {
		font-family: "Champagne & Limousines";
		letter-spacing: 0.2em;
		font-size: 23px;
		margin: 0;
		color: #bbb;
		margin-left: 5px;
		text-align: center;
	}




	// ASPECT RATIO
	.GalleryItem.square figure {
		flex-shrink: 0;
	}
	.GalleryItem.wide figure {
		flex-grow: 1;
	}
	.GalleryItem.expand .img {
		align-self: stretch;
	}
	.img {
		flex-grow: 1;
		align-self: center;
		margin: 20px;
		margin-bottom: 0;
	}





	// TITLES
	// p {
	// 	font-family: "Champagne & Limousines";
	// 	letter-spacing: -0.04em;
	// 	text-transform: uppercase;
	// 	font-size: 21px;
	// 	margin: 0;
	// }

	// p.year {
	// 	font-family: "Caviar Dreams";
	// 	font-size: 19px;
	// 	opacity: 0.5;
	// 	position: relative;
	// 	top: 1px;
	// 	letter-spacing: -0.075em;
	// }

	p.title, p.year {
		font-family: "Champagne & Limousines";
		letter-spacing: -0.065em;
		text-transform: uppercase;
		font-size: 32px;
		margin: 0;
		padding: 5px;
		margin: -5px;


		// background: linear-gradient(#aaa, #222);
	}

	p.title {
		background: linear-gradient(181deg, #7FE1DF 0%, #6ED3DF 25%, #74B6DB 50%, #928FC9 100%);
		background-clip: text;
		color: transparent;
	}

	p.year {
		font-family: "Caviar Dreams";
		font-size: 29.5px;
		opacity: 0.68;
		position: relative;
		top: 1px;
		letter-spacing: -0.11em;

		background: linear-gradient(#e5e5e5, #525252);
		background-clip: text;
		color: transparent;
	}
</style>
