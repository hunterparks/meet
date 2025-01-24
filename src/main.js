import { meet } from '@googleworkspace/meet-addons';

const CLOUD_PROJECT_NUMBER = '530312883416';
const MAIN_STAGE_URL = 'https://hunterparks.github.io/meet/standupper-meet/MainStage.html';

export async function setUpAddon() {
    const session = await meet.addon.createAddonSession({
        cloudProjectNumber: CLOUD_PROJECT_NUMBER
    });
    const sidePanelClient = await session.createSidePanelClient();
    document.getElementById('start-activity')
        .addEventListener('click', async () => {
            await sidePanelClient.startActivity({ mainStageUrl: MAIN_STAGE_URL });
        })
}

export async function initializeMainStage() {
    const session = await meet.addon.createAddonSession({
        cloudProjectNumber: CLOUD_PROJECT_NUMBER
    });
    await session.createMainStageClient();
}