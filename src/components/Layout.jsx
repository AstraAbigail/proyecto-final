import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>
        {/* <h2>{props.title}</h2> */}
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export { Layout }