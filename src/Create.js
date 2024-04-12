import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] =  useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState('false');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}
        fetch('http://localhist:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setIsPending(false)
            //history.pushState('/')
        })
    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form action="" method="POST">

                <label htmlFor="">Blog title </label>
                    <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
               <label htmlFor="">Blog body:</label>
               <textarea 
               name=""
                id=""  
                value={body}
               required
               onChange={(e) =>setBody(e.target.value)}
               ></textarea>
               <label htmlFor="">Blog author:</label>
                <select name="" id="" value={author}
                onChange={(e) => setAuthor(e.target.value)}>

                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button onSubmit={handleSubmit}>Add blog</button>
                {/* {!isPending && }
                {isPending && <button disabled>Adding blog...</button>} */}
            </form>
        </div>
     );
}
 
export default Create;