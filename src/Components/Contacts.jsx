import ContactUserCard from "./ContactUserCard";
function Contacts(props){
    const {contacts}=props

    let array=contacts.map((element,i)=><ContactUserCard key={i} contact={element}/>)
    return(
        <>
        <div className="contacts-container">
            <h5>
                Contacts
            </h5>
        <ul className="contact-list">
        {array}
        </ul>
        </div>
        
        </>
    )
}
export default Contacts;
