import React, {useState}from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Home({id,setup,punchline,Delete}) {
    const [isOn, setIsOn] = useState(false);
    const [countLike, setCountLike] = useState(0)
    const [countDislike, setCountDislike] = useState(0)

    const like= '👍';
    const disLike = '👎';

    // Count likes when clicked
    const handleLikeClick = () => {
        setCountLike(countLike + 1)
    }

    // Count dislikes when clicked
    const handleDisLikeClick = () => {
        setCountDislike(countDislike + 1)
    }

    // Displays the punchline jokes when clicked
    const handleClick = () => {
        setIsOn(isOn => !isOn)
    }
    
    // const handleDelete = () => { 
    //         fetch(`http://localhost:3000/jokes/${id}`, {
    //             method: "DELETE"
    //         } )
    //         Delete(id)
    //     }

    return (
        <div className="card">
            <h3>{setup}</h3>
            <button className="answer"onClick={handleClick}> 
                {isOn ? punchline: "Answer"}</button>
               
            <div className="button">
                <button className="delete" onClick={Delete}> Delete </button> 
                <button className="like" onClick={handleLikeClick}> {like} {countLike}</button>
                <button className="disLike" onClick={handleDisLikeClick}> {disLike} {countDislike}</button>
            </div>
            
        </div>  
    )
}
/*********** PATCH ***********/
// const handleClick = () => { 
// fetch(`http://localhost:3000/jokes/${joke.id}`,{
        // method: "PATCH",
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify({On:!isOn}) })
// .then(res => res.json())
// .then(data => {
//         console.log(data,'Yonatan')
//         setIsOn(!isOn)
// })
// }
/*********** DELETE ***************** */

    // persist changes on server - deletes joke from db.json
    // const handleDelete = () => { 
    //     fetch(`http://localhost:3000/jokes/${id}`, {
    //         method: "DELETE"
    //     } )
    //     Delete(id)
    // }