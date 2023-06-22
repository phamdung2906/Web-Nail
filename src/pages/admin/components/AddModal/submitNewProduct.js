import { nanoid } from "nanoid";

const URL = "http://localhost:5000/uploadproduct";

export const submitNewProduct = ({
  method,
  state,
  products,
  setProducts,
  productEdited,
  setViewModal,
}) => {
  if (state.name === "") {
    alert("Vui lòng nhâp tên sản phẩm");
  } else if (state.images.length < 1) {
    alert("Vui lòng thêm ít nhất 1 ảnh sản phẩm");
  } else if (state.price === 0) {
    alert("Vui lòng nhập giá tiền của sản phẩm");
  } else if (state.sale > 99 || state.sale < 0) {
    alert("Vui lòng nhập phần trăm sale trong khoảng 0-99");
  } else if (state.type === "") {
    alert("Vui lòng chọn phân loại sản phẩm");
  } else if (state.description === "") {
    alert("Vui lòng nhập mô tả sản phẩm");
  } else {
    const formData = new FormData();
    formData.append("name", state.name);
    formData.append("price", state.price);
    formData.append("sale", state.sale);
    formData.append("type", state.type);
    formData.append("hot", state.hot);
    formData.append("status", "Running");
    formData.append("description", state.description);

    const fecthData = async () => {
      state.images.forEach((img, index) => {
        formData.append(`image[${index}]`, img);
      });
      formData.append("idProduct", nanoid());
      const response = await fetch(URL, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      // console.log(data.newProduct);

      await setProducts((pre) => [...pre, data.newProduct]);
      await setViewModal(false);
    };
    const updateProduct = async () => {
      formData.append("idProduct", productEdited.idProduct);
      let pastImgs = [];
      state.images.forEach((img, index) => {
        if (typeof img === "string") pastImgs.push(img);
        else formData.append(`image[${index}]`, img);
      });
      formData.append("pastImgs", pastImgs);
      const response = await fetch(URL, {
        method: "PUT",
        body: formData,
      });
      const rep = await response.json();
      // console.log(rep);
      const editedProduct = rep.editedProduct;
      const cloneProducts = products.slice();
      const newArr = cloneProducts.map((pro) =>
        pro.idProduct === editedProduct.idProduct
          ? {
              idProduct: editedProduct.idProduct,
              hot: editedProduct.hot === "false" ? false : true,
              ...editedProduct,
            }
          : pro
      );
      await setProducts(newArr);
      await setViewModal(false);
    };
    if (method === "Update") {
      updateProduct();
      return;
    } else if (method === "Add") {
      const indexExist = products.findIndex(
        (product) => product.name.toLowerCase() === state.name.toLowerCase()
      );
      if (indexExist === -1) {
        fecthData();
        return;
      } else alert("Tên sản phẩm đã tồn tại");
    }
  }
};
