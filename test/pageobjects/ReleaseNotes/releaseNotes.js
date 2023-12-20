import Page from "../Components/page";

class ReleaseNotes extends Page {

    get releaseNotesTop() {
        return $('.release_version_link');
    }

    get releaseNotesSide() {
        return $('div[data-testid="/release-notest"]');
    }

    get releaseNotesBody() {
        return $('.release-notes-main');
    }

    async openReleaseNotesTopMenu() {
        const button = await this.releaseNotesTop
        await button.waitForClickable()
        await button.click()
        await this.releaseNotesBody.waitForExist()
    }
   
}

export default new ReleaseNotes()