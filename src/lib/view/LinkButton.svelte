<script lang="ts">
	import ic_link from "$lib/res/ic_link.svg"
	import ic_link_color from "$lib/res/ic_link_color.svg"
	import { ripple } from 'svelte-ripple-action'
	export let text = ''
	export let href = ''
	export let icon: string|null = null
	export let color = false;
</script>

<a class="LinkButton" {href} target="_blank" class:color>
	<div class="box">
		<img class="circledIcon" src={icon} alt="" draggable="false" height={color ? 26 : undefined} />
		<div class="pulsate" use:ripple={{color:"#C1C3F9"}} />
	</div>

	<img class="linkIcon" src={color ? ic_link_color : ic_link} height={18} alt="Link" />
	<p>{text}</p>
</a>


<style lang="scss">
	.LinkButton {
		text-decoration: none;
		display: flex;
		align-items: center;
		height: 47px;
	}

	.box {
		position: relative;
		width: 47px;
		height: 47px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 10px;
	}

	.box::before {
		@include fill-pseudo;
		padding: 1px;
		border-radius: 999px;
		pointer-events: none;

		box-shadow: 0 0 0 1px rgba(255,255,255,1.0);
		opacity: 0.5;
	}

	.LinkButton.color .box::before {
		mask: linear-gradient(#000 0 0) exclude, linear-gradient(#000 0 0) content-box;

		background: linear-gradient(160deg, #AAEFDE 0%, #7FE1DF 25%, #6ED3DF 50%, #74B6DB 75%, #928FC9 100%);
		opacity: 0.68;
	}

	p {
		font-weight: 400;
		letter-spacing: -0.08em;
		color: #fff;
		font-size: 17px;
		margin-left: 1px;
	}

	.LinkButton.color p {
		font-weight: 300;
		color: #4d4d4d;
		opacity: 0.75;
	}

	.linkIcon {
		opacity: 0.6;
	}
</style>
