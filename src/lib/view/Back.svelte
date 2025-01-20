<script lang="ts">
  import { base } from '$app/paths'

	import ic_back_color from '$lib/res/ic_back_color.png'
	import NavButton from "./NavButton.svelte"
	export let text = "back"
	export let href: string
</script>

<section class="back">
	<NavButton color {text} {href} icon={ic_back_color} sameTab />
</section>

<style lang="scss">
	section.back {
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 80px;
		// padding-bottom: 100px;
	}
</style>
