import Email from "./Email"

export default function Emails({ filteredEmails, toggleRead, toggleStar, handleEmailClick }) {
    return (
        <main className="emails">
            <ul>
                {filteredEmails.map((email, index) => (
                    <Email email = {email} toggleRead = {toggleRead} toggleStar={toggleStar} handleEmailClick = {handleEmailClick} key={index} />
                ))}
            </ul>
        </main>
    )
}
