function removeExclamationMarks(s) {
    let noExclamation = /!/gi
    return s.replace(noExclamation, '');
  }