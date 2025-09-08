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
		<div
			class="group absolute bottom-0 h-[35%] w-full rounded-3xl bg-white p-6 transition-all duration-500 ease-in-out hover:h-full hover:bg-blue-400"
		>
			<h1 class="text-[32px] font-bold group-hover:text-white">{title}</h1>
			<p class="text-2xl text-qset-subtitle transition-colors duration-500 truncate group-hover:text-white">
				{description}
			</p>
		</div>
	</div>
</div>
