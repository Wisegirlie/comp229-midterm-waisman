import './App.css'
import { AddProduct } from './components/AddProduct.jsx'
import { SignUpUser } from './components/SignUpUser.jsx'
import Checkbox from './examples/Checkbox'
import Controlled from './examples/Controlled'
import Dropdown from './examples/Dropdown'
import Multiple from './examples/Multiple'
import Uncontrolled from './examples/Uncontrolled'
import Validate from './examples/Validate'
import LoginForm from './examples/react-hook-form'

function Index() {
    return (
      <>
        <div>
          <AddProduct /> 
          <SignUpUser />
        </div>  
      </>
    )
  }  
  export default Index

  

