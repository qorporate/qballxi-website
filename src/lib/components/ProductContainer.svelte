<script lang="ts">
	interface Props {
		imageSrc: string;
		title: string;
		description: string;
		href: string;
	}

	const { imageSrc, title, description, href }: Props = $props();
</script>

<div class="h-[500px] cursor-pointer rounded-4xl border-1 border-gray-300 p-2">
	<div
		class="relative h-full w-full rounded-3xl border-1 border-gray-300"
		style="background-image: url({imageSrc}); background-size: cover; background-position: 50%;"
	>
		<div class="absolute bottom-0 h-[35%] w-full rounded-3xl bg-white p-6 hover:h-full hover:bg-blue-400">
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	</div>
</div>
