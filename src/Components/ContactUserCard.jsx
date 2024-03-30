function ContactUserCard(props){
    const{contact}=props
    let imageUrl=contact.imageUrl
    return (
        <div className="contact-container">
            <img className="contact-container__image" src={imageUrl} alt="Contact picture" />
            <div>

                <h3> {contact.name}</h3>
                <h5> {contact.position}</h5>
            </div>
        </div>
    )
}
export default ContactUserCard