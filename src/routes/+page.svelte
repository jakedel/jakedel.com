<script lang="ts">
  import { base } from '$app/paths'

	import icon_flower from "$lib/res/icon_flower.svg"
	// import icon_diamond from "$lib/res/icon_diamond.svg"
	import icon_diamond from "$lib/res/icon_diamond.png"
	import drop from "$lib/res/drop14.png"

	import preview_bitcafe from '$lib/res/preview_bitcafe.jpg'
	import preview_lastredux from '$lib/res/preview_lastredux.jpg'
	import preview_tc64 from '$lib/res/preview_tc64.jpg'
	import preview_konpu from '$lib/res/preview_konpu.jpg'
	import preview_soundsociety from '$lib/res/preview_soundsociety.jpg'
	import preview_ac from '$lib/res/preview_ac.jpg'
	import preview_audo from '$lib/res/preview_audo.jpg'
	import preview_3d from '$lib/res/preview_3d.jpg'
	import preview_hackathon from '$lib/res/preview_hackathon.jpg'

	import works_bitcafe from '$lib/res/works_bitcafe.png'
	import works_lastredux from '$lib/res/works_lastredux.png'
	import works_tc64 from '$lib/res/works_tc64.png'
	import works_konpu from '$lib/res/works_konpu.png'
	import works_soundsociety from '$lib/res/works_soundsociety.png'
	import works_ac from '$lib/res/works_ac.png'
	import works_audo from '$lib/res/works_audo.png'
	import works_3d from '$lib/res/works_3d.png'
	import works_hackathon from '$lib/res/works_hackathon.png'
	import folder_additionalworks from '$lib/res/folder_additionalworks.png'
	import folder_alllogos from '$lib/res/folder_alllogos.png'
	import folder_allicons from '$lib/res/folder_allicons.png'

	import TitleHeader from "$lib/view/TitleHeader.svelte"
	import Project from "../lib/view/Project.svelte"
</script>

<section class="works">
	<TitleHeader tangram icon={icon_flower} center>works.</TitleHeader>

	<div class="body">
		<div class="wrapper">
			<div class="heading"><span>✦</span><h2>UX Design • App Development</h2></div>
			<div class="grid">
				<Project
					preview={preview_bitcafe}
					logo={works_bitcafe}
					href="{base}/bitcafe"
					name="bitcafé"
					desc="hyper-expressive social media app for Gen Z."
					icon="💫"
				/>
				<Project
					preview={preview_lastredux}
					logo={works_lastredux}
					href="{base}/lastredux"
					name="LastRedux"
					desc="open-source, redesigned Last.fm app for Apple Music."
					icon="✨"
				/>
				<Project
					preview={preview_konpu}
					logo={works_konpu}
					href="{base}/konpu-studio"
					name="konpu-STUDIO"
					desc="custom-built sound synthesizer & music creation app."
					icon="🌸"
				/>
				<Project
					preview={preview_audo}
					logo={works_audo}
					href="{base}/audo"
					name="audo"
					desc="reimagining '90s “tracker” music apps for iPhone."
					icon="🎹"
				/>
			</div>

			<div class="heading"><span>✦</span><h2>Music • Brand • Visual Design</h2></div>
			<div class="grid">
				<Project
					preview={preview_tc64}
					logo={works_tc64}
					href="{base}/tc64"
					name="TC64"
					desc="my EDM music production & cover art design."
					icon="♪"
				/>
				<Project
					preview={preview_soundsociety}
					logo={works_soundsociety}
					href="{base}/ucsb-sound-society"
					name="UCSB Sound Society"
					desc="brand & design for student music club."
					icon="💿"
				/>
				<Project
					preview={preview_ac}
					logo={works_ac}
					href="{base}/ac-community"
					name="AC Community"
					desc="event branding for an online music collective."
					icon="❄️"
				/>
			</div>
		</div>

		<!-- <div class="drop2">
			<img src={icon_diamond} height={64} alt="" />
		</div> -->
	</div>
</section>

<!-- <section class="more">
	<TitleHeader pad icon={icon_diamond}>misc.</TitleHeader>
	<div class="body">
		<div class="wrapper">
			<div class="grid">
				<Project
					folder
					logo={folder_additionalworks}
					href="additional-works"
					name="Other Works."
				/>
	
				<Project
					folder
					logo={folder_alllogos}
					href="logos"
					name="Logo Designs."
				/>
	
				<Project
					folder
					logo={folder_allicons}
					href="icons"
					name="Icon Designs."
				/>
		</div>
	</div>
	
	<div class="drop2">
		<img src={drop} height={64} alt="" />
	</div>

	<a style:display="none" href="{base}/hello-nautilus">.</a>
</section> -->


<style lang="scss">
	section {
		position: relative;
		background-color: #FFF;
	}
	section:not(:last-child) {
		padding-bottom: 120px;
	}
	.wrapper {
		@include wrapper;
		@include contentStyles2;
	}
	.works {
		margin-bottom: -50px;
	}
	.grid {
		align-self: center;
		display: grid;
		grid-gap: 20px;
		justify-content: center;
		grid-template-columns: repeat(auto-fill, 398px);
		grid-template-columns: repeat(auto-fill, 413px);
		grid-auto-flow: row dense;
		width: 100%;
		margin: 4px 0 35px 0;
		margin: 4px 0 50px 0;
	}
	.grid :global(.Project:last-child:nth-child(2n - 1)) {
		grid-column-start: 1;
		grid-column-end: 3;
		margin-left: 25%;
		margin-right: 25%;
	}



	.drop2 {
		display: flex;
		top: auto;
		bottom: 17px;
		width: 100%;
		margin: 0 auto;
		position: absolute;
		align-items: flex-end;
		justify-content: center;
		transform-origin: top center;
		// transition: transform 0.475s cubic-bezier(0.25, 0.45, 0.46, 0.94), filter 1.375s ease;
		// animation: wavera 1.3s ease-in infinite;
		// transform: rotate(0deg);
		margin-bottom: 50px;
	}
</style>
