import { PropsWithChildren } from 'react'
import Navbar from './Navbar'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div className='m-10'></div>
    </>
  )
}
