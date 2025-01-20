<script lang="ts">
  import { base } from '$app/paths'

	import tc_tsunami from '$lib/res/tc_tsunami.png'
	import it_td from "$lib/res/it_td.png"
	import SongTemplate from '$lib/view/template/SongTemplate.svelte'
</script>

<SongTemplate
	title="TSUNAMI DAYBREAK"
	date="2022.08"
	img={tc_tsunami}

	soundcloud="https://soundcloud.com/tc64x/sets/aoryu-sea-bridge"
	spotify="https://open.spotify.com/track/1X070KiB5NRx3iloHh9VyC?si=8768b26070074d5e"
	appleMusic="https://music.apple.com/us/album/tsunami-daybreak/1649139550?i=1649139551"
>
	<div>
		<h2>Logo design</h2>
		<p>Jake Delgado</p>
	</div>

	<div>
		<h2>Music production</h2>
		<p>Jake Delgado (TC64), sevvy</p>
	</div>

	<div>
		<h2>Tools</h2>
		<p>Ableton Live, Figma (artwork)</p>
	</div>

	<iframe title="SoundCloud player" slot="embed" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1327955725&color=%2301bbd4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

	<svelte:fragment slot="gallery">
		<!-- svelte-ignore a11y-missing-attribute -->
		<img src={it_td} />
	</svelte:fragment>
</SongTemplate>
