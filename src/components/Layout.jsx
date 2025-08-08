import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import "../styles/components/Layout.css" 

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className="layout">
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export { Layout }