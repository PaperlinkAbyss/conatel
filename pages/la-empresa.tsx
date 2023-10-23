import Layout from 'components/ConatelLayout'
import Bienvenidos from 'components/la-empresa/Bienvenidos'
import Certificaciones from 'components/la-empresa/Certificaciones'
import Colaboraciones from 'components/la-empresa/Colaboraciones'
import Experiencia from 'components/la-empresa/Experiencia'
import { ReactElement } from 'react'

export default function LaEmpresa() {
  return (
    <main className='mx-auto my-0 grid w-[70%] place-content-center lg:w-4/5 md:w-[90%]'>
      <Bienvenidos />
      <Experiencia />
      <Colaboraciones />
      <Certificaciones />
    </main>
  )
}
LaEmpresa.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
