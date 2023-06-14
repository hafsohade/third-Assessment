import './App.css';
import UserInput from './Component/UserInput';
import UserOutput from './Component/UserOutput';

const App = () => {

  return (
    <div>
      <UserInput/>
      <UserOutput username="Adebanjo Davies" />
      <UserOutput username="Adebanjo Davies"/>
      <UserOutput username="Adebanjo Davies"/>
    </div>
  )
  }
export default App