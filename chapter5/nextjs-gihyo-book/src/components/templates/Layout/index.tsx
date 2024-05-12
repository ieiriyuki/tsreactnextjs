import Seperator from 'components/atoms/Seperator'
import Box from 'components/layouts/Box'
import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Seperator />
      <Box padding={3}>
        <Footer />
      </Box>
    </>
  )
}
