<script lang="ts">
	import tc_aoryu from '$lib/res/tc_aoryu.png'
	// import ic_aoryu from '$lib/res/ic_aoryu.svg'
	import it1 from "$lib/res/it_ao_1.png"
	import it2 from "$lib/res/it_ao_2.png"
	import it3 from "$lib/res/it_ao_3.png"
	import it4 from "$lib/res/it_ao_4.png"
	import it5 from "$lib/res/it_ao_5.png"
	import it6 from "$lib/res/it_ao_6.png"
	import it7 from "$lib/res/it_ao_7.png"
	import it8 from "$lib/res/it_ao_8.png"
	import it9 from "$lib/res/it_ao_9.png"
	import SongTemplate from '$lib/view/template/SongTemplate.svelte'
</script>

<SongTemplate
	title="AORYU SEA BRIDGE"
	date="2024.08"
	img={tc_aoryu}

	soundcloud="https://soundcloud.com/tc64x/sets/tsunami-daybreak"
	spotify="https://open.spotify.com/track/7qwy2LEBgmFWO0WcWsV1iQ?si=bad641c5950b4b9a"
	appleMusic="https://music.apple.com/us/album/aoryu-sea-bridge/1781616135?i=1781616137"

	galleryImg={[
		[it1,it2,it3],
		[it4,it5,it6],
		[it7,it8,it9]
	]}
>
	<div>
		<h2>Cover art + logo design</h2>
		<p>Jake Delgado</p>
	</div>

	<div>
		<h2>Music production</h2>
		<p>Jake Delgado (TC64), maji* - produced in 1 week!</p>
	</div>

	<div>
		<h2>Tools</h2>
		<p>Auxy Studio, Figma (artwork)</p>
	</div>

	<iframe slot="embed" title="SoundCloud" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1960400171&color=%2301bbd4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
</SongTemplate>
