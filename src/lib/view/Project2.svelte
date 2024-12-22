<script lang="ts">
	import icon_folder from "$lib/res/icon_folder_3.png"
	import { ripple } from "svelte-ripple-action";
	import Tag from "./Tag.svelte"

	export let preview: string|null = null
	export let logo: string|null = null
	export let href: string
	export let name: string
	export let desc: string|null = null
	export let icon: string|null = null
	export let tags: string[] = []
	export let count = 0

	export let folder = false
</script>

<a
	class="Project"
	class:folder
	use:ripple={{color: '#FF5BAD28'}}
	draggable="false"
	href="/"
>
	{#if preview}
		<div class="preview" style:background-image="url({preview})" style:--image="url({preview})">
			<img src={preview} alt='' />

			{#if tags.length > 0}
				<ul class="tags">
					{#each tags as tag}
						<li>{tag}</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/if}

	
	<div class="details-row">
		{#if folder}
			<div class="logo">
				<img src={logo} alt='' />	
			</div>
		{/if}

		<div class="column">
			<h2>{name}</h2>
			{#if desc}
				<div class="desc-row">
					<span class="icon" class:bold={icon === '♪'}>{icon}</span>
					<p class="desc">{desc}</p>
				</div>
			{/if}
		</div>

		{#if folder}
			<img src={icon_folder} alt="" height={52} />
		{/if}
	</div>

	{#if !folder}
		<div class="logo">
			<img src={logo} alt='' />	
		</div>
	{/if}


	<hr />
</a>




<style lang="scss">
	.Project {
		position: relative;
		display: flex;
		flex-direction: column;
		text-decoration: none;
		// box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.13);
		background-color: #FFF;
		box-shadow: 0px 10px 20px 0px rgba(160, 160, 160, 0.20);
		// border-radius: 3px;

		// cursor: default;
		user-select: none;
		-webkit-user-select: none;
		-webkit-user-drag: none;
	}

	.Project::before {
		@include fill-pseudo;
		transition: opacity 0.575s ease;
		opacity: 0;
		z-index: 3;
		pointer-events: none;
	}

	.Project::after {
		@include fill-pseudo;
		background-image: linear-gradient(to top, #FF5BAD5F, #FF5BAD11, #FF5BAD11), linear-gradient(to bottom right, #FFA0EF, #FFBF0000, #FFBF0000), linear-gradient(190deg, #FFF0D2FF, #FF0F0000, #FFBF0000), linear-gradient(to bottom left, #FFA50000, #FFBF0000, #FFBF0000);
		mix-blend-mode: hard-light;
		opacity: 0;
		z-index: 3;
		transition: opacity 0.575s ease;
		pointer-events: none;
	}

	.logo::after {
		@include fill-pseudo;
		background-image: linear-gradient(to top left, #FF5BAD5F, #FF5BAD15, #FF5BAD00), linear-gradient(to bottom right, #FFFFFFE5, #FFFFFF35, #FFF1);
		mix-blend-mode: normal;
		z-index: 2;
		opacity: 0;
		transition: opacity 0.575s ease;
		pointer-events: none;
	}

	.logo::after {
		border-radius: 999px;
		inset: 3px;
	}

	.Project h2, .Project p {
		transform: translateZ(0);
		transition: letter-spacing .475s ease;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
	}

	.Project:hover h2, .Project:hover p {
		transition: letter-spacing 1.2s step-end;
	}

	// // .Project:hover h2,
	// .Project:hover h2 {
	// 	letter-spacing: -0.05em;
	// 	transition: letter-spacing 0.375s ease;
	// }

	// // .Project:hover p,
	// .Project:hover p {
	// 	letter-spacing: -0.03em;
	// 	transition: letter-spacing 0.375s ease;
	// }

	.Project:hover h2 {
		// letter-spacing: -0.1em;
		transition: letter-spacing 0.375s ease;
	}

	.Project:hover p {
		// letter-spacing: -0.1em;
		transition: letter-spacing 0.375s ease;
	}

	.preview::before {
		@include fill-pseudo;
		transition: opacity 0.375s ease;
		opacity: 0;
		z-index: 2;
		filter: blur(2.5px);
		background-image: var(--image);
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: top left;
		pointer-events: none;
		transform: translateZ(0);
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
		transition: opacity 0.575s ease;
	}

	.preview::after {
		@include fill-pseudo;
		background: linear-gradient(#fffb, #fff3, #0000);
		mix-blend-mode: overlay;
		z-index: 3;
		// transition: opacity .1s ease;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.575s ease;
	}

	.Project:hover::after,
	.Project:hover .preview::before,
	.Project:hover .preview::after,
	.Project:hover .logo::after {
		transition: opacity 0.575s ease;
	}


	.Project:hover::before,
	.Project:hover .preview::before {
		opacity: 0.3;
		transition: opacity 0.775s ease;
	}

	.Project:hover::after {
		opacity: 0.75;
		transition: opacity 0.375s ease;
	}

	.Project:hover .tags {
		opacity: 0.95;
	}

	.Project:hover .preview::after {
		opacity: 1;
		transition: opacity 0.375s ease;
	}

	.Project:hover .logo::after {
		opacity: 0.68;
		transition: opacity 0.375s ease;
	}

	.Project:hover::after {
		opacity: 0.78;
		// opacity: 0.94;
		transition: opacity 0.375s ease;
	}

	hr {
		height: 3px;
		margin: 0;
		border: none;
		background-color: #FF5BAD;
	}

	.Project.folder hr {
		// background-color: #25C5DA;
		background-color: #ddd;
		// background: linear-gradient(to right, #aa73fb, #31becb);
	}

	.preview {
		position: relative;
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: top left;
	}

	.preview > img {
		opacity: 0;
		display: block;
		width: 100%;
		pointer-events: none;
	}

	.tags {
		position: absolute;
		bottom: 5px;
		left: 8px;
		height: 26px;

		display: flex;
		align-items: center;
		padding: 8px 12px;
		margin: 0;

		background-color: rgb(250, 250, 250, 0.95);
		border-radius: 999px;
		@include hgap(19px);
		z-index: 2;
		transition: opacity 0.375s ease;
	}

	.tags li {
		color: #777;
	}

	.tags li, .tags li::marker {
		font-family: "Open Sans";
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: -0.6px;
	}

	.tags li:first-child {
		list-style: none;
	}

	.tags li:not(:first-child)::marker {
		width: 2px;
		height: 2px;
		content: '•   ';
		color: rgba(119, 119, 119, 0.5);
		border-radius: 999px;
		font-size: 11.5px;
	}

	.logo {
		position: relative;
	}

	a > .logo {
		right: 11px;
		bottom: 75px;
		z-index: 2;
		isolation: isolate;
	}

	a > .logo, a > .logo img {
		position: absolute;
		width: 83px;
		height: 83px;
	}

	.logo img {
		background-color: #EEE;
		border: 4px solid #FFF;
		border-radius: 999px;
		box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.17);
		flex-shrink: 0;
		pointer-events: none;
	}

	.Project.folder .logo, .Project.folder .logo img {
		height: 80px;
		object-position: left;
	}

	.Project.folder .logo img {
		border: none;
		box-shadow: none;
		border-radius: 0;
		// clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
	}

	.Project.folder .logo::after {
		border-radius: 0;
		inset: 0;
	}

	.details-row {
		background-color: #FFF;
		position: relative;
		display: flex;
		align-items: flex-start;
		padding: 16px 20px 0 20px;
		height: 114px;
		@include hgap(9px);

		background-image: url('$lib/res/corner.svg');
		background-position: bottom right;
		background-size: 43px;
		background-repeat: no-repeat;
		z-index: 0;
	}

	.Project.folder .details-row {
		padding: 0 0px;
		height: auto;
		align-items: center;
		padding-right: 5px;
		@include hgap(0px);
	}

	.column {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-width: 0;
		@include vgap(6px);
	}

	.Project.folder .column {
		// flex: initial;
	}

	.desc-row {
		display: flex;
		align-items: center;
		@include hgap(3px);
	}

	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 16px;
		font-size: 14px;
		color: #FF5BAD;
		font-family: 'Osaka', 'MS Gothic', sans-serif;
		flex-shrink: 0;
		position: relative;
		top: 1px;
	}

	.icon.bold {
		font-weight: bold;
	}

	h2 {
		margin: 0;
		color: #ff5bad;

		font-family: Lato;
		font-size: 32px;
		font-style: normal;
		font-weight: 300;
		line-height: normal;
		letter-spacing: -2.56px;

		white-space: nowrap;
		text-overflow: ellipsis;
		min-width: 0;
		// overflow: hidden;
	}

	.Project.folder h2 {
		@include scent;
		// color: #25C5DA;
		font-family: "Champagne & Limousines";
		font-size: 34px;
		font-style: normal;
		// font-weight: 700;
		font-weight: 300;
		line-height: 100%;
		letter-spacing: -0.065em;
		text-transform: uppercase;
		margin-left: 7px;
		padding-right: 4px;
	}

	p {
		margin: 0;
		color: #999;
		// font-size: 14.5px;
		// letter-spacing: -0.01em;

		font-family: "Open Sans";
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 130%;
		letter-spacing: -1.2px;



		flex: 1;

		white-space: nowrap;
		text-overflow: ellipsis;
		min-width: 0;
		// overflow: hidden;
	}
</style>
