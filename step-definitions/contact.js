import { Then, When } from 'cucumber'
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