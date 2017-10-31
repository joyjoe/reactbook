export default {
  "getType": function(name){
    let type = "";
    switch(name){
      case "头条":
        type = "top";
        break;
      case "国内":
        type = "guonei";
        break;
      case "国际":
        type = "guoji";
        break;
      case "时尚":
        type = "shishang";
        break;
      case "科技":
        type = "keji";
        break;
      case "娱乐":
        type = "yule";
        break;
      case "体育":
        type = "tiyu";
        break;
      case "社会":
        type = "shehui";
        break;
      default: 
        type = "top";
        break;
    }
    return type;
  }
};