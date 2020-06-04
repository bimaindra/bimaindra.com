import Layout from '../components/Layout';
import Socmed from '../components/Socmed';
import css from '../public/scss/style.scss';

export default function Home() {
  return (
      <Layout>
        <div className={css.card}>
          <h1 className={css.card__title}>My site is getting a little tune up and some love.</h1>
          <p>Scheduled maintenance is currently in progress.</p>
          <p>I'll be back soon!</p>
          <p>&mdash; <b>Bima Indra</b></p>
          <Socmed />
        </div>
      </Layout>
  )
}