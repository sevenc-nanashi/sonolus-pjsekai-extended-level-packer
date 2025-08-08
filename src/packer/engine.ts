import type { PackEngine } from '.'

export const packEngine: PackEngine = ({ assets }) => ({
    item: {
        name: 'chcy-pjsekai-engine-extended',
        version: 13,
        title: {
            en: 'PJSekai+',
        },
        subtitle: {
            en: 'sevenc-nanashi/sonolus-pjsekai-engine-extended',
        },
        author: {
            en: 'Nanashi. <sevenc7c.com> (Forked from NonSpicyBurrito/sonolus-pjsekai-engine)',
        },
        description: {
            en: ['https://github.com/sevenc-nanashi/sonolus-pjsekai-engine-extended'].join('\n'),
        },
        tags: [],
    },
    resources: {
        playData: { type: 'raw', data: assets.enginePlayData },
        thumbnail: { type: 'raw', data: assets.engineThumbnail },
        watchData: { type: 'raw', data: assets.engineWatchData },
        previewData: { type: 'raw', data: assets.enginePreviewData },
        tutorialData: { type: 'raw', data: assets.engineTutorialData },
        configuration: { type: 'raw', data: assets.engineConfiguration },
    },
})
