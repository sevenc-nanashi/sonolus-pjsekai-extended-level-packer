import { uscToLevelData } from 'sonolus-pjsekai-engine-extended/dist/convert'
import { anyToUSC } from 'usctool'
import type { PackLevelData } from '.'

export const packLevelData: PackLevelData = async ({ chart, offset }) => {
    if (!chart) throw new Error('No chart file selected')

    const usc = anyToUSC(await chart.bytes())
    const levelData = uscToLevelData(usc.usc, offset)

    return { type: 'json', data: levelData }
}
