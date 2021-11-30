const path = require("path");
const fs = require("fs");

hexo.extend.helper.register("gallery", function () {
  const folder = path.join("source", path.dirname(this.page.source), "images");
  let result = [];
  fs.readdirSync(folder).forEach((file) => {
    result.push({
      name: path.parse(file).name,
      path: path.join("images", file),
    });
  });
  return result;
});
