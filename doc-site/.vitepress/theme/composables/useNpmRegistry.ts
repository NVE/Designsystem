// Henter siste versjonsnummer til siste publiserte versjon av nve-designsystem fra npm-registry
import fetch from 'npm-registry-fetch';
import { ref } from 'vue';

const publishedDesignsystemVersion = ref<string>();

async function getLatestVersion(): Promise<string> {
    try {
        const response = await fetch.json('https://registry.npmjs.org/nve-designsystem');
        return response['dist-tags'].latest;
    } catch (error) {
        console.error('Fikk ikke hentet siste versjonsnummer av nve-designsystem fra npm: ', error);
        throw error;
    }
}

export function useNpmRegistry() {

    const getLatestDesignsystemVersion = () => {
        if (!publishedDesignsystemVersion.value) {
            getLatestVersion()
                .then(latestVersion => {
                    publishedDesignsystemVersion.value = latestVersion;
                }).catch(() => {
                    return 'ukjent';
                });
        }
        return publishedDesignsystemVersion.value;
    }

    return { getLatestDesignsystemVersion };
}