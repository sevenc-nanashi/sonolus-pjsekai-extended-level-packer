import { susToUSC, uscToLevelData } from 'sonolus-pjsekai-engine'
import type { PackLevelData } from '.'

export const packLevelData: PackLevelData = async ({ chart, offset }) => {
    if (!chart) throw new Error('No chart file selected')

    const usc = susToUSC(await chart.text())
    const levelData = uscToLevelData(usc, offset)

    return { type: 'json', data: levelData }
}
