<script lang="ts">
  import { base } from '$app/paths'

	import drop from "$lib/res/drop14.png"
	import icon_github from '$lib/res/ic_github_colors.png'
	import icon_soundcloud from '$lib/res/ic_soundcloud_colors.png'
	import icon_linkedin from '$lib/res/ic_linkedin_colors.png'
	import NavButton from "./NavButton.svelte"
</script>

<footer>
	<div class="wrapper">
		<p>© 2025</p>

		<div class="drop2">
			<img src={drop} height={64} alt="" />
		</div>

		<ul>
			<NavButton
				text="github"
				href="https://github.com/jakedel/"
				icon={icon_github}
				color
			/>
			<NavButton
				text="soundcloud"
				href="https://soundcloud.com/TC64X/"
				icon={icon_soundcloud}
				color
			/>
			<NavButton
				text="linkedin"
				href="https://www.linkedin.com/in/jake-delgado/"
				icon={icon_linkedin}
				color
			/>
		</ul>
	</div>
</footer>
<style lang="scss">
	footer {
		position: relative;
		background-image: linear-gradient(#FFFf, #FFFf), url('$lib/res/bg_nav_fluid_scent.jpg');
		background-size: 100% 100%;
	}

	.wrapper {
		@include wrapper;
		height: 138px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	ul {
		display: flex;
		align-items: center;
		@include hgap(50px);

		list-style: none;
		margin: 0;
		padding: 0;
	}
	li {
		padding: 0;
	}
	p {
		font-family: 'Open Sans Condensed';
		font-weight: 300;
		letter-spacing: 2.5px; //2px
		color: #aaa;
		margin: 0;
	}
	.drop2 {
		display: flex;
		top: 0;
		bottom: 1px;
		opacity: 0.78;
		// bottom: 18px;
		left: 0;
		right: 0;
		position: absolute;
		align-items: center;
		justify-content: center;
		transform-origin: top center;
		transition: transform 0.475s cubic-bezier(0.25, 0.45, 0.46, 0.94), filter 1.375s ease;
	}
</style>
