<script lang="ts">
	import icon_tag from '$lib/res/icon_tag.svg'
</script>

<div class="Tag">
	<img src={icon_tag} alt='' />
	<p><slot /></p>
</div>

<style lang="scss">
	.Tag {
		display: flex;
		align-items: center;
		height: 27px;
		padding: 6px 10px;
		box-shadow: 0 0 0 1px #DDD inset;
		border-radius: 999px;
		@include hgap(10px);
	}

	p {
		font-family: 'Open Sans';
		margin: 0;
		font-size: 10.4px;
		font-weight: 400;
		line-height: normal;
		// letter-spacing: 0.135em;
		color: #676767;
		position: relative;
		letter-spacing: 1.133px;
		white-space: nowrap;
	}
</style>
