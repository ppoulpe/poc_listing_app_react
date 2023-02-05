import axios from 'axios';

class PostApiHttpRequests {
    static All(): Promise<any> {
        return axios.get('https://dummyjson.com/posts')
    }
    static Find(id: number): Promise<any> {
        return axios.get(`https://dummyjson.com/posts/${id}`)
    }
}

export default PostApiHttpRequests;