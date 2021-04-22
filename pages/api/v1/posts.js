import axios from 'axios'


export default async (req, res) => {

    if (req.method === 'POST') {
        const postData = Json.parse(req.body)
        console.log(postData)

        return res.json({
            status: 'Saving Post to DB',
            ...postData
        })
    } else {
        // In our case this would be a get request
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const posts = response.data
        return res.json(posts.slice(0, 20))
    }
}
