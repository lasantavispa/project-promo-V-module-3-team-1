import Preview from './Preview.jsx';
import Form from './Form.jsx';
function Main (props) {
return (

<main className="main">
<Preview/>
<Form function = {props.function}  avatar={props.avatar} updateAvatar={props.updateAvatar}/>
</main>
)
}
export default Main;