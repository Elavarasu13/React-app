import {useState, useEffect} from 'react';


const  Greeting = () => {

    const [randomNumber ,  setrandomNumber] = useState(Math.floor(Math.random() * 5) + 1);

    const [greetings , setgreetings] = useState('');

    useEffect(() =>{
        document.title = "useEffect";
    },[])

    useEffect (() => {
        console.log('random greetings');
        //use effect without dependencies
    })

    useEffect( () =>{
        //useEffect with dependency
        window.localStorage.setItem('random', randomNumber);
       switch(randomNumber){
        case 1 : 
        setgreetings('Hello');
        break ;
        case 2 :
        setgreetings('How are you');
        break;
        case 3:
        setgreetings('hoodo');
        break;
        case 4:
        setgreetings('Evertything will be fine one day');
        break;
        case 5:
        setgreetings('Nothing will stop you , lets go');
        break;
       default:
        setgreetings('Enjoy the day');
        break;
       }
    } , [randomNumber])

    return (
        <div className="container">
            <h1>Hello from components</h1>
            
                {greetings};
            

        </div>
    )
} 
export default Greeting;