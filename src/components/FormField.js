
function FormField({children, marginBottom}) {
  return (
    <div className={`w-full flex flex-col gap-[4px] mb-[${marginBottom}px]`}>
       {children}
    </div>
  )
}

export default FormField