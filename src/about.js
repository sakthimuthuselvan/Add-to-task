
import {Link,useParams,useSearchParams} from "react-router-dom"

function About(){

    const params=useParams()
    console.log(params)

    // const [param]=useSearchParams()
    // console.log("PARMS", param)
return(
    <div>
        <h1>About</h1>
        <Link to="/home"></Link>
    </div>
)
}
export default About;