import { databaseEngineItem } from 'sonolus-pjsekai-engine'
import type { PackEngine } from '.'

export const packEngine: PackEngine = ({ assets }) => ({
    item: {
        ...databaseEngineItem,
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
