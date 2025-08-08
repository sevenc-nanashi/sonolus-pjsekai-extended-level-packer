export { default as db } from '@sonolus/free-pack/pack/db.json'

export const repository = Object.entries(
    import.meta.glob('@sonolus/free-pack/pack/repository/*', {
        query: '?arraybuffer',
        import: 'default',
        eager: true,
    }),
).map(([path, buffer]) => ({
    filename: path.slice(path.lastIndexOf('/') + 1),
    buffer: buffer as ArrayBuffer,
}))

export { default as engineConfiguration } from 'sonolus-pjsekai-engine-extended/dist/EngineConfiguration?arraybuffer'
export { default as enginePlayData } from 'sonolus-pjsekai-engine-extended/dist/EnginePlayData?arraybuffer'
export { default as enginePreviewData } from 'sonolus-pjsekai-engine-extended/dist/EnginePreviewData?arraybuffer'
export { default as engineTutorialData } from 'sonolus-pjsekai-engine-extended/dist/EngineTutorialData?arraybuffer'
export { default as engineWatchData } from 'sonolus-pjsekai-engine-extended/dist/EngineWatchData?arraybuffer'
export { default as engineThumbnail } from './thumbnail.png?arraybuffer'
