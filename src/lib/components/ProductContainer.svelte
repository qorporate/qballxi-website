<script lang="ts">
	interface Props {
		imageSrc: string;
		title: string;
		description: string;
		href: string;
	}

	const { imageSrc, title, description, href }: Props = $props();
</script>

<div class="min-h-[500px] cursor-pointer rounded-4xl border-1 border-gray-300 p-2">
	<div
		class="h-full w-full rounded-3xl border-1 border-gray-300"
		style="background-image: url({imageSrc}); background-size: cover; background-position: 50%;"
	>
		<div class="flex h-[35%] w-full flex-col justify-between rounded-3xl bg-white p-6">
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	</div>
</div>
