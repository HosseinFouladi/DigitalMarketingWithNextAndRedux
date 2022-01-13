import  {AdminView}  from "../../styles/admin/AdminPreview.style";
import AddCategoryForm from "./AddCategoryForm";
import AddProductForm from "./AddProductForm";

const AdminPreview=()=>{
    return(
       <AdminView>
           <AddProductForm/>
           <AddCategoryForm/>
       </AdminView>
    )
}
export default AdminPreview;