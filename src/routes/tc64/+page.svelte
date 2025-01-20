<script lang="ts">
  import { base } from '$app/paths'

	import works_tc64 from '$lib/res/works_tc64_hq.png'
	import tc_banner from '$lib/res/tc_banner_s.jpg'
	import tc_tsunami from '$lib/res/tc_tsunami_s.jpg'
	import tc_aoryu from '$lib/res/tc_aoryu_s.jpg'
	import tc_rainforest from '$lib/res/tc_rainforest_s.jpg'
	import tc_selection from '$lib/res/tc_selection_s.jpg'
	import tc_deep from '$lib/res/tc_deep_s.jpg'
	import tc_plastic from '$lib/res/tc_plastic_s.jpg'
	import Title from '$lib/view/Title.svelte'
	import Tag from '$lib/view/Tag.svelte'
	import NavButton from '$lib/view/NavButton.svelte'
	import icon_soundcloud from '$lib/res/ic_soundcloud_colors.png'
	import LinkButton from '$lib/view/LinkButton.svelte'
	import Date from '$lib/view/Date.svelte'
	import GalleryItem from '$lib/view/GalleryItem.svelte'
	import Gallery from './Gallery.svelte'
	import Back from '$lib/view/Back.svelte'
	import ProjectTemplate from '$lib/view/template/ProjectTemplate.svelte'
</script>

<ProjectTemplate
	logo={works_tc64}
	
	name="TC64"
	desc="my EDM music production & cover art design."
	tools="Logic Pro X, Ableton Live, Auxy Studio&nbsp;&nbsp;•&nbsp;&nbsp;Figma, Hype 4"
	icon="♪"

	tags={['music', 'brand & visual']}
	linkText="soundcloud"
	linkHref="https://soundcloud.com/TC64X"
	date="2016"
	altFont
>
	<span slot="dateExtra" class="stylish"> - present</span>
	<Gallery />
</ProjectTemplate>




