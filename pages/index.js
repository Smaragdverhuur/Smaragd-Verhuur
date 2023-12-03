import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Your App Name</title>
        <meta
          name="description"
          content="A description of your app for search engines and social media."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Welcome to Your App!" />

      <main>
        <section className="hero">
          <h1 className="title">Hello, Next.js!</h1>
          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>
        </section>

        <section className="features">
          <h2>Key Features</h2>
          <ul>
            <li>Server-side rendering with Next.js</li>
            <li>Component-based architecture</li>
            <li>Customizable styles with CSS modules</li>
            {/* Add more features as needed */}
          </ul>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .hero {
          width: 100%;
          text-align: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .description {
          font-size: 1.5rem;
          color: #333;
        }

        .features {
          margin: 3rem 0;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          margin: 0.5rem 0;
        }
      `}</style>
    </div>
  );
}
