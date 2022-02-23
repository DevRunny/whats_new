import {getPosts} from "../../api/posts";

const MORE_POSTS = "MORE_POSTS";

export const getPostsThunkCreator = () => {
    return (dispatch) => {
        getPosts()
            .then((posts) => {
                dispatch({
                    type: MORE_POSTS,
                    payload: posts
                    }
                )
            }).catch((error) => {
            console.log(error)
        })
    }
}


const initialState = [
    {
        title: "Instagram FAQ — All You Need To Know",
        url: "https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b",
        date: Date.now()
    },
    {
        title: "DMEXCO 2019 — Meet Combin in Cologne",
        url: "https://blog.combin.com/dmexco-2019-meet-combin-in-cologne-b845529a1e63",
        date: Date.now()
    },
    {
        title: "Limits Display, New User Preview, New Filters, and Many More Features — All about Combin 2.1",
        url: "https://blog.combin.com/limits-display-new-user-preview-new-filters-and-many-more-features-all-about-combin-2-1-d78713383da7",
        date: Date.now()
    },
];

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case MORE_POSTS: {
            const posts = action.payload
            const allPosts = [].concat(state, posts)
            return {
                ...allPosts
            }
        }

        default:
            return state

    }
}


export default postsReducer;