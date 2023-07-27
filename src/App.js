import Button from "./components/Button"
import JobList from "./components/JobList"
import CreateJob from './components/CreateJob'
import { useAppContext } from "./contexts/appContext"

function App() {
  const { isPopup, dispatch } = useAppContext()

  return <div className={`p-6 ${isPopup && 'h-[100vh] overflow-hidden'}`}>
    <Button type='primary' onClick={() => dispatch({ type: 'CREATING_JOB' })} > Create a Job </Button>
    <br />
    {isPopup && <CreateJob />}
    <JobList />
  </div>
}

export default App