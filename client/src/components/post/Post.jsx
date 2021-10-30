 import "./post.css"
 
 export default function Post () {
     return (
         <div className="post">
             <img 
             className="postImg"
             src="https://images.pexels.com/photos/2891884/pexels-photo-2891884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
             alt="" 
             />
             <div className="postInfo">
                 <div className="postCats">
                     <span className="postCat">Life</span>
                     <span className="postCat">Basketball</span>
                 </div>
                 <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                 <hr />
                 <span className="postDate">1 hour ago</span>
             </div>
             <p className="postDesc">
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                 Fugiat sapiente hic quibusdam maiores libero dolorem sed eligendi, 
                 officiis impedit temporibus doloribus deserunt nesciunt in explicabo. 
                 Distinctio numquam eos itaque sapiente, dolor tenetur vitae neque 
                 reiciendis quia doloribus nam odit molestias?
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                 Fugiat sapiente hic quibusdam maiores libero dolorem sed eligendi, 
                 officiis impedit temporibus doloribus deserunt nesciunt in explicabo. 
                 Distinctio numquam eos itaque sapiente, dolor tenetur vitae neque 
                 reiciendis quia doloribus nam odit molestias?
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                 Fugiat sapiente hic quibusdam maiores libero dolorem sed eligendi, 
                 officiis impedit temporibus doloribus deserunt nesciunt in explicabo. 
                 Distinctio numquam eos itaque sapiente, dolor tenetur vitae neque 
                 reiciendis quia doloribus nam odit molestias?
             </p>
         </div>
     )
 }
 