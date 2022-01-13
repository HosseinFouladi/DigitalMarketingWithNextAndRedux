import Layout from '../components/layout/Layout';
import AdminPreview from '../components/admin/AdminPreview';
import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../redux/selectors/UserSelector';
import { useRouter } from 'next/router';

const Admin=()=>{

    const router=useRouter();
    const user=useSelector(selectCurrentUser);
    useLayoutEffect(()=>{

        if(!user||user.role!='ادمین'){
            router.replace('/');
        }
          
    },[])
    return(
        <div>
           {user&& user.role=='ادمین'&& <Layout children={<AdminPreview/>}></Layout>}
        </div>
      
    )
}
export default Admin;
