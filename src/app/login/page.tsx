import { FormLogin } from '@/app/_components/forms'

export default function Page() {
  return (
    <div className='container py-8'>
      <h1 className='page-heading'>Login</h1>
      <div className='flex justify-center mt-6'>
        <FormLogin />
      </div>
    </div>
  )
}
