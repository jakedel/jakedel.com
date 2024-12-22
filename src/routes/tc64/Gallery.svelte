<script lang="ts">
	import tc_banner from '$lib/res/tc_banner_s.jpg'
	import tc_tsunami from '$lib/res/tc_tsunami_s.jpg'
	import tc_aoryu from '$lib/res/tc_aoryu_s.jpg'
	import tc_rainforest from '$lib/res/tc_rainforest_s.jpg'
	import tc_selection from '$lib/res/tc_selection_s.jpg'
	import tc_deep from '$lib/res/tc_deep_s.jpg'
	import tc_plastic from '$lib/res/tc_plastic_s.jpg'
	import GalleryItem from '$lib/view/GalleryItem.svelte'
</script>

<section class="Gallery">
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
					text="Sound Selection" 
					href="/tc64/sound-selection"
					img={tc_selection}
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
					href="/tc64/banner"
					img={tc_banner}
					year="2021"
					expand
				/>
			</div>
		</div>
	</div>
</section>




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
