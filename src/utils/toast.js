import { toast } from 'sonner'

export const toastMessage = (message, type = 'success', id = null) => {
  const toastFunction =
    {
      success: toast.success,
      error: toast.error,
      warning: toast.warning,
      info: toast.info,
    }[type] || toast.success

  // Call the toast function with message and id parameters
  if( message && message?.length ){
    toastFunction(message, { id})
  }
}