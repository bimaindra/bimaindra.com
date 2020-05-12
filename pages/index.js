import Layout from '../components/Layout';
import Socmed from '../components/Socmed';

export default function Home() {
  return (
      <Layout>
        <div className="card">
          <h1 className="card__title ">My site is getting a little tune up and some love.</h1>
          <p>Scheduled maintenance is currently in progress.</p>
          <p>I'll be back soon!</p>
          <p>&mdash; <b>Bima Indra</b></p>
          <Socmed />
        </div>
        <style jsx>{`
          a {
            color: #34495e;
            text-decoration: none;
          }
          
          a:hover {
            color: #333;
            text-decoration: none;
          }

          .card {
            margin: auto;
          }

          .card__title {
            font-size: 40px;
            margin-top: 0;
          }

          @media (min-width:768px) {
            .card {
              width: 650px;
            }
          }
          
          @media (max-width: 767px) {
            .card__title {
              font-size: 1.5rem;
            }
          }
        `}</style>

        <style jsx global>{`
          body {
            font-family: 'Inconsolata', monospace;
            font-size: 1.25rem;
            color: #333;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 0;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </Layout>
  )
}
