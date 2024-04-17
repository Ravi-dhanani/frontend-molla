import { Store } from "pullstate";
interface IStoreValue {
  isSuccess: boolean;
  successMessage: string;
  isModelOpen: boolean;
  isEdit: boolean;
}
const StoreValue: IStoreValue = {
  isSuccess: false,
  successMessage: "",
  isModelOpen: false,
  isEdit: false,
};
export const store = new Store(StoreValue);

export function setSuccess(data) {
  return store.update((s) => {
    s.isSuccess = data;
  });
}
export function setSuccessMessage(data) {
  return store.update((s) => {
    s.successMessage = data;
  });
}
export function setIsModel(data) {
  return store.update((s) => {
    s.isModelOpen = data;
  });
}

export function setIsEdit(data) {
  return store.update((s) => {
    s.isEdit = data;
  });
}
