<script lang="ts">
	import { fly } from 'svelte/transition';
	import SingleSparkle from './SingleSparkle.svelte';

	const sparklesArray = Array(10).fill(0);
</script>

<div class="sparkle-wrapper">
	{#each sparklesArray as _}
		<span in:fly={{ y: 40 }} class="sparkle"
			><SingleSparkle
				offset={{ left: Math.random() * 200, top: Math.random() * 200 }}
				size={String(Math.random() * 20) + 'px'}
			/></span
		>
	{/each}

	<span class="slot-wrapper">
		<slot />
	</span>
</div>

<style lang="scss">
	.sparkle-wrapper {
		position: relative;
		display: inline-block;

		.slot-wrapper {
			position: relative;
			z-index: 1;
		}
	}

	@function randomNum($min, $max) {
		$rand: random();
		$randomNum: $min + floor($rand * (($max - $min) + 1));
		@return $randomNum;
	}

	.sparkle-wrapper {
		position: relative;
		display: inline-block;

		.slot-wrapper {
			position: relative;
			z-index: 1;
		}

		.sparkle {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		@for $i from 1 through 10 {
			.sparkle:nth-child(#{$i}) {
				position: absolute;
				width: 10px;
				height: 10px;
				border-radius: 50%;
				background-color: var(--color--yellow);
				top: randomNum(0, 100) + '%';
				left: randomNum(0, 100) + '%';
				opacity: 0;
				animation: sparkleAnimation 1.5s infinite;
				animation-delay: randomNum(0, 5) + 's';
			}
		}

		@keyframes sparkleAnimation {
			0%,
			100% {
				opacity: 0;
				transform: scale(0);
			}
			50% {
				opacity: 1;
				transform: scale(1);
			}
		}
	}
</style>
