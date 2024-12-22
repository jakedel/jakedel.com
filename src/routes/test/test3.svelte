<div class="wrapper">
	<div class="gallery">
		<div class="row">
			<div class="item wide">
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
			<div class="item wide">
				<div class="img" />
				<p>title</p>
			</div>
		</div>

		<!-- <div class="row">
			<div class="item wide">
				<div class="img" />
				<p>title</p>
			</div>
			<div class="item wide">
				<div class="img" />
				<p>title</p>
			</div>
			<div class="item wide">
				<div class="img" />
				<p>title</p>
			</div>
		</div> -->
	</div>
</div>




<style lang="scss">
	.wrapper {
		background-color: #aaa;
		margin: 0 auto;

		width: 100%;
		max-width: 1280px;
	}

	.gallery {
		background-color: #bbb;
		display: flex;
		flex-direction: column;
		gap: 8px;

		width: 100%;
	}

	.row {
		background-color: #ccc;
		display: flex;
		gap: 8px;
		max-height: 300px;
	}


	// WIDE
	.item {
		background-color: #ddd;
		display: flex;
		flex-direction: column;
		gap: 8px;
		// padding: 20px;
	}

	.item .img {
		flex-grow: 1;
		background-color: #eee;
	}

	p {
		align-self: flex-start;
		margin: 0;
		// font-size: 60px;
		display: none;
	}

	.item.square {
		flex-shrink: 1;
		flex-grow: 1;
	}

	.item.square .img {
		aspect-ratio: 1 / 1;
	}

	.item.wide {
		flex-shrink: 1;
		flex-grow: 1;
	}
</style>
