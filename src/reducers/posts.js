export default (posts=[],action)=>{
    switch(action.type){
    case "POSTS":
        return action.payload;
        case "UPDATE":
            return posts.map((post)=> post.id===action.payload._id?action.payload:post)
        case "CREATE":
            return [...posts,action.payload];
            
           default:
               return posts ;

    }
}