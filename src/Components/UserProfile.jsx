function UserProfile(props){
    const{info}=props
    console.log(info)
   
    return (
        <div className="userprofile-container">
            <img className="userprofile-container__picture" src="https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt="" />
            <div>
                <h1>{info.name}</h1>
                <h5>{info.position}</h5>
            </div>


        </div>
    )
}
export default UserProfile