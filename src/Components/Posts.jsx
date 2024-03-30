import Post from "./Post"
function Posts(props){
const {posts}=props
let array=posts.map(element=><Post post={element}/>)
return (
    <div className="posts-container">
        <h3>
            Posts
        </h3>
        <div >
          <ul className="posts-container__list">
            {array}

          </ul>
        </div>
    </div>

)
   
}
export default Posts