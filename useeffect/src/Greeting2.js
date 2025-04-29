//use effect using props
//passing dependency as state variable and props

import {useState, useEffect} from 'react';


const  Greeting2 = ({randomMax}) => {

    const [randomNumber ,  setrandomNumber] = useState(Math.floor(Math.random() * randomMax ) + 1);

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
        if(randomNumber === randomMax){
            window.localStorage.setItem('jackPot' , true);
            console.log(randomNumber)
        }
        else{
            window.localStorage.setItem('jackPot', false)
           
        }
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
        case 6:
            setgreetings('howdy');
            break;
            case 7:
                setgreetings('Cool dude');
                break;
                case 8:
                    setgreetings('we made it');
                    break;
       default:
        setgreetings('Enjoy the day');
        break;
       }
       return function cleanup(){
        console.log('cleanup');
        window.localStorage.removeItem('random');
        window.localStorage.removeItem('jackPot');
    
       }
    } , [randomNumber,randomMax])

    return (
        <div className="container">
            <h1>Hello from components</h1>
            <h2 className='message'>{greetings};</h2>
        </div>
    )
} 
export default Greeting2;