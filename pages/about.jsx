import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout title="About">
      <div className='container'>
        <h1>About Me</h1>
        <p className='text-white'>Feel free to reach out at
          <a href="mailto:josh@hurn.io">josh@hurn.io</a>
        </p>
      </div>
    </Layout>
  )
}

export default About;