<PageHeader title="Komponenter" imagePath="developer" pageLevel=1></PageHeader>

Oversikten over komponentene i designsystemet finner du på denne siden og i listen til venstre. De fleste er generiske og brukes på tvers av prosjekter, mens noen er spesialutviklet for Varsom.

<a href="https://www.figma.com/design/0eXhyUrUF7fWi1VaphfpEu/04---%E2%9D%96-Komponenter?m=dev" target="_blank">Du finner komponentene i Figma her.</a>

<script setup>
import { computed } from 'vue';
import { useData, withBase } from 'vitepress';

const { theme } = useData();
const components = computed(() => {
	const sidebar = theme.value.sidebar;
	if (!Array.isArray(sidebar)) return [];

	const section = sidebar.find((item) => item.text === 'Komponenter');
	return (section?.items ?? [])
		.filter((item) => item.link?.startsWith('/components/nve-'))
		.slice()
		.sort((first, second) => first.text.localeCompare(second.text, 'nb'));
});
</script>

<div class="component-overview-container">
	<div class="component-overview-grid">
		<nve-link-card
			v-for="component in components"
			:key="component.link"
			:label="component.text"
			:href="withBase(`${component.link}.html`)"
      variant="contrast"
    	></nve-link-card>
    </div>

</div>

<style scoped>
.component-overview-container {
	container-type: inline-size;
	margin-top: var(--spacing-large, 1.5rem);
}

.component-overview-grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: var(--spacing-small, 0.75rem);
	row-gap: var(--spacing-large, 1.5rem);
}


@container (max-width: 400px) {
	.component-overview-grid {
		grid-template-columns: 1fr;
	}
}
</style>
