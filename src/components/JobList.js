
import JobCard from './JobCard'
import { useAppContext } from '../contexts/appContext'


function JobList() {
  const { jobs } = useAppContext()
  return (
    <div className='grid grid-cols-2 gap-6'>
      {jobs.map((job, index) => {
        return <JobCard job={job} index={index} key={job.id} />
      })}
    </div>
  )
}

export default JobList