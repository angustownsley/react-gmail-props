import Email from "./Email"

export default function Emails({ filteredEmails, toggleRead, toggleStar }) {
    return (
        <main className="emails">
            <ul>
                {filteredEmails.map((email, index) => (
                    <Email email = {email} toggleRead = {toggleRead} toggleStar={toggleStar} key={index} />
                ))}
            </ul>
        </main>
    )
}
