import { useState } from 'react';
import Layout from "@/components/Layout";
import styles from "@/styles/modules/projects.module.scss";

const Projects = () => {
  const [projects] = useState([
    {
      name: "Basic Square (vanilla JS)",
      url: "https://cranky-noyce-5fb271.netlify.app/"
    },
    {
      name: "Dicey Business (vanilla JS)",
      url: "https://xenodochial-snyder-622c4e.netlify.app"
    }
  ]);

  return (
    <Layout title="Projects">
      <div className={styles.pageContainer}>
        <h1 className="text-center mb-md-5">Projects</h1>

        {projects.map((project, index) => (
          <div className={styles.projectContainer} key={index}>
            <h3>{project.name}</h3>
            <iframe src={project.url} className={styles.projectWidget}></iframe>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Projects;