
import ContentElementForm from './ContentElementForm';
import ContentElementList from './ContentElementList';
import Logout from '@/components/Logout'

const Admin = () => {
  return (
    <>
      <ContentElementForm />
      <ContentElementList></ContentElementList>
      <Logout></Logout>
      <div>Gib Bier</div>      
      
      </>
   
  );
};


export default Admin;
