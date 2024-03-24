import { toast } from "react-toastify";

export const saveToLocalStorage = (data) => {
    let savedData = JSON.parse(localStorage.getItem("donation")) || [];

    const existedData = savedData.find(item => item.id === data.id);
    if (!existedData) {
        savedData.push(data);
        localStorage.setItem("donation", JSON.stringify(savedData));
        toast.success('Data added successfully');
    } else {
        toast.warning("Data already exists");
    }
}

export const getFromLocalStorage = () =>{
    const data = JSON.parse(localStorage.getItem("donation")) || [];
    return data

}
