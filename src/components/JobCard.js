
import netflixLogo from '../assets/netflixLogo.svg'
import Button from './Button'
import EditIcon from '../icons/EditIcon'
import { useAppContext } from '../contexts/appContext'
import { deleteJob } from '../mutations'


function JobCard({ job, index }) {
   const { jobs, dispatch } = useAppContext()
   const { id, title, company, industry, remoteType, location, experienceMin, experienceMax, salaryMin, salaryMax, totalEmployees, applyType } = job;

   const handleEdit = () => {
      dispatch({ type: 'ENABLE_JOB_EDIT', payload: index })
   }

   const handleDelete = async () => {
      try {
         const res = await deleteJob(id)
         if (res.status === 200) {
            const updatedJobs = jobs.filter((job) => job.id !== res.data.id)
            dispatch({ type: 'DELETE_JOB', payload: updatedJobs })
         }
      }
      catch (err) {
         // console.log(err)
      }
   }

   return (
      <div className='max-w-[830px] min-h-[320px] flex px-[24px] py-[16px] bg-card rounded-[10px]'>
         <div className='flex w-full gap-[8px]'>
            <div>
               <img src={netflixLogo} alt='logo' />
            </div>
            <div className='flex flex-col'>
               <h3 className='text-[24px] text-dark'> {title}  </h3>
               <div> {company} - {industry} </div>
               <div className='text-[#4D4D4D] mb-[24px]'> {location} {remoteType} </div>
               <div className='mb-[8px]'>  Part-Time (9.00 am - 5.00 pm IST) </div>
               <div className='mb-[8px]'> Experience ({experienceMin} - {experienceMax} years) </div>
               <div className='mb-[8px]'> INR (₹) {salaryMin} - {salaryMax} / Month </div>
               <div className='mb-[24px]'> {totalEmployees} employees </div>
               <div className='flex '>
                  {applyType === 'quick_apply' ? (
                     <Button type={'primary'}> Apply Now </Button>
                  ) : (
                     <Button type={'outline'}> External Apply </Button>
                  )}
               </div>
            </div>
         </div>
         <div className='flex items-start justify-end gap-2'>
            <Button type={'danger'} onClick={handleDelete} > Delete </Button>
            <Button type={'warning'} onClick={handleEdit} > <EditIcon /> </Button>
         </div>
      </div>
   )
}

export default JobCard