import { redirect } from "react-router-dom"
import { deleteItem } from "../helpers"
import { toast } from "react-toastify"

export async function logoutAction() {
  deleteItem({ key: "userName" })

  toast.success("you have deleted your account")
  return redirect("/")
}
