import Head from 'next/head';
import Navbar from './Components/Navbar';
import Image from 'next/image';

const about = ({albums}) => {
  return (
    <>
      <Head>
        <title>profil | Belajar Next JS</title>
        <meta name="description" content="Belajar Next JS" />
      </Head>
      <Navbar />
      <Image src="/next.svg" alt="Logo Next JS" width={100} height={100} />
      <h1>Ini Halaman profil</h1>
      {albums.map((album) => (
        <div key={album.id}>
          <h2>{album.title}</h2>
        </div>
      ))}
    </>
  );
};

export default about;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums = await res.json();

  return{
    props:{
      albums,
    }
  }
};