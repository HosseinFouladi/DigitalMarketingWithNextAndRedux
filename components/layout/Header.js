
import Link from "next/link";
import { HeaderSection, CategoriesLink, FontAwesome, LinkText, SearchInput, SearchBox, SearchIcon, TimeContainer, ProfileContainer, ProfilePicture, UserImage, CartIcon, CartBox, ProductCount } from "../../styles/layout/Layout.style";
import { faBars, faCartPlus,  faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser} from "../../redux/selectors/UserSelector";
import DateAndTimePickers from "../material-ui/DataTimePicker";
import MenuListComposition from "../material-ui/DropDownMenu";
import { setSearchProducts } from "../../redux/actions/ProductActions";
const Header=()=>{

    const user=useSelector(selectCurrentUser);
    const dispatch=useDispatch();
    const handleSearch=(e)=>{
        const {value}=e.target;
        dispatch(setSearchProducts(value))
    }
    return(
        <HeaderSection>
        <CartBox>
            <CartIcon icon={faCartPlus}></CartIcon>
            <ProductCount>{user.products && user.products.length}</ProductCount>
        </CartBox>
        <ProfileContainer>
            <MenuListComposition name={user.name}/>
            <ProfilePicture >
               { user.imageUrl && <UserImage src={user.imageUrl} layout='fill'></UserImage>}
            </ProfilePicture>
        </ProfileContainer>
        <TimeContainer>
            <DateAndTimePickers></DateAndTimePickers>
        </TimeContainer>
        <SearchBox>
            <SearchInput onChange={handleSearch} placeholder='...جستجو کنید'/>
            <SearchIcon icon={faSearch}></SearchIcon>
        </SearchBox>
        <CategoriesLink>
            <LinkText >لیست محصولات</LinkText>
            <FontAwesome icon={faBars} ></FontAwesome>
        </CategoriesLink>
       
    </HeaderSection>
    )
}
export default Header;