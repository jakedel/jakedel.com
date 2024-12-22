<script lang="ts">
	import icon_tag from '$lib/res/icon_tag.png'
</script>

<div class="Tag">
	<img src={icon_tag} alt='' height={15} />
	<p><slot /></p>
</div>

<style lang="scss">
	.Tag {
		position: relative;
		display: flex;
		align-items: center;
		height: 29px;
		padding: 6px 10px;
		//box-shadow: 0 0 0 1px #DDD inset;
		border-radius: 999px;
		@include hgap(10px);
	}

	.Tag::before {
		@include fill-pseudo;
		padding: 1px;
		mask: linear-gradient(#000 0 0) exclude, linear-gradient(#000 0 0) content-box;

		background: linear-gradient(160deg, #AAEFDE 0%, #7FE1DF 25%, #6ED3DF 50%, #74B6DB 75%, #928FC9 100%);
		opacity: 0.68;
		border-radius: 999px;
		pointer-events: none;
	}


	img {
		opacity: 0.75;
	}

	p {
		font-family: 'Open Sans';
		margin: 0;
		font-size: 12px;
		font-weight: 400;
		line-height: normal;
		// letter-spacing: 0.135em;
		color: #676767;
		color: #2f2e2e;
		color: #4d4d4d;
		position: relative;
		letter-spacing: 1.133px;
		white-space: nowrap;

		font-family: "Lato";
		font-size: 12px;
		font-style: normal;
		font-weight: 300;
		line-height: normal;
		letter-spacing: 2.5px;
	}
</style>
