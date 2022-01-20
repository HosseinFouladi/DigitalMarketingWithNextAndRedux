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
import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategory,
  startAddingCat,
  startEdditingCat,
} from "../../redux/actions/ProductActions";
import Notif from "../notification/Notification";
import {
  selectAddErrorMessage,
  selectaddLoading,
  selectEditLoading,
} from "../../redux/selectors/ProductSelector";

const AddCategoryForm = () => {
  const [image, setImage] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [type, setType] = useState();
  const addLoading = useSelector(selectaddLoading);
  const editLoading = useSelector(selectEditLoading);
  const [deleteView, setDeleteView] = useState(false);
  const [editView, setEditView] = useState(false);
  const [addView, setAddView] = useState(false);

  const handleImgCategory = useCallback(
    (e) => {
      setImage(e.target.files[0]);
    },
    [image]
  );

  const fetchCat = (data) => {};

  const handlType = useCallback((e) => {
    setType(e.target.name);
  });

  const handleDelete = useCallback((e) => {
    if (!deleteView && type != "delete") {
      setType(e.target.name);
      setDeleteView(true);
      return;
    }
    const id = watch("categoryId");
    try {
      dispatch(deleteCategory(id));
      Notif("success", "با موفقیت حذف شد", "انجام شد");
    } catch (err) {
      Notif("warning", err, "هشدار");
    }
    setDeleteView(false);
  });

  const handleAdd = useCallback((e) => {
    if (!addView && type != "add") {
      setType(e.target.name);
      setAddView(true);
      return;
    }
    const categoryName = watch("categoryName");
    const categoryId = watch("categoryId");

    const add = async () => {
      try {
        dispatch(startAddingCat({ image, categoryName, categoryId }));
      } catch (err) {
        console.log(err);
      }
    };
    add();
    setAddView(false);
  });

  const handleEdit = useCallback((e) => {
    const categoryName = watch("categoryName");
    const categoryId = watch("categoryId");

    const edit = async () => {
      if (!editView && type != "edit") {
        setType(e.target.name);
        setEditView(true);
        return;
      }
      try {
        dispatch(startEdditingCat({ image, categoryName, categoryId }));
      } catch (err) {
        console.log(err);
      }
    };
    edit();
    setEditView(false);
  });
  return (
    <Form type="category" onSubmit={handleSubmit(fetchCat)}>
      <Subject>دسته بندی جدید</Subject>
      {type != "delete" && <Titles>نام دسته بندی:</Titles>}
      {type != "delete" && (
        <Input
          type="text"
          {...register("categoryName", { required: true, minLength: 2 })}
        />
      )}
      {errors.categoryName && (
        <ErrorSpan err={"img"}>
          {errors.categoryName.type === "requird"
            ? "نام دسته بندی باید وارد شود!"
            : "نام دسته بندی باید بیشتر از دو حرف باشد!"}
        </ErrorSpan>
      )}
      <Titles>شناسه (ID):</Titles>
      <Input type="number" {...register("categoryId", { required: true })} />
      {errors.categoryId && (
        <ErrorSpan err={"img"}>شناسه دسته بندی باید وارد شود!</ErrorSpan>
      )}
      {type != "delete" && <Titles>عکس دسته بندی:</Titles>}
      {type != "delete" && (
        <UploadImageBox type={"admin"}>
          <UploadIcon icon={faFolderOpen}></UploadIcon>
          <Label htmlFor="avatarCat">انتخاب عکس</Label>
          <FileInput
            type="file"
            id="avatarCat"
            accept="image/*"
            required="true"
            onChange={handleImgCategory}
          />
        </UploadImageBox>
      )}
      <ButtonBox>
        <AddButton
          types={type}
          chooseColor="add"
          disabled={addLoading ? true : false}
          loading={addLoading}
          name="add"
          onClick={handleAdd}
          onMouseEnter={handlType}
        >
          <ButtonContent>
            {!addLoading && <ButtonText>اضافه</ButtonText>}
            {addLoading && (
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
          disabled={editLoading ? true : false}
          loading={editLoading}
          name="edit"
          onClick={handleEdit}
          onMouseEnter={handlType}
        >
          <ButtonContent>
            {!editLoading && <ButtonText>ویرایش</ButtonText>}
            {editLoading && (
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
          onClick={handleDelete}
          onMouseEnter={handlType}
        >
          حذف
        </AddButton>
      </ButtonBox>
    </Form>
  );
};
export default AddCategoryForm;
