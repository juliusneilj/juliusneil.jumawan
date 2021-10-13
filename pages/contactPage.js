const selectors = {
	forenameField: '[name="forename"]',
	surnameField: '[name="surname"]',
	emailField: '[name="email"]',
	telephoneField: '[name="telephone"]',
	typeDropdown: '[name="type"]',
	msgBox: '[name="message"]',
	submitButton: '//button[@type="submit"]/span[text()="Submit"]',
	fornameError: '//*[@id="forename-err"]',
	emailError: '//*[@id="email-err"]',
	messageError: '//*[@id="message-err"]',
	sendFeedbackPopup: '//*[@class="cdk-overlay-container"]//*[@class="loader"]',
	successMessage: '//*[contains(@class,"alert-success")]',
}

const errorMessages = {
	emptyForename: 'Forename is required',
	emptyEmail: 'Email is required',
	emptyMessage: 'Message is required',
}

const successMessage = {
	submitFeedback: (name) => `Thanks ${name}, we appreciate your feedback.`,
}

class ContactPage {
	open() {
		browser.url('/contact')
	}

	fillForenameField(forname) {
		$(selectors.forenameField).setValue(forname)
	}

	fillSurnameField(surname) {
		$(selectors.surnameField).setValue(surname)
	}

	fillEmailField(email) {
		$(selectors.emailField).setValue(email)
	}

	fillTelephoneField(telephone) {
		$(selectors.telephoneField).setValue(telephone)
	}

	selectType(type) {
		$(selectors.typeDropdown).selectByVisibleText(type)
	}

	fillMessageBox(message) {
		$(selectors.msgBox).setValue(message)
	}

	clickSubmitButton() {
		$(selectors.sendFeedbackPopup).waitForExist({ reverse: true })
		$(selectors.submitButton).click()
	}

	checkEmailErrorDisplayed() {
		expect($(selectors.emailError)).toBeDisplayed({
			message: 'Email field error is not displayed.',
		})
		expect($(selectors.emailError)).toHaveText(errorMessages.emptyEmail, {
			message: 'Email error is incorrect.',
		})
	}

	checkFornameErrorDisplayed() {
		expect($(selectors.fornameError)).toBeDisplayed({
			message: 'Forname field error is not displayed.',
		})
		expect($(selectors.fornameError)).toHaveText(errorMessages.emptyForename, {
			message: 'Forname error is incorrect.',
		})
	}

	checkMessageErrorDisplayed() {
		expect($(selectors.messageError)).toBeDisplayed({
			message: 'Message box error is not displayed.',
		})
		expect($(selectors.messageError)).toHaveText(errorMessages.emptyMessage, {
			message: 'Message error is incorrect.',
		})
	}

	checkEmailErrorNotDisplayed() {
		expect($(selectors.emailError)).not.toBeDisplayed({
			message: 'Email field error is displayed.',
		})
	}

	checkFornameErrorNotDisplayed() {
		expect($(selectors.fornameError)).not.toBeDisplayed({
			message: 'Forname field error is displayed.',
		})
	}

	checkMessageErrorNotDisplayed() {
		expect($(selectors.messageError)).not.toBeDisplayed({
			message: 'Message box error is displayed.',
		})
	}

	checkSubmitSuccessMessageDisplayed(foreName) {
		expect($(selectors.successMessage)).toBeDisplayed({
			message: 'Success message is not displayed.',
		})
		expect($(selectors.successMessage)).toHaveTextContaining(
			successMessage.submitFeedback(foreName),
			{ message: 'Success message is incorrect.' }
		)
	}

	isSuccessMessageDisplayed() {
		$(selectors.sendFeedbackPopup).waitForExist({ reverse: true })
		return $(selectors.successMessage).isDisplayed()
	}

	hasSuccessMessage(message) {
		$(selectors.sendFeedbackPopup).waitForExist({ reverse: true })
		let actualMsg = $(selectors.successMessage).getText()
		return message === actualMsg
	}
}

export const contactPage = new ContactPage()
