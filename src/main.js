import { meet } from '@googleworkspace/meet-addons';

const CLOUD_PROJECT_NUMBER = '530312883416';
const MAIN_STAGE_URL = 'https://hunterparks.github.io/meet/standupper-meet/MainStage.html';

export async function initializeMainStage() {
    const session = await meet.addon.createAddonSession({
        cloudProjectNumber: CLOUD_PROJECT_NUMBER
    });
    await session.createMainStageClient();
}