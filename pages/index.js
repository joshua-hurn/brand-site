import DocumentHead from '../components/Head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="container">
      <DocumentHead />

      <main>
        <Header title="Hi, I'm Josh!" />
      </main>

      <Footer />
    </div>
  )
}
