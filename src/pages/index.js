import Layout from '../components/Layout';
import Feed from '../components/Feed';
import Suggestions from '../components/Suggestions';
import { openDB } from '../lib/openDB';

function Index({ posts }) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // implementar a busca dos dados no mongodb
  const db = await openDB();
  const data = await db.collection('feed').find().toArray();

  // const data = [
  //   {
  //     id: 1,
  //     author: {
  //       id: 1,
  //       avatar:
  //         '',
  //       name: 'Lucas Nhimi',
  //       username: 'lucasnhimi',
  //     },
  //     description: '',
  //     tags: [{ title: '#youtube' }, { title: '//#endregionclone' }],
  //     songName: 'WAP (feat. Megan Thee Stallion) - Cardi B',
  //     videoUrl:
  //       '',
  //     likes: 650,
  //     comments: 10,
  //     replies: 50,
  //   },
  //   {
  //     id: 2,
  //     author: {
  //       id: 1,
  //       avatar:
  //         '',
  //       name: 'Lucas Nhimi',
  //       username: 'lucasnhimi',
  //     },
  //     description: 'Vídeo teste para clone de interface',
  //     tags: [{ title: '#youtube' }, { title: '#clone' }],
  //     songName: 'Tampa Curhat Beat - TampaCurhat',
  //     videoUrl:
  //       '',
  //     likes: 650,
  //     comments: 10,
  //     replies: 50,
  //   },
  // ];

  return {
    props: {
      posts: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}

export default Index;
