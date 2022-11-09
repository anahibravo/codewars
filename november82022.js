function htmlspecialchars(formData) {
    /*if (formData == '<'){
      return formData.replace(/</g, "&lt;")
    }else if (formData == '>'){
      return formData  .replace(/>/g, "&gt;")
    }else if (formData == '"'){
      return  formData.replace(/"/g, "&quot;")
    }else (formData == '&')
      return formData.replace(/&/g, "&amp;")*/
      return formData.replace(/&/g, "&amp;")
                   .replace(/"/g, "&quot;")
                   .replace(/</g, "&lt;")
                   .replace(/>/g, "&gt;");
  }
  