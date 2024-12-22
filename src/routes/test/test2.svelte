<div class="wrapper">
	<div class="gallery">
		<div class="row">
			<div class="item">
				<div class="img" />
				<p>title</p>
			</div>
			<div class="item square">
				<div class="img" />
				<p>title</p>
			</div>
			<div class="item square">
				<div class="img" />
				<p>title</p>
			</div>
		</div>

		<div class="row">
			<div class="item square">
				<div class="img" />
				<p>title</p>
			</div>
			<div class="item square">
				<div class="img" />
				<p>title</p>
			</div>
			<div class="item">
				<div class="img" />
				<p>title</p>
			</div>
		</div>
	</div>
</div>




<style lang="scss">
	.wrapper {
		background-color: #aaa;
		margin: 0 auto;

		width: 1280px;
		height: 1024px;
	}

	.gallery {
		background-color: #bbb;
		display: flex;
		flex-direction: column;
		gap: 8px;

		width: 100%;
		height: 100%;
	}

	.row {
		background-color: #ccc;
		display: flex;
		flex-grow: 1;
		gap: 8px;

		width: 100%;
	}


	// WIDE
	.item {
		background-color: #ddd;
		display: flex;
		flex-direction: column;
		gap: 8px;
		flex-grow: 1;
		height: max-content;
	}

	.item .img {
		align-self: center;
		background-color: #eee;
		max-width: 100%;

		flex-grow: 1;
		aspect-ratio: 16 / 9;
	}

	p {
		margin: 0;
	}


	// SQUARE
	.item.square {
		flex-grow: initial;
		aspect-ratio: 1 / 1;
	}

	.item.square .img {
		aspect-ratio: 1 / 1;
	}
</style>
