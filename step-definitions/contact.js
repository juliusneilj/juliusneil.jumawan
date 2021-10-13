import { Then, When } from '@cucumber/cucumber'
import { contactPage } from '../pages/contactPage'

When(/^The user enters "([^"]*)" in the forename field$/, function (forename) {
	contactPage.fillForenameField(forename)
	this.setTestData('forename', forename)
})

When(/^The user enters "([^"]*)" in the email field$/, (email) => {
	contactPage.fillEmailField(email)
})

When(/^The user enters "([^"]*)" in the message box$/, (message) => {
	contactPage.fillMessageBox(message)
})

Then(/^The user will (see|not see) error messages$/, (view) => {
	if (view === 'see') {
		contactPage.checkFornameErrorDisplayed()
		contactPage.checkEmailErrorDisplayed()
		contactPage.checkMessageErrorDisplayed()
	} else {
		contactPage.checkFornameErrorNotDisplayed()
		contactPage.checkEmailErrorNotDisplayed()
		contactPage.checkMessageErrorNotDisplayed()
	}
})

When(/^The user clicks the Submit button$/, () => {
	contactPage.clickSubmitButton()
})

Then(/^The user will see the success message$/, function () {
	let fName = this.getTestData('forename')
	contactPage.checkSubmitSuccessMessageDisplayed(fName)
})

When(/^The user enters the details in the contact form$/, (dataTable) => {
	let data = dataTable.hashes()
	for (let c = 0; c < data.length; c++) {
		contactPage.fillForenameField(data[c].forename)
		contactPage.fillEmailField(data[c].email)
		contactPage.fillTelephoneField(data[c].telephone)
		contactPage.selectType(data[c].type)
		contactPage.fillMessageBox(data[c].message)
		if (data[c].surname != null) {
			contactPage.fillSurnameField(data[c].surname)
		}
	}
})

When(
	/^The user enters "([^"]*)" as forename and "([^"]*)" as surname$/,
	(fName, sName) => {
		contactPage.fillForenameField(fName)
		if (sName !== null) {
			contactPage.fillSurnameField(sName)
		}
	}
)

When(
	/^The user enters "([^"]*)" as email and "([^"]*)" as telephone$/,
	(email, tel) => {
		contactPage.fillEmailField(email)
		contactPage.fillTelephoneField(tel)
	}
)

When(
	/^The user selects "([^"]*)" as type and enters "([^"]*)" as message$/,
	(type, msg) => {
		contactPage.selectType(type)
		contactPage.fillMessageBox(msg)
	}
)

Then(/^The user will see the "([^"]*)" message$/, (expMessage) => {
	expectChai(
		contactPage.isSuccessMessageDisplayed(),
		'Success Message is not displayed.'
	).to.be.true
	expectChai(
		contactPage.hasSuccessMessage(expMessage),
		'Success message is incorrect.'
	).to.be.true
})
