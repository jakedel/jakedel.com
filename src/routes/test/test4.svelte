<div class="wrapper">
	<div class="gallery">
		<div class="row">
			<div class="item wide" />
			<div class="item square" />
			<div class="item square" />
		</div>

		<div class="row">
			<div class="item square" />
			<div class="item square" />
			<div class="item wide" />
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
		align-items: flex-start;
		height: 300px;
	}


	// WIDE
	.item {
		background-color: #ddd;
		display: flex;
		align-items: flex-start;
	}

	.item.square {
		aspect-ratio: 1 / 1;
		flex-shrink: 0;
	}

	.item.wide {
		flex-grow: 1;
	}
</style>
