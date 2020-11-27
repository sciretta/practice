import {globalStyles} from './Styles'
import Head from 'next/head'
const Global = ({children}) => {
  return (
    <>
      <Head> 
        <title>Breaking Bad App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        {children}
      </main>
      <style jsx global>{globalStyles}</style>
    </>
  )
}

export default Global