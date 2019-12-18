import posts from '../data/posts'

const postReducer=function (state = posts ,action){
    console.log(posts);
    return state
}
export default postReducer;