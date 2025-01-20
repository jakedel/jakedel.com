<script lang="ts">
  import { base } from '$app/paths'

	import soso_logo from '$lib/res/soso_logo.jpg'
	import soso_openmic from '$lib/res/soso_openmic.jpg'
	import soso_scs from '$lib/res/soso_scs_2.jpg'
	import soso_news from '$lib/res/soso_news.jpg'
	import GalleryItem from '$lib/view/GalleryItem.svelte'
</script>

<div class="Gallery">
	<div class="wrapper">
		<div class="group">
			<div class="row">
				<GalleryItem
					text="Logo Design"
					href="/ucsb-sound-society/logo"
					img={soso_logo}
				/>
				<GalleryItem
					text="Open Mic Poster"
					href="/ucsb-sound-society/open-mic"
					img={soso_openmic}
				/>
			</div>

			<div class="row">
				<GalleryItem
					text="Showcase Show Flyer"
					href="/ucsb-sound-society/showcase-show"
					img={soso_scs}
				/>
				<GalleryItem
					text="Newsletter Design"
					href="/ucsb-sound-society/newsletter"
					img={soso_news}
				/>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.Gallery {
		padding: 60px 0 0 0;
	}

	.wrapper {
		@include wrapper;
		padding: 0 0;
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.group {
		display: flex;
		flex-direction: column;
		gap: 5px;

		width: 100%;
	}

	.row {
		display: flex;
		gap: 5px;
		height: fit-content;
	}
</style>
