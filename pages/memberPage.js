import { useState } from 'react'
import { LoginForm } from '../components/LoginForm'
import { RegisterForm } from '../components/RegisterForm'
const styles = {
  label: 'block text-gray-700 text-sm font-bold pt-2 pb-1',
  field:
    'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none',
  button:
    ' bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600',
  errorMsg: 'text-red-500 text-sm',
}
export const MemberPage = ({ brand, logoUrl }) => {
  const [isLogin, setIsLogin] = useState('Login')
  return (
    <div className='flex flex-row w-full'>
      <div className='py-12 flex-1'>
        <div className='flex bg-white rounded-lg shadow-2xl overflow-hidden mx-auto max-w-sm lg:max-w-4xl'>
          <div
            className='hidden lg:block lg:w-1/2 bg-auto bg-no-repeat	'
            style={{ backgroundImage: `url(${logoUrl})` }}
          ></div>
          <div className='w-full p-8 lg:w-1/2'>
            <h2 className='text-2xl font-semibold text-gray-600 text-center'>
              {brand}
            </h2>
            <a
              onClick={() => {
                setIsLogin(!isLogin)
              }}
              className='flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100'
            >
              <h1 className='px-4 py-3 w-5/6 text-center text-gray-600 font-bold'>
                {isLogin ? 'Become Member' : 'Back to Login'}
              </h1>
            </a>
            <div className='mt-4 flex items-center justify-between'>
              <span className='border-b border-red-700 w-1/5 lg:w-1/4'></span>
              <a
                href='#'
                className='text-xs text-center text-gray-500 uppercase'
              >
                {isLogin ? 'Login' : 'Register'}
              </a>
              <span className='border-b w-1/5 border-red-700 lg:w-1/4'></span>
            </div>
            {isLogin ? (
              <LoginForm styles={styles} />
            ) : (
              <RegisterForm styles={styles} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
