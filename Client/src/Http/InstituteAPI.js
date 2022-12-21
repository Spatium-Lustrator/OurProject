import { $host } from "./index";

export const getInstitutes = async (email, password) => {
  const { data } = await $host.get("api/institute/get");
  return data;
};
export const getAllInstitutes = async () => {
  const { data } = await $host.get("api/institute/getall");
  return data;
};
export const addInstitute = async (name, city) => {
  const { data } = await $host.post("api/institute/add", { name, city });
  return data;
};
export const deleteInstitute = async (name) => {
  await $host.post("api/institute/delete", { name });
};
