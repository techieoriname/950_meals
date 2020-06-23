const fs = require("fs");

// ===> $root/api/storage/public
const mainStorageLocation = __dirname + "/storage/items";
// ===> $root/nuxt/storage
const publicStorageLocation =
  __dirname + "/../../nodeprojects/950/static/items";

if (!fs.existsSync(publicStorageLocation)) {
  if (!fs.existsSync(mainStorageLocation)) {
    throw new Error(`Main storage does not exists: ${mainStorageLocation}`);
  }

  // Try Symlinking
  try {
    fs.symlinkSync(mainStorageLocation, publicStorageLocation);
  } catch (e) {
    throw Error(e);
  }
}
