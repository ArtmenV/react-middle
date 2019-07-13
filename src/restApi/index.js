import axios from 'axios'

export const fetchData = async () => {
  try {
    const response = await axios('https://jsonplaceholder.typicode.com/posts')
    const data = await response.data;
    return data
} catch(e){
    console.log(e)
  }
}