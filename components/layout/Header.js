import Link from "next/link";
import {
  HeaderSection,
  CategoriesLink,
  FontAwesome,
  LinkText,
  SearchInput,
  SearchBox,
  SearchIcon,
  TimeContainer,
  ProfileContainer,
  ProfilePicture,
  UserImage,
  CartIcon,
  CartBox,
  ProductCount,
  SidebarContainer,
  CategoryBox,
} from "../../styles/layout/Layout.style";
import {
  faBars,
  faCartPlus,
  faSearch,
  faSortDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/selectors/UserSelector";
import MenuListComposition from "../material-ui/DropDownMenu";
import { setSearchProducts } from "../../redux/actions/ProductActions";
import { useRouter } from "next/router";
import { selectCurrentProduct } from "../../redux/selectors/ProductSelector";
import SideBar from "./SideBar";
import { useState } from "react";
import { useCallback } from "react";
const Header = () => {
  const user = useSelector(selectCurrentUser);
  const product = useSelector(selectCurrentProduct);
  const dispatch = useDispatch();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleSearch = (e) => {
    const { value } = e.target;
    dispatch(setSearchProducts(value));
    if (window.location.href != "http://localhost:3000") {
      router.push("/");
    }
  };
  const handleSidebar = useCallback(() => {
    setOpen(!open);
  }, [open]);
  return (
    <HeaderSection>
      <CartBox>
        <Link href={`/product/${product.productId}/pay`}>
          <CartIcon icon={faCartPlus}></CartIcon>
        </Link>
        <ProductCount>{user.products && user.products.length}</ProductCount>
      </CartBox>
      <ProfileContainer>
        {user.name && <FontAwesome icon={faSortDown} />}
        {user.name && <MenuListComposition name={user.name} />}
        {!user.name && (
          <Link href="/signup">
            <LinkText margin={"no"}>ثبت نام</LinkText>
          </Link>
        )}
        <ProfilePicture>
          {user.imageUrl && (
            <UserImage src={user.imageUrl} layout="fill"></UserImage>
          )}
        </ProfilePicture>
      </ProfileContainer>
      <TimeContainer isAdmin={user.role == "ادمین" ? true : false}>
        <Link href="/admin">
          <LinkText margin={"no"}>اضافه کردن محصول</LinkText>
        </Link>
      </TimeContainer>
      <SearchBox>
        <SearchInput onChange={handleSearch} placeholder="...جستجو کنید" />
        <SearchIcon icon={faSearch}></SearchIcon>
      </SearchBox>
      <CategoriesLink onClick={handleSidebar}>
        <CategoryBox>
          <LinkText>لیست محصولات</LinkText>
          {open ? (
            <FontAwesome icon={faTimes}></FontAwesome>
          ) : (
            <FontAwesome icon={faBars}></FontAwesome>
          )}
        </CategoryBox>
        <SidebarContainer isOpen={open}>
          <SideBar></SideBar>
        </SidebarContainer>
      </CategoriesLink>
    </HeaderSection>
  );
};
export default Header;
