<script lang="ts">
	import { cn } from "$lib/util";

	interface Props {
		imageSrc: string;
		title: string;
		description: string;
		href: string;
		hoverColor: string;
		class?: string;
	}

	const { imageSrc, title, description, href, hoverColor, class: className, }: Props = $props();
</script>

<div
class={cn(
		'h-[500px] cursor-pointer rounded-4xl border-1 border-gray-300 p-2',
		className
	)}>
	<div
		class="relative h-full w-full rounded-3xl border-1 border-gray-300"
		style="background-image: url({imageSrc}); background-size: cover; background-position: 50%;"
	>
		<div
			class="group absolute bottom-0 flex h-[35%] w-full flex-col justify-between rounded-3xl bg-white p-6 transition-all duration-500 ease-in-out hover:h-full hover:{hoverColor}"
		>
			<div>
				<h1 class="text-xl font-bold group-hover:text-white md:text-[32px]">{title}</h1>
				<p
					class="truncate text-sm text-qset-subtitle transition-colors duration-500 group-hover:text-white md:text-2xl"
				>
					{description}
				</p>
			</div>
			<a
				{href}
				class="inline-block w-fit rounded-lg bg-white px-6 py-2 text-xl font-semibold text-qset-subtitle opacity-0 transition-opacity duration-500 group-hover:opacity-100"
			>
				Visit
			</a>
		</div>
	</div>
</div>
