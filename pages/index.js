import DocumentHead from '../components/Head'
import Navbar from "../components/Navbar"
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <DocumentHead />
      <Navbar />

      <main>
        <Header title="Hi, I'm Josh!" />
      </main>

      <Footer />
    </>
  )
}
