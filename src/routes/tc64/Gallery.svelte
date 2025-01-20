<script lang="ts">
  import { base } from '$app/paths'

	import tc_banner from '$lib/res/tc_banner_s.jpg'
	import tc_tsunami from '$lib/res/tc_tsunami_s.jpg'
	import tc_aoryu from '$lib/res/tc_aoryu_s.jpg'
	import tc_rainforest from '$lib/res/tc_rainforest_s.jpg'
	import tc_soso from '$lib/res/tc_soso_s.jpg'
	import tc_deep from '$lib/res/tc_deep_s.jpg'
	import tc_plastic from '$lib/res/tc_plastic_s.jpg'
	import tc_uprising from '$lib/res/tc_uprising_s.jpg'
	import tc_prophecy from '$lib/res/tc_prophecy_s.jpg'
	import GalleryItem from '$lib/view/GalleryItem.svelte'
</script>

<div class="Gallery">
	<div class="wrapper">
		<div class="group">
			<div class="row">
				<GalleryItem
					text="AORYU SEA BRIDGE"
					href="/tc64/aoryu-sea-bridge"
					img={tc_aoryu}
					year="2024"
					isNew
				/>	
				<GalleryItem
					text="TSUNAMI DAYBREAK"
					href="/tc64/tsunami-daybreak"
					img={tc_tsunami}
					year="2022"
				/>	
				<GalleryItem
					text="RAINFOREST ROTATION"
					href="/tc64/rainforest-rotation"
					img={tc_rainforest}
					square
					year="2022"
				/>
			</div>

			<div class="row">
				<GalleryItem
					text="@Sound Society Set" 
					href="/tc64/sound-society-set"
					img={tc_soso}
					square
					year="2022"
				/>
				<GalleryItem
					text="Deep Blue"
					href="/tc64/deep-blue"
					img={tc_deep}
					square
					year="2022"
				/>
				<GalleryItem
					text="Plastic Zest + &quot;Desktop Worlds&quot;"
					href="/tc64/desktop-worlds"
					img={tc_plastic}
					year="2023"
				/>
			</div>
		</div>
		<div class="group">
			<div class="row">
				<GalleryItem
					text="Banner Illustration"
					img={tc_banner}
					year="2021"
					expand
				/>
				<!-- href="/tc64/banner" -->
			</div>
		</div>
	</div>
	<div class="group">
		<div class="row">
			<GalleryItem
				text="The Uprising"
				href="/tc64/the-uprising"
				img={tc_uprising}
				year="2020"
			/>	
			<GalleryItem
				text="PROPHECY"
				href="/tc64/prophecy"
				img={tc_prophecy}
				year="2020"
			/>
		</div>
	</div>
</div>




<style lang="scss">
	.Gallery {
		// background-color: #fafafa;
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
