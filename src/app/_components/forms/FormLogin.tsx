import { signIn } from '@/lib/auth'
import { FaGithubSquare } from 'react-icons/fa'

export const FormLogin = () => {
  return (
    <div className='w-full max-w-xs'>
      <form
        className='bg-white rounded px-8 pt-6 pb-8 mb-4 border'
        action={async () => {
          'use server'
          await signIn('github', { redirectTo: '/mypage' })
        }}
      >
        <div className='flex flex-col items-center justify-center'>
          <FaGithubSquare className='text-5xl' />
          <button
            className='mt-4 bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Signin with GitHub
          </button>
        </div>
      </form>
    </div>
  )
}
