import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import {
  Form,
  Subject,
  Titles,
  Input,
  ButtonBox,
  AddButton,
  Loader,
  Circle,
  ButtonContent,
  ButtonText,
} from "../../styles/admin/AddCategory.style";
import {
  Label,
  UploadIcon,
  FileInput,
  UploadImageBox,
  ErrorSpan,
} from "../../styles/register/LoginForm.style";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteproduct,
  startAddingProduct,
  startEdditingProduct,
} from "../../redux/actions/ProductActions";
import Notif from "../notification/Notification";

import {
  selectAddErrorMessage,
  selectaddLoadingProduct,
  selectAllProducts,
  selectEditLoadingProduct,
} from "../../redux/selectors/ProductSelector";
const AddProductForm = () => {
  const [images, setImages] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [type, setType] = useState();
  const addLoadingProduct = useSelector(selectaddLoadingProduct);
  const editLoadingProduct = useSelector(selectEditLoadingProduct);
  const prod = useSelector(selectAllProducts);
  const [deleteView, setDeleteView] = useState(false);
  const [editView, setEditView] = useState(false);
  const [addView, setAddView] = useState(false);

  const handleImgProduct = useCallback((e) => {
    setImages(e.target.files);
  });

  const fetchData = (data) => {};

  const handlTypeProduct = useCallback((e) => {
    setType(e.target.name);
  });

  const handleDeleteProduct = useCallback((e) => {
    const id = watch("productId");
    if (!deleteView && type != "delete") {
      setType(e.target.name);
      setDeleteView(true);
      return;
    }
    try {
      dispatch(deleteproduct(id));
      Notif("success", "با موفقیت حذف شد", "انجام شد");
    } catch (err) {
      Notif("warning", err, "هشدار");
    }
    setDeleteView(false);
  });

  const handleAddProduct = useCallback((e) => {
    if (!addView && type != "add") {
      setType(e.target.name);
      setAddView(true);
      return;
    }
    const productName = watch("productName");
    const categoryId = watch("categoryId");
    const productId = watch("productId");
    const price = watch("price");
    const count = watch("count");

    const add = async () => {
      try {
        dispatch(
          startAddingProduct({
            images,
            productName,
            categoryId,
            productId,
            price,
            count,
          })
        );
      } catch (err) {
        console.log(err);
      }
    };
    add();
    setAddView(false);
  });

  const handleEditProduct = useCallback((e) => {
    if (!editView && type != "edit") {
      setType(e.target.name);
      setEditView(true);
      return;
    }
    const productName = watch("productName");
    const categoryId = watch("categoryId");
    const productId = watch("productId");
    const price = watch("price");
    const count = watch("count");

    const edit = async () => {
      try {
        dispatch(
          startEdditingProduct({
            images,
            productName,
            categoryId,
            productId,
            price,
            count,
          })
        );
      } catch (err) {
        console.log(err);
      }
    };
    edit();
    setEditView(false);
  });
  return (
    <Form type="product" onSubmit={handleSubmit(fetchData)}>
      <Subject>محصول جدید</Subject>
      {type != "delete" && <Titles>نام محصول</Titles>}
      {type != "delete" && (
        <Input
          type="text"
          {...register("productName", { required: true, minLength: 2 })}
        />
      )}
      {errors.productName && (
        <ErrorSpan err={"img"}>
          {errors.productName.type === "requird"
            ? "نام محصول باید وارد شود!"
            : "نام محصول باید بیشتراز دو حرف باشد!"}
        </ErrorSpan>
      )}
      <Titles>شناسه (ID):</Titles>
      <Input type="number" {...register("productId", { required: true })} />
      {errors.productId && (
        <ErrorSpan err={"img"}>شناسه محصول باید وارد شود!</ErrorSpan>
      )}
      {type != "delete" && <Titles>دسته بندی مربوطه (ID):</Titles>}
      {type != "delete" && (
        <Input type="number" {...register("categoryId", { required: true })} />
      )}
      {errors.categoryId && (
        <ErrorSpan err={"img"}>دسته بندی مربوطه باید وارد شود!</ErrorSpan>
      )}
      {type != "delete" && <Titles>قیمت محصول(به تومان):</Titles>}
      {type != "delete" && (
        <Input type="number" {...register("price", { required: true })} />
      )}
      {errors.price && (
        <ErrorSpan err={"img"}>قیمت محصول باید وارد شود!</ErrorSpan>
      )}
      {type != "delete" && <Titles>تعداد موجود:</Titles>}
      {type != "delete" && (
        <Input type="number" {...register("count", { required: true })} />
      )}
      {errors.count && (
        <ErrorSpan err={"img"}>تعداد محصول باید وارد شود!</ErrorSpan>
      )}
      {type != "delete" && <Titles>عکس های کالا:</Titles>}
      {type != "delete" && (
        <UploadImageBox type={"admin"}>
          <UploadIcon icon={faFolderOpen}></UploadIcon>
          <Label htmlFor="avatar">انتخاب عکس</Label>
          <FileInput
            type="file"
            id="avatar"
            multiple
            accept="image/*"
            required="true"
            onChange={handleImgProduct}
          />
        </UploadImageBox>
      )}
      <ButtonBox>
        <AddButton
          types={type}
          chooseColor="add"
          disabled={addLoadingProduct ? true : false}
          loading={addLoadingProduct}
          name="add"
          onClick={handleAddProduct}
          onMouseEnter={handlTypeProduct}
        >
          <ButtonContent>
            {!addLoadingProduct && <ButtonText>اضافه</ButtonText>}
            {addLoadingProduct && (
              <Loader viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <Circle
                  fill="none"
                  stroke-width="6"
                  stroke-linecap="round"
                  cx="33"
                  cy="33"
                  r="30"
                ></Circle>
              </Loader>
            )}
          </ButtonContent>
        </AddButton>
        <AddButton
          types={type}
          chooseColor="edit"
          disabled={editLoadingProduct ? true : false}
          loading={editLoadingProduct}
          name="edit"
          onClick={handleEditProduct}
          onMouseEnter={handlTypeProduct}
        >
          <ButtonContent>
            {!editLoadingProduct && <ButtonText>ویرایش</ButtonText>}
            {editLoadingProduct && (
              <Loader viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <Circle
                  fill="none"
                  stroke-width="6"
                  stroke-linecap="round"
                  cx="33"
                  cy="33"
                  r="30"
                ></Circle>
              </Loader>
            )}
          </ButtonContent>
        </AddButton>
        <AddButton
          name="delete"
          onClick={handleDeleteProduct}
          onMouseEnter={handlTypeProduct}
        >
          حذف
        </AddButton>
      </ButtonBox>
    </Form>
  );
};
export default AddProductForm;
