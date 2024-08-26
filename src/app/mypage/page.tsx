import { auth } from '@/lib/auth'
import Image from 'next/image'

export default async function Page() {
  const session = await auth()

  return (
    <div className='py-8'>
      <h1 className='page-heading'>My Page</h1>
      <div className='flex justify-center items-center mt-4 border rounded p-4'>
        <div className='w-28 mr-4'>
          <Image
            src={session?.user?.image || ''}
            alt={session?.user?.name || ''}
            width={500}
            height={500}
          />
        </div>
        <div>
          <p>id: {session?.user?.id}</p>
          <p>ユーザー名: {session?.user?.name}</p>
          <p>LINE ID:</p>
        </div>
      </div>
    </div>
  )
}
