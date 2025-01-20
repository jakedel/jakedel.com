<script lang="ts">
	import aqueous_dreamer from "$lib/res/aqueous_dreamer.png"
	import lucid_echo from "$lib/res/lucid_echo.png"
	import icon_designer from "$lib/res/icon_designer.svg"
	import icon_developer from "$lib/res/icon_developer.svg"
	import ampersand_flourish from '$lib/res/ampersand_flourish_3.svg'
	import icon_producer from "$lib/res/icon_producer.svg"
	import sensory_flower from '$lib/res/sensory_flower.svg'
	import icon_location from '$lib/res/icon_location.svg'
	import text_bay_area from '$lib/res/text_bay_area.svg'
	import icon_mail from '$lib/res/icon_mail.svg'
	import Ribbon from "./Ribbon.svelte"
</script>

<section class="Hero">
	<div class="cover" />

	<div class="wrapper">
		<img class="fluid_spirits aqueous_dreamer" src={aqueous_dreamer} width={343} height={310} alt="" draggable="false" />
		<img class="fluid_spirits lucid_echo" src={lucid_echo} width={184} height={179} alt="" draggable="false" />


		<h2 class="tagline">
			<span class="line one">
				<span class="segment">
					<span>Designer</span>
					<img src={icon_designer} alt="" />
				</span>

				<span class="segment">
					<span>Developer</span>
					<img src={icon_developer} alt="" />
				</span>
			</span>

			<span class="line two">
				<span class="segment">
					<img class="flowering_blooms" src={ampersand_flourish} alt="&" />
				</span>

				<span class="segment">
					<span>Producer</span>
					<img src={icon_producer} alt="" />
				</span>

				<span class="personal_info">
					<span class="synaesthesic_effusing_scent">
						<img src={sensory_flower} alt="from" />
					</span>

					<span class="aoi_splash">
						<span>
							<img src={icon_location} alt="" /><img src={text_bay_area} alt="Bay Area, CA." />
						</span>
					</span>

					<span class="fresh_air">
						<span>
							<span>
								<Ribbon icon={icon_mail} href="mailto:thejakedel@gmail.com">thejakedel@gmail.com</Ribbon>
							</span>
						</span>
					</span>
				</span>
			</span>
		</h2>


	</div>
</section>

<style lang="scss">
	.Hero::before {
		@include fill-pseudo;
		top: -17px;
		bottom: auto;
		height: 18px;
		background-image: url('$lib/res/deco_wave.svg');
		background-size: 100% 100%;
	}
	.cover {
		@include fill;
		top: auto;
		height: 401px;
		transform-origin: top left;
		background-color: white;
		animation: show 0.5s linear, collapse 0.6s cubic-bezier(0.25, 0.45, 0.46, 0.94) 0.5s;
		opacity: 0;
	}
	.Hero {
		position: relative;
		background-image: url('$lib/res/tangram_above.png'), url('$lib/res/bg_japanese_pattern.png');
		background-position: bottom right;
		background-repeat: no-repeat;
		background-size: 40px 40px, 536px 401px;
		animation: fadeIn 0.8s cubic-bezier(0.25, 0.45, 0.46, 0.94) 0.5s, stay 1s infinite 1.3s;
	}
	.wrapper {
		@include wrapper;
		position: relative;
	}

	h2 {
		font-family: "Poiret One";
		font-weight: 300;
		line-height: 100%;
		font-size: 114.94px;
		letter-spacing: -10.345px;
		white-space: nowrap;
		word-break: keep-all;

		display: flex;
		flex-direction: column;
		text-transform: uppercase;
		margin: 0;
		padding: 168px 0 218px 0;

		// filter: drop-shadow(0 8px 16px #fff5) drop-shadow(0 2px 6px #fff);
	}




	.line {
		display: flex;
		align-items: flex-start;
		opacity: 0;
	}
	.line.one {
		@include hgap(23px);
		margin-bottom: 5px;
		animation: slideBackUp 0.6s cubic-bezier(0.25, 0.45, 0.46, 0.94) 2.1s, stay 1s infinite 2.7s;
	}
	.line.two {
		animation: slideBackUp 0.6s cubic-bezier(0.25, 0.45, 0.46, 0.94) 2.25s, stay 1s infinite 2.85s;
	}
	.segment {
		height: 116px;
		min-height: 116px;
		max-height: 116px;
		display: flex;
		align-items: center;

		> span {
			@include scent;
			padding-right: 7px;
		}
	}




	.personal_info {
		display: flex;
		flex-direction: column;
	}

	.personal_info > span {
		display: flex;
		position: relative;
		width: 549px;
	}

	.synaesthesic_effusing_scent {
		height: 29px;

		img {
			position: absolute;
			top: -10px;
			left: 3px;

			transform: rotate(-7.05deg);
			height: 40px;
		}
	}

	.aoi_splash {
		height: 59px;

		> span {
			position: absolute;
			left: 49px;
			bottom: 0;
			display: flex;
			align-items: center;
			transform: rotate(-7.97deg);
			@include hgap(-2px);

			img {
				height: 82px;
			}
		}
	}

	.fresh_air {
		height: 40px;

		> span {
			position: absolute;
			left: 316px;
			transform: rotate(1.21deg);

			> span {
				display: flex;
				opacity: 0;
				animation: fadeRotateBubbleIn 0.5s cubic-bezier(0.25, 0.45, 0.46, 0.94) 2.5s, stay 1s infinite 3.0s;
				transform-origin: -10% 20px;
			}
		}
	}




	.fluid_spirits {
		position: absolute;
		opacity: 0;
		animation: leap 1s cubic-bezier(0.175, 0.885, 0.32, 1.2125) 2.7s, bounce 3s infinite ease-in 3.6s;
	}

	.fluid_spirits.aqueous_dreamer {
		top: 5px;
		right: 0;
	}

	.fluid_spirits.lucid_echo {
		top: 18px;
		right: 318px;
		animation: leap 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.2125) 3.1s, bounce 3s infinite ease-in 4.6s;
	}

	@keyframes leap {
		0% {
			transform: translateY(50px) rotate(5deg);
			opacity: 0;
		}
		100% {
			transform: translateY(0px);
			opacity: 0.68;
		}
	}

	@keyframes bounce {
		0% {
			transform: translateY(0);
			opacity: 0.68;
		}
		50% {
			transform: translateY(-5px);
			opacity: 0.68;
		}
		100% {
			transform: translateY(0);
			opacity: 0.68;
		}
	}
</style>
