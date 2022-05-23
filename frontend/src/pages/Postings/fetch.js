import axios from 'axios'

const imageupload = async (data) => {
    try{
        let result = await axios({
            method: 'POST',
            url: 'http://localhost:3000/create_posting/single',
            data:data
        });
        console.log(result)
    }
    catch(err){
        console.log(err.message)
    }
}

export default imageupload