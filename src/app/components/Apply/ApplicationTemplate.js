import React, { Component } from 'react';

class ApplicationTemplate extends Component {
	render () {
		return (
			<form id="application-template">
				<h3>Application For Benevolence</h3>

				<label htmlFor="charName">Character Name</label>
				<input name="charName" placeholder="Arthas" type="text"/>

				<label htmlFor="charArmory">Character Armory</label>
				<input name="charArmory" placeholder="armory.com/sekenah" type="text"/>


				<label htmlFor="charTime">How long has this character been your main?</label>
				<textarea name="charTime" placeholder="5 years in hell"/>

				<label htmlFor="uiScreenshot">Screenshot of Your UI</label>
				<input name="uiScreenshot" placeholder="imgur.com/ui" type="text"/>

				<label htmlFor="charLogs">Link to WarcraftLogs</label>
				<input name="charLogs" placeholder="warcraftlogs.com/me" type="text"/>

			</form>
		)
	}
}

export default ApplicationTemplate;
