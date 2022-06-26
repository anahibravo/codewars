function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }

  /*changed the # to $... I honestly thought I needed to change more I tried to change the 
  .join to .toString but it did not work so I just changed everything back and it worked. */