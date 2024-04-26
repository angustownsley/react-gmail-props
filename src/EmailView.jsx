import EmailToolbar from "./EmailToolbar.jsx"
import EmailContent from "./EmailContent.jsx"
import WriteEmail from "./WriteEmail.jsx"


function EmailView({currentEmail, setSingleEmailView}) {
    return (
        <main className="email-view">
            <EmailToolbar setSingleEmailView = {setSingleEmailView}/>
            <EmailContent email = {currentEmail}/>
            <WriteEmail/>
        </main>
    )
}

export default EmailView
