import Preview from './Preview.jsx';
import Form from './Form.jsx';
function Main (props) {
return (

<main className="main">
<Preview/>
<Form function = {props.function}/>
</main>
)
}
export default Main;