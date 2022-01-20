import axios from "axios";

const instance = axios.create({
  baseURL: "http://restapi.adequateshop.com/api/", //http://restapi.adequateshop.com/api/
  timeout: 10000,
  headers: { "Content-Type": "application/json" }, //application/json
});
export const postInfo = async (url, data, auth) => {
  try {
    const request = await instance.post(url, data, {
      headers: {
        Authorization: auth ? `Bearer ${auth}` : null,
      },
      responseType: "json",
    });
    return request.data;
  } catch (err) {
    return err.message;
  }
};

export const errorHandler = (func) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(func());
    } catch (err) {
      reject(console.log("err.message"));
    }
  });
};

export const uploadPictureToCloudinary = async (image) => {
  const data1 = new FormData();
  data1.append("file", image);
  data1.append("upload_preset", "my-marketing-app");
  data1.append("cloud_name", "my-cloudinary-dashboard");
  try {
    const uploadedImage = await axios.post(
      " https://api.Cloudinary.com/v1_1/my-cloudinary-dashboard/image/upload",
      data1
    );
    return uploadedImage;
  } catch (err) {
    console.log(err);
  }
};
