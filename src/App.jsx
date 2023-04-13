import '@mdi/font/css/materialdesignicons.min.css';
import AppRoutes from "./AppRoutes";
// import client from './lib/client';

const App = ({
}) => {
  return (
    <>
      <AppRoutes/>
    </>
  );
};

// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);

//   const bannerQuery = '*[_type == "banner"]';
//   const bannerData = await client.fetch(bannerQuery);

//   return{
//     props:{
//       products,
//       bannerData
//     }
//   }
// }

export default App;