import Layout from 'components/ConatelLayout'
import GeneralHeader from 'components/GeneralHeader'
import ImgNav from 'components/ImgNav'
import { serviciosNav } from 'components/data'
import FibraOpticaCableado from 'components/servicios-soluciones/FibraOpticaCableado'
import SolucionesMultimedia from 'components/servicios-soluciones/SolucionesMultimedia'
import VozDatos from 'components/servicios-soluciones/VozDatos'
import { ReactElement } from 'react'

export default function ServiciosComunicaciones() {
  return (
    <main className='mx-auto my-0 grid w-[70%] min-w-[70%] max-w-4xl place-content-center lg:w-4/5 md:w-[90%]'>
      <GeneralHeader displaySeparator={false}>Sercicios de comunicaciones</GeneralHeader>
      <ImgNav img={serviciosNav} />
      <VozDatos />
      <SolucionesMultimedia />
      <FibraOpticaCableado />
    </main>
  )
}
ServiciosComunicaciones.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
