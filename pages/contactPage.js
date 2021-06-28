const selectors = {
    forenameField: '[name="forename"]',
    surnameField: '[name="surname"]',
    emailField: '[name="email"]',
    telephoneField: '[name="telephone"]',
    msgBox: '[name="message"]',
    submitButton: '=Submit',
    fornameError: '//*[@id="forename-err"]',
    emailError: '//*[@id="email-err"]',
    messageError: '//*[@id="message-err"]',
    sendFeedbackPopup: 'h1=Sending Feedback',
    successMessage: '//*[@ui-if="contactValidSubmit"]',
}

const errorMessages = {
    emptyForename: 'Forename is required',
    emptyEmail: 'Email is required',
    emptyMessage: 'Message is required',
}

const successMessage = {
    submitFeedback: name => `Thanks ${name}, we appreciate your feedback.`
}

class ContactPage {
    fillForenameField(forname) {
        $(selectors.forenameField).setValue(forname)
    }

    fillEmailField(email) {
        $(selectors.emailField).setValue(email)
    }

    fillMessageBox(message) {
        $(selectors.msgBox).setValue(message)
    }

    clickSubmitButton() {
        $(selectors.submitButton).click()
    }

    checkEmailErrorDisplayed() {
        expect($(selectors.emailError)).toBeDisplayed({message: 'Email field error is not displayed.'})
        expect($(selectors.emailError)).toHaveText(errorMessages.emptyEmail, {message: 'Email error is incorrect.'})
    }

    checkFornameErrorDisplayed() {
        expect($(selectors.fornameError)).toBeDisplayed({message: 'Forname field error is not displayed.'})
        expect($(selectors.fornameError)).toHaveText(errorMessages.emptyForename, {message: 'Forname error is incorrect.'})
    }

    checkMessageErrorDisplayed() {
        expect($(selectors.messageError)).toBeDisplayed({message: 'Message box error is not displayed.'})
        expect($(selectors.messageError)).toHaveText(errorMessages.emptyMessage, {message: 'Message error is incorrect.'})
    }

    checkEmailErrorNotDisplayed() {
        expect($(selectors.emailError)).not.toBeDisplayed({message: 'Email field error is displayed.'})
    }

    checkFornameErrorNotDisplayed() {
        expect($(selectors.fornameError)).not.toBeDisplayed({message: 'Forname field error is displayed.'})
    }

    checkMessageErrorNotDisplayed() {
        expect($(selectors.messageError)).not.toBeDisplayed({message: 'Message box error is displayed.'})
    }

    checkSubmitSuccessMessageDisplayed(foreName) {
        browser.overrideImplicitWait(30000)
        expect($(selectors.successMessage)).toBeDisplayed({message: 'Success message is not displayed.'})
        expect($(selectors.successMessage)).toHaveTextContaining(successMessage.submitFeedback(foreName), {message: 'Success message is incorrect.'})
    }

}

export const contactPage = new ContactPage()