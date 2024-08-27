import { auth, signOut } from '@/lib/auth'
import Link from 'next/link'

export const Header = async () => {
  const session = await auth()

  return (
    <header className='py-4 border-b flex justify-center items-center'>
      <div className='flex self-center justify-between items-center container px-4'>
        <h1 className='text-xl text-slate-600'>Next.js SandBox</h1>
        {session && (
          <>
            <div className='flex items-center'>
              <form
                className='mr-4'
                action={async () => {
                  'use server'
                  await signOut({ redirectTo: '/login' })
                }}
              >
                <button
                  type='submit'
                  className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
                >
                  Sign Out
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
